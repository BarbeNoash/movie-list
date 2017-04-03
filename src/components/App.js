import React, { Component } from 'react';
import '../css/style.css';
import SampleMovies from '../sample-movies';

import Header from './Header';
import Menu from'./Menu';
import Movie from './Movie';
import Favorites from './Favorites';

import { Button, Col, Row } from 'react-bootstrap';

import base from '../base'

class App extends Component {

	constructor(){
  		super();

  		this.loadMovie = this.loadMovie.bind(this);
  		this.addToFavorite =this.addToFavorite.bind(this);
      this.removeFromFavorite =this.removeFromFavorite.bind(this);
  		this.displayFavorite =this.displayFavorite.bind(this);

  		this.state = {
  			movies: {},
  			favorites: {},
  			displayFav: 'invisible'
  		}
  	}

  	componentWillMount(){
		this.ref = base.syncState(`/movies`,
			{
				context : this,
				state: 'movies'
			});

		const localStorageRef = localStorage.getItem(`favorite-list`);

  		if (localStorageRef) {
  			this.setState({
  				favorites: JSON.parse(localStorageRef)
  			});
  		}
	}

	componentWillUnmount(){
		base.removeBinding(this.ref);
	}

	componentWillUpdate(nextProps, nextState){
  		localStorage.setItem(`favorite-list`, JSON.stringify(nextState.favorites));
  	}

  	loadMovie(){
  		this.setState({
  			movies: SampleMovies
  		});
  	}

  	addToFavorite(key){
  		const favorites = this.state.favorites;
  		favorites[key] = 'favorite';
  		this.setState(favorites);
  	}

    removeFromFavorite(key){
      const favorites = this.state.favorites;
      delete favorites[key];
      this.setState(favorites);
    }

  	displayFavorite(){

  		if (this.state.displayFav === 'visible'){
            this.setState({displayFav: 'invisible'});
        } else {
            this.setState({displayFav: 'visible'});
        }
  	}


  render() {
    return (
      <div className="App">
        <Header />
        <Menu displayFavButton={this.displayFavorite}/>
        <Button bsStyle="info" onClick={this.loadMovie}>Charger les films</Button>
        <Row className="show-grid">
          <Col xs={3} md={2}></Col>
          <Col xs={12} md={8}>
            <ul className="movies-container">
              {Object
                .keys(this.state.movies)
                .map(key => <Movie key={key} index={key} details={this.state.movies[key]} addToFavorite={this.addToFavorite} removeFromFavorite={this.removeFromFavorite}/>)
              }
            </ul>
          </Col>
          <Col xs={3} md={2}></Col>
        </Row>
        <Favorites displayFav={this.state.displayFav} displayFavButton={this.displayFavorite} movies={this.state.movies} favorites={this.state.favorites} />

      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}

export default App;

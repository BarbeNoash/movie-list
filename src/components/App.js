import React, { Component } from 'react';
import '../css/App.css';
import SampleMovies from '../sample-movies';

import Header from './Header';
import Movie from './Movie';
import Favorites from './Favorites';

import base from '../base'

class App extends Component {
  
	constructor(){
  		super();

  		this.loadMovie = this.loadMovie.bind(this);
  		this.addToFavorite =this.addToFavorite.bind(this);

  		this.state = {
  			movies: {},
  			favorites: {}
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

  render() {
    return (
      <div className="App">
        <Header />
        <button onClick={this.loadMovie}>Voir les films</button>
        <ul>
        	{Object
        		.keys(this.state.movies)
        		.map(key => <Movie key={key} index={key} details={this.state.movies[key]} addToFavorite={this.addToFavorite} />)
        	}
        </ul>
        <Favorites movies={this.state.movies} favorites={this.state.favorites} />

      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}

export default App;

import React from 'react';

class Favorite extends React.Component {

	constructor(){
		super();

		this.renderFavorite = this.renderFavorite.bind(this);
	}

	renderFavorite(key){

		const movie = this.props.movies[key];

		if(!movie){
			return ;
		}

		return (
			<li key={key}>
				<span>⭐ {movie.show_title}</span>
			</li>
		)
	}

	render(){

		const favoriteMovies = Object.keys(this.props.favorites);

		return (
			<div className={`favorite-column ${this.props.displayFav}`} >
				<h2>Favorite List</h2>
				<button onClick={this.props.displayFavButton} className="close">close</button>
				<ul className="favorite-list">
					{favoriteMovies.map(this.renderFavorite)}
				</ul>
			</div>
		)
	}
}

export default Favorite;
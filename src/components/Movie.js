import React from 'react';

class Movie extends React.Component {
	render(){

		const { details, index } = this.props;
		const isFavorite = this.props.favorites === 'favorite';

		return(
			<li className="movie-list">
				<h3>{details.show_title}</h3>
				<img src={details.poster} alt={details.show_title} />
				<button disabled={isFavorite} onClick={() => this.props.addToFavorite(index)}>add favorite</button>
			</li>
		)
	}
}

export default Movie;
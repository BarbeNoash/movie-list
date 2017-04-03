import React from 'react';
import { Button } from 'react-bootstrap';

class Movie extends React.Component {

	render(){

		const { details, index } = this.props;



		return(
			<li className="movie-list">
				<div className="poster">
					<img src={details.poster} alt={details.show_title} />
				</div>
				<h3>{details.show_title}</h3>
				<Button bsStyle="info" onClick={() => this.props.addToFavorite(index)}>ajouter aux favoris</Button>
				<Button bsStyle="info" onClick={() => this.props.removeFromFavorite(index)}>supprimer des favoris</Button>
			</li>
		)
	}
}

export default Movie;
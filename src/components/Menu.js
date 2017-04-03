import React from 'react';
import logoHome from '../images/home.svg';
import logoStar from '../images/star.svg';
import { Button } from 'react-bootstrap';

class Menu extends React.Component {

	render(){
		return (
			<ul className="menu">
				<li>
					<Button><img src={logoHome} alt="home"/> Home</Button>
				</li>
				<li>
					<Button onClick={this.props.displayFavButton}><img src={logoStar} alt="favorite"/> Favoris</Button>
				</li>
			</ul>
		)
	}
}

export default Menu;
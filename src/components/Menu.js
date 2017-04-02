import React from 'react';
import logoHome from '../images/home.svg';
import logoStar from '../images/star.svg';

class Menu extends React.Component {

	render(){
		return (
			<ul className="menu">
				<li>
					<img src={logoHome} alt="home"/><button>Home</button>
				</li>
				<li>
					<img src={logoStar} alt="favorite"/><button onClick={this.props.displayFav}>Favoris</button>
				</li>
			</ul>
		)
	}
} 

export default Menu;
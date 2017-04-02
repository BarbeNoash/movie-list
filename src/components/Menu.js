import React from 'react';
import logoHome from '../images/home.svg';
import logoStar from '../images/star.svg';

const Menu = (props) => {
	return (
			<ul className="menu">
				<li>
					<img src={logoHome} alt="home"/> Home
				</li>
				<li>
					<img src={logoStar} alt="favorite"/>Favoris
				</li>
			</ul>
	)
} 

export default Menu;
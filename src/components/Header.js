import React from 'react';
import Menu from'./Menu';

const Header = (props) => {
	return (
		<header>
			<h1>
			Film
				<span className="ofThe">
					<span className="of">de</span>
					<span className="the">chez</span>
				</span>
			Moi
			</h1>
			<Menu />
		</header>

	)
} 

export default Header;
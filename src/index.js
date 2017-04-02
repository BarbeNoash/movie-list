import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Favorites from './components/Favorites';
import NotFound from './components/NotFound';
import './css/index.css';

import { BrowserRouter, Match, Miss } from 'react-router';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={App} />
				<Match pattern="/favorites" component={Favorites} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

render(<Root />, document.querySelector('#root'));

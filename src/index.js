import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDjD6qvxJW_rnqO5pTrCnIZzd2StosuM_4'
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDom.render(<App />, document.querySelector('.container'));
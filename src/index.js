import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import resetCss from 'reset-css';
import { createGlobalStyle } from 'styled-components';
import RootStore from './stores';
import MainPage from './pages/MainPage';

const GlobalStyle = createGlobalStyle`
	${resetCss};
	button {
		border: none;
		padding: 0;
	}
`;

ReactDOM.render(
	<Provider rootStore={RootStore}>
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={MainPage} />
			</Switch>
		</BrowserRouter>
		<GlobalStyle />
	</Provider>,
	document.getElementById('root'),
);

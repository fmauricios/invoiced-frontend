import 'purecss/build/pure.css';

import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';
import stores from './stores/';
import { Provider } from 'mobx-react';

import registerServiceWorker from './registerServiceWorker';

render(
	<Provider contacts={stores.contacts}>
		<Routes />
	</Provider>, 
	document.getElementById('root')
)

registerServiceWorker();
import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import injectTapEventPlugin from 'react-tap-event-plugin';


// Render the main component into the dom
injectTapEventPlugin();
ReactDOM.render(<App />, document.getElementById('app'));

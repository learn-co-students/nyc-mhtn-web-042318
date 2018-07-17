import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import { createStore } from "redux"
import reducer from "./reducer"
import { Provider } from "react-redux"

const store = createStore(reducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

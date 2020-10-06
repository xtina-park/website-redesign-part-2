import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {ThemeProvider} from 'styled-components';

import * as theme from './theme.jsx';

ReactDOM.render(
<ThemeProvider theme={theme}><App /></ThemeProvider>
, document.getElementById('root'));

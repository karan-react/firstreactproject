import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/js/dist/popover.js';
import 'jquery/dist/jquery'

import { BrowserRouter } from 'react-router-dom';


import React from 'react';
import ReactDOM from 'react-dom';
import './Style.css';
import App from './App';


// import './App.css';
// import './index.css';
// import ReactDOM from 'react-dom/client';


ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'));








// ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


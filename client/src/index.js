import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <Router>
        <div>
            <Header/>
            <App />
            <Footer/>
        </div>
    </Router>,
    document.getElementById('root')
);
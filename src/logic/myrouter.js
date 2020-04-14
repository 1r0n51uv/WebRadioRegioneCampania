import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "../pages/home";
import Template from "../pages/template";
import Navbar from "../components/navbar";

class Myrouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/template" component={Template}/>
                </div>
            </Router>
        );
    }
}

export default Myrouter;

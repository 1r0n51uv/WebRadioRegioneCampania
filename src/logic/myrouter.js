import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "../pages/home";
import Template from "../pages/template";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Admin from "../pages/admin";

class Myrouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/template" component={Template}/>
                    <Route exact path="/admin" component={Admin}/>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default Myrouter;

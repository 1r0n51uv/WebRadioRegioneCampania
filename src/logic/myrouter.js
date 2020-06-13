import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "../pages/home";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";

class Myrouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/" component={Home}/>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default Myrouter;

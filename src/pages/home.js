import React, {Component} from 'react';
import Overlay from "../components/home/overlay";
import Blog from "./blog";
import Footer from "../components/footer";

class Home extends Component {
    render() {
        return (
            <div>
                <Overlay />
                <Blog />

            </div>
        );
    }
}

export default Home;

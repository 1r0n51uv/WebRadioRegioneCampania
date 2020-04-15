import React, {Component} from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import {onLog} from "firebase";


class Post extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                <a href="#" className="unit-9">
                    <div className="image" style={{backgroundImage: `url(${this.props.img})`}}/>
                    <div className="unit-9-content">
                        <h2>{this.props.title}</h2>
                        {
                            this.props.date !== null &&

                            <span><Moment format="DD MMM YYYY">{this.props.date}</Moment></span>
                        }


                    </div>
                </a>
            </div>
        );
    }
}

export default Post;
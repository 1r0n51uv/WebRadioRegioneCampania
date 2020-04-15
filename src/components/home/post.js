import React, {Component} from 'react';
import img2 from "../../assets/img_2.jpg";
import Moment from 'react-moment';
import 'moment-timezone';


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
                        <span><Moment format="GG MMM YYYY">{this.props.date.toDate()}</Moment></span>
                    </div>
                </a>
            </div>
        );
    }
}

export default Post;

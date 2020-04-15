import React, {Component} from 'react';
import img1 from "../assets/img_1.jpg";
import img2 from "../assets/img_2.jpg";
import img3 from "../assets/img_3.jpg";
import img4 from "../assets/img_4.jpg";

class Blog extends Component {
    render() {
        return (
            <div className="site-section">

                <div className="pb-5">

                    <div className="container">

                        <div className="row">
                            <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto"
                                 data-aos="fade-up">
                                <h2 className="mb-5">Weekly Radio Program</h2>
                            </div>
                        </div>

                        <div className="row no-gutters">
                            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                                <a href="#" className="unit-9">
                                    <div className="image" style={{backgroundImage: `url(${img1})`}}/>
                                    <div className="unit-9-content">
                                        <h2>Art Gossip</h2>
                                        <span>Friday 1:00pm &mdash; 2:30pm</span>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                                <a href="#" className="unit-9">
                                    <div className="image" style={{backgroundImage: `url(${img2})`}}/>
                                    <div className="unit-9-content">
                                        <h2>Good Morning Show</h2>
                                        <span>Friday 1:00pm &mdash; 2:30pm</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                                <a href="#" className="unit-9">
                                    <div className="image" style={{backgroundImage: `url(${img3})`}}/>
                                    <div className="unit-9-content">
                                        <h2>Blues Radio</h2>
                                        <span>Friday 1:00pm &mdash; 2:30pm</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
                                <a href="#" className="unit-9">
                                    <div className="image" style={{backgroundImage: `url(${img4})`}}/>
                                    <div className="unit-9-content">
                                        <h2>Classic Songs</h2>
                                        <span>Friday 1:00pm &mdash; 2:30pm</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Blog;

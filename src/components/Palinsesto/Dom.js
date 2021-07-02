import React, {Component} from 'react';
import pic from './pics.json';

class Dom extends Component {
    render() {
        return (
            <div>
                <div className="site-block-retro d-block d-md-flex">

                    <div className="col2">
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.rockwave})`}}/>
                            <div className="unit-9-content">
                                <h2>RockWave</h2>
                                <span>Domenica 10:00</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image"/>
                            <div className="unit-9-content">
                                <h2>Love in the world</h2>
                                <span>Domenica 11:30</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.intern})`}}/>
                            <div className="unit-9-content">
                                <h2>International Hits</h2>
                                <span>Domenica 12:30 &mdash; 16:00</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.rockwave})`}}/>
                            <div className="unit-9-content">
                                <h2>RockWave</h2>
                                <span>Domenica 16:00</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" />
                            <div className="unit-9-content">
                                <h2>Love in the world</h2>
                                <span>Domenica 17:30</span>
                            </div>
                        </a>

                    </div>

                    <div className="col2">




                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.intern})`}}/>
                            <div className="unit-9-content">
                                <h2>International Hits</h2>
                                <span>Domenica 18:30</span>
                            </div>
                        </a>


                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" />
                            <div className="unit-9-content">
                                <h2>Svalvolati on air</h2>
                                <span>Domenica 20:00</span>
                            </div>
                        </a>



                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.energy})`}}/>
                            <div className="unit-9-content">
                                <h2>Special Energy</h2>
                                <span>Domenica 21:30 &mdash; 22:30</span>
                            </div>
                        </a>



                    </div>



                </div>
            </div>
        );
    }
}

export default Dom;

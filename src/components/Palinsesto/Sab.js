import React, {Component} from 'react';
import pic from './pics.json';

class Sab extends Component {
    render() {
        return (
            <div>
                <div className="site-block-retro d-block d-md-flex">

                    <div className="col2">

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.ruota})`}}/>
                            <div className="unit-9-content">
                                <h2>A ruota libera</h2>
                                <span>Sabato 8:00 &mdash; 8:55</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.groov})`}}/>
                            <div className="unit-9-content">
                                <h2>Grooviera</h2>
                                <span>Sabato 10:00 &mdash; 11:00</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.italy})`}}/>
                            <div className="unit-9-content">
                                <h2>Classifica TOP 20 Italia </h2>
                                <span>Sabato 12:30 &mdash; 16:00</span>
                            </div>
                        </a>



                    </div>

                    <div className="col2">

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.groov})`}}/>
                            <div className="unit-9-content">
                                <h2>Grooviera</h2>
                                <span>Sabato 16:00 &mdash; 17:00</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.energy})`}}/>
                            <div className="unit-9-content">
                                <h2>Special Energy</h2>
                                <span>Sabato 20:00 &mdash; 21:00</span>
                            </div>
                        </a>


                    </div>



                </div>
            </div>
        );
    }
}

export default Sab;

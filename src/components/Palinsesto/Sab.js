import React, {Component} from 'react';
import pic from './pics.json';

class Sab extends Component {
    render() {
        return (
            <div>
                <div className="site-block-retro d-block d-md-flex">

                    <div className="col2">

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.wawa})`}}/>
                            <div className="unit-9-content">
                                <h2>WAWAWIWOWA</h2>
                                <span>Sabato 7:30 &mdash; 7:55</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.ruota})`}}/>
                            <div className="unit-9-content">
                                <h2>A ruota libera</h2>
                                <span>Sabato 8:00 &mdash; 8:55</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image"/>
                            <div className="unit-9-content">
                                <h2>ON AIR</h2>
                                <span>Sabato 10:00 &mdash; 11:00</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" />
                            <div className="unit-9-content">
                                <h2>Seven</h2>
                                <span>Sabato 11:00</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.italy})`}}/>
                            <div className="unit-9-content">
                                <h2>Classifica TOP 20 Italia </h2>
                                <span>Sabato 12:30 &mdash; 16:00</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image"/>
                            <div className="unit-9-content">
                                <h2>ON AIR</h2>
                                <span>Sabato 16:00 &mdash; 17:00</span>
                            </div>
                        </a>


                    </div>

                    <div className="col2">


                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" />
                            <div className="unit-9-content">
                                <h2>Seven</h2>
                                <span>Sabato 17:00 &mdash; 18:00</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.italy})`}}/>
                            <div className="unit-9-content">
                                <h2>Classifica TOP 20 Italia </h2>
                                <span>Sabato 18:00</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image"/>
                            <div className="unit-9-content">
                                <h2>80 Sfida 90</h2>
                                <span>Sabato 21:00</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" />
                            <div className="unit-9-content">
                                <h2>House Zone</h2>
                                <span>Sabato 22:00</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" />
                            <div className="unit-9-content">
                                <h2>Underground Groove</h2>
                                <span>Sabato 23:00</span>
                            </div>
                        </a>


                    </div>



                </div>
            </div>
        );
    }
}

export default Sab;

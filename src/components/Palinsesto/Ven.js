import React, {Component} from 'react';
import pic from './pics.json';

class Ven extends Component {
    render() {
        return (
            <div>
                <div className="site-block-retro d-block d-md-flex">

                    <div className="col2">
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.wawa})`}}/>
                            <div className="unit-9-content">
                                <h2>WAWAWIWOWA</h2>
                                <span>Venerdì 7:00 &mdash; 7:55</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.ruota})`}}/>
                            <div className="unit-9-content">
                                <h2>A ruota libera</h2>
                                <span>Venerdì 8:00 &mdash; 8:55</span>
                            </div>
                        </a>


                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.gigi})`}}/>
                            <div className="unit-9-content">
                                <h2>Gigi Show</h2>
                                <span>Venerdì 10:00 &mdash; 11:00</span>
                            </div>
                        </a>
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.spazi})`}}/>
                            <div className="unit-9-content">
                                <h2>Spazi</h2>
                                <span>Venerdì 12:00 &mdash; 12:10</span>
                            </div>
                        </a>
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.latino})`}}/>
                            <div className="unit-9-content">
                                <h2>Latino Hits</h2>
                                <span>Venerdì 12:30 &mdash; 14:30</span>
                            </div>
                        </a>
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.gigi})`}}/>
                            <div className="unit-9-content">
                                <h2>Gigi Show </h2>
                                <span>Venerdì 16:00 &mdash; 17:00</span>
                            </div>
                        </a>



                    </div>

                    <div className="col2">
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.wawa})`}}/>
                            <div className="unit-9-content">
                                <h2>WAWAWIWOWA</h2>
                                <span>Venerdì 17:00 &mdash; 17:30</span>
                            </div>
                        </a>
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.latino})`}}/>
                            <div className="unit-9-content">
                                <h2>Latino Hits</h2>
                                <span>Venerdì 17:30 &mdash; 19:30</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.spazio})`}}/>
                            <div className="unit-9-content">
                                <h2>Spazio Libero</h2>
                                <span>Venerdì 19:30 &mdash; 21:00</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.jazz})`}}/>
                            <div className="unit-9-content">
                                <h2>Jazz in time</h2>
                                <span>Venerdì 22:00 &mdash; 00:00</span>
                            </div>
                        </a>
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.spazi})`}}/>
                            <div className="unit-9-content">
                                <h2>Spazi</h2>
                                <span>Venerdì 00:00 &mdash; 00:30</span>
                            </div>
                        </a>
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.latino})`}}/>
                            <div className="unit-9-content">
                                <h2>Latino Hits</h2>
                                <span>Venerdì 00:30 &mdash; 02:30</span>
                            </div>
                        </a>
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.maipresto})`}}/>
                            <div className="unit-9-content">
                                <h2>Non è mai troppo presto</h2>
                                <span>Venerdì 04:25 &mdash; 07:00</span>
                            </div>
                        </a>
                    </div>



                </div>
            </div>
        );
    }
}

export default Ven;

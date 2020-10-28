import React, {Component} from 'react';
import pic from './pics.json';

class Mer extends Component {
    render() {
        return (
            <div>
                <div className="site-block-retro d-block d-md-flex">

                    <div className="col2">
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.wawa})`}}/>
                            <div className="unit-9-content">
                                <h2>WAWAWIWOWA</h2>
                                <span>Mercoledì 7:00 &mdash; 7:55</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.ruota})`}}/>
                            <div className="unit-9-content">
                                <h2>A ruota libera</h2>
                                <span>Mercoledì 8:00 &mdash; 8:55</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.gigi})`}}/>
                            <div className="unit-9-content">
                                <h2>Gigi Show</h2>
                                <span>Mercoledì 10:00 &mdash; 11:00</span>
                            </div>
                        </a>
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.spazi})`}}/>
                            <div className="unit-9-content">
                                <h2>Spazi</h2>
                                <span>Mercoledì 12:00 &mdash; 12:10</span>
                            </div>
                        </a>
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.napoli})`}}/>
                            <div className="unit-9-content">
                                <h2>Napoli cantava così</h2>
                                <span>Mercoledì 12:30 &mdash; 14:30</span>
                            </div>
                        </a>
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.gigi})`}}/>
                            <div className="unit-9-content">
                                <h2>Gigi Show </h2>
                                <span>Mercoledì 16:00 &mdash; 17:00</span>
                            </div>
                        </a>



                    </div>

                    <div className="col2">
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.wawa})`}}/>
                            <div className="unit-9-content">
                                <h2>WAWAWIWOWA</h2>
                                <span>Mercoledì 17:00 &mdash; 17:30</span>
                            </div>
                        </a>
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.napoli})`}}/>
                            <div className="unit-9-content">
                                <h2>Napoli cantava così</h2>
                                <span>Mercoledì 17:30 &mdash; 19:30</span>
                            </div>
                        </a>
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.frutti})`}}/>
                            <div className="unit-9-content">
                                <h2>Tutti i Frutti</h2>
                                <span>Mercoledì 21:00 &mdash; 22:00</span>
                            </div>
                        </a>
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.jazz})`}}/>
                            <div className="unit-9-content">
                                <h2>Jazz in time</h2>
                                <span>Mercoledì 22:00 &mdash; 00:00</span>
                            </div>
                        </a>
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.spazi})`}}/>
                            <div className="unit-9-content">
                                <h2>Spazi</h2>
                                <span>Mercoledì 00:00 &mdash; 00:30</span>
                            </div>
                        </a>
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.napoli})`}}/>
                            <div className="unit-9-content">
                                <h2>Napoli cantava così</h2>
                                <span>Mercoledì 00:30 &mdash; 02:30</span>
                            </div>
                        </a>
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.maipresto})`}}/>
                            <div className="unit-9-content">
                                <h2>Non è mai troppo presto</h2>
                                <span>Mercoledì 04:25 &mdash; 07:00</span>
                            </div>
                        </a>
                    </div>



                </div>
            </div>
        );
    }
}

export default Mer;

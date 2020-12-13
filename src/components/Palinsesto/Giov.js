import React, {Component} from 'react';
import pic from './pics.json';

class Giov extends Component {
    render() {
        return (
            <div>
                <div className="site-block-retro d-block d-md-flex">

                    <div className="col2">
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.wawa})`}}/>
                            <div className="unit-9-content">
                                <h2>WAWAWIWOWA</h2>
                                <span>Giovedì 7:00 &mdash; 7:55</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.ruota})`}}/>
                            <div className="unit-9-content">
                                <h2>A ruota libera</h2>
                                <span>Giovedì 8:00 &mdash; 8:55</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.gigi})`}}/>
                            <div className="unit-9-content">
                                <h2>Gigi Show</h2>
                                <span>Giovedì 10:00 &mdash; 11:00</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.around})`}}/>
                            <div className="unit-9-content">
                                <h2>Around the world</h2>
                                <span>Giovedì 12:30 &mdash; 14:30</span>
                            </div>
                        </a>
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.gigi})`}}/>
                            <div className="unit-9-content">
                                <h2>Gigi Show </h2>
                                <span>Giovedì 16:00 &mdash; 17:00</span>
                            </div>
                        </a>



                    </div>

                    <div className="col2">
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.wawa})`}}/>
                            <div className="unit-9-content">
                                <h2>WAWAWIWOWA</h2>
                                <span>Giovedì 17:00 &mdash; 17:30</span>
                            </div>
                        </a>
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.around})`}}/>
                            <div className="unit-9-content">
                                <h2>Around the world</h2>
                                <span>Giovedì 17:30 &mdash; 19:30</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.spazio})`}}/>
                            <div className="unit-9-content">
                                <h2>Spazio Libero</h2>
                                <span>Giovedì 19:30 &mdash; 21:00</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.classic})`}}/>
                            <div className="unit-9-content">
                                <h2>Musica Classica</h2>
                                <span>Giovedì 22:00 &mdash; 00:00</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.around})`}}/>
                            <div className="unit-9-content">
                                <h2>Around the world</h2>
                                <span>Giovedì 00:30 &mdash; 02:30</span>
                            </div>
                        </a>
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.maipresto})`}}/>
                            <div className="unit-9-content">
                                <h2>Non è mai troppo presto</h2>
                                <span>Giovedì 04:25 &mdash; 07:00</span>
                            </div>
                        </a>
                    </div>



                </div>
            </div>
        );
    }
}

export default Giov;

import React, {Component} from 'react';
import pic from './pics.json';

class Lun extends Component {
    render() {

        console.log(pic.maipresto.toString())
        return (
            <div>
                <div className="site-block-retro d-block d-md-flex">

                    <div className="col2">
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.wawa})`}}/>
                            <div className="unit-9-content">
                                <h2>WAWAWIWOWA</h2>
                                <span>Lunedì 7:00 &mdash; 7:55</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.ruota})`}}/>
                            <div className="unit-9-content">
                                <h2>A ruota libera</h2>
                                <span>Lunedì 8:00 &mdash; 9:30</span>
                            </div>
                        </a>



                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}} style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.gigi})`}}/>
                            <div className="unit-9-content">
                                <h2>Gigi Show</h2>
                                <span>Lunedì 10:00 &mdash; 11:00</span>
                            </div>
                        </a>
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" />
                            <div className="unit-9-content">
                                <h2>Alman</h2>
                                <span>Lunedì 12:00 &mdash; 12:30</span>
                            </div>
                        </a>
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.yesno})`}}/>
                            <div className="unit-9-content">
                                <h2>Italia si, Italia no</h2>
                                <span>Lunedì 12:30 &mdash; 14:00</span>
                            </div>
                        </a>




                    </div>

                    <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                        <div className="image" />
                        <div className="unit-9-content">
                            <h2>Two Five </h2>
                            <span>Lunedì 14:30 &mdash; 16:00</span>
                        </div>
                    </a>

                    <div className="col2">
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.wawa})`}}/>
                            <div className="unit-9-content">
                                <h2>WAWAWIWOWA</h2>
                                <span>Lunedì 16:00 &mdash; 17:00</span>
                            </div>
                        </a>
                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.yesno})`}}/>
                            <div className="unit-9-content">
                                <h2>Italia si, Italia no</h2>
                                <span>Lunedì 17:30 &mdash; 19:30</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.spazio})`}}/>
                            <div className="unit-9-content">
                                <h2>Spazio Libero</h2>
                                <span>Lunedì 19:30 &mdash; 21:00</span>
                            </div>
                        </a>

                        <a href="#" className="col1-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100" style={{marginTop: '8%'}}>
                            <div className="image" style={{backgroundImage: `url(${pic.maipresto})`}}/>
                            <div className="unit-9-content">
                                <h2>Non è mai troppo presto</h2>
                                <span>Lunedì 04:25 &mdash; 07:00</span>
                            </div>
                        </a>
                    </div>


                </div>
            </div>
        );
    }
}

export default Lun;

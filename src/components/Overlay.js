import React, {Component} from 'react';
import Logo from './../assets/coverwrrc.jpeg';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { RiVoiceprintLine, RiMusic2Line } from "react-icons/ri";
import BannerCarousel from "./ui/bannerCarousel";
import FbPage from "./fbPage";
import FbComments from "./fbComments";
var Blur = require('react-blur').default;


class Overlay extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            src: "http://188.165.236.130:8067/stream",
            live: true,
            image: Logo,
            title: "On-Air Now"
        }
    }


    render() {
        return (
            <div>

                <Blur img={Logo} blurRadius={10} enableStyles>
                    <div className="site-blocks-cover overlay" data-aos="fade" data-stellar-background-ratio="0.5">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-6 col-xs-12 text-center" data-aos="fade-up" data-aos-delay="400">
                                    <h1>Listen &mdash; {this.state.title} {this.state.live && <RiVoiceprintLine />} {!this.state.live && <RiMusic2Line />}</h1>
                                    <p className="mb-4"><span className="small">Tanta musica per tutti i gusti , ma anche tanta buona informazione per stare al passo con i tempi .
                                        Ascoltare cose belle insegna a pensare ed agire.</span>
                                    </p>

                                    <AudioPlayer
                                        autoPlay={false}
                                        loop={true}
                                        src={this.state.src}
                                        showSkipControls={false}
                                        showJumpControls={false}
                                        showDownloadProgress={false}
                                        showFilledProgress={false}
                                        onError={e => console.log(e)}
                                    />


                                </div>


                            </div>


                        </div>
                    </div>
                </Blur>




                <div className="bg-primary" data-aos="fade">
                    <div className="container">
                        <div className="row justify-content-center">
                            <h3 className="text-center text-white"></h3>
                            <a href="https://www.facebook.com/Web-Radio-Regione-Campania-103449527993974/" className="col-2 text-center py-4 social-icon d-block text-white"><span
                                className="icon-facebook text-white"/></a>
                        </div>
                    </div>
                </div>

                <div data-aos="fade" style={{marginTop: '5%'}}>
                    <div className="container site-section-heading">
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <FbPage />
                            </div>

                            <div className="col-md-5 col-sm-12 col-xs-12">
                                <h2 className="text-center mb-5">Partnership</h2>
                                <BannerCarousel />
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade" style={{marginTop: '5%'}}>
                    <div className="container site-section-heading">
                        <div className="row justify-content-center">

                            <div className="col-md-7 col-lg-7 ">

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Overlay;

import React, {Component} from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import img1 from './../../assets/banner/banner1.png'
import img2 from './../../assets/banner/banner2.png'
import img3 from './../../assets/banner/banner3.jpg'
import img4 from './../../assets/banner/banner4.jpg'
class BannerCarousel extends Component {
    render() {
        return (

                <Carousel
                    autoPlay={3000}
                    stopAutoPlayOnHover
                    infinite>
                    <img onClick={() => window.open('https://www.facebook.com/Studio-Odontoiatrico-Castaldo-1505004786417059') } className="img-fluid" src={img1} />
                    <img onClick={() => window.open('https://www.facebook.com/Streetdance-FSV-394427487946405')} className="img-fluid" src={img2} />
                    <img onClick={() => window.open('https://www.ldgservice.it')} className="img-fluid" src={img3} />

                </Carousel>

        );
    }
}

export default BannerCarousel;

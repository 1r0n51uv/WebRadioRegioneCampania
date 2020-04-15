import React, {Component} from 'react';
import Post from "../components/home/post";
import img from '../assets/img_1.jpg'
import DatePicker from 'react-date-picker';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'reg1',
            img: img,
            date: null
        }
    }
    onChange = date => this.setState({ date })

    render() {
        return (
            <div>
                <div className="site-blocks-cover inner-page-cover overlay" data-aos="fade"
                     data-stellar-background-ratio="0.5" data-aos="fade">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-7 text-center" data-aos="fade-up" data-aos-delay="400">

                                <h2 className="text-white h1">Aggiungi una registrazione</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section bg-light">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-8 col-lg-8 mb-5">

                                <form action="#" className="p-5 bg-white">

                                    <div className="row form-group">
                                        <div className="col-md-12 mb-3 mb-md-0">
                                            <label className="font-weight-bold" htmlFor="fullname">Titolo</label>
                                            <input type="text" id="fullname" className="form-control"
                                                   placeholder="Full Name"/>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="font-weight-bold" htmlFor="email">Data</label>
                                            <br/>
                                            <DatePicker
                                                onChange={this.onChange}
                                                value={this.state.date}
                                                format="d-MM-y"
                                            />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="font-weight-bold" htmlFor="email">Subject</label>
                                            <input type="text" id="subject" className="form-control"
                                                   placeholder="Enter Subject"/>
                                        </div>
                                    </div>


                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="font-weight-bold" htmlFor="message">Message</label>
                                            <textarea name="message" id="message" cols="30" rows="5"
                                                      className="form-control" placeholder="Say hello to us"/>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <input type="submit" value="Send"
                                                   className="btn btn-primary  py-2 px-4 rounded-0"/>
                                        </div>
                                    </div>


                                </form>
                            </div>

                            <Post
                                title={this.state.title}
                                date={this.state.date}
                                img={this.state.img}
                            />

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;

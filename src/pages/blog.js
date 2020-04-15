import React, {Component} from 'react';
import img1 from "../assets/img_1.jpg";
import img2 from "../assets/img_2.jpg";
import img3 from "../assets/img_3.jpg";
import img4 from "../assets/img_4.jpg";
import Post from "../components/home/post";
import {FirestoreCollection} from "react-firestore";


class Blog extends Component {
    render() {
        return (
            <div className="site-section">

                <div className="pb-5">

                    <div className="container">

                        <div className="row">
                            <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto"
                                 data-aos="fade-up">
                                <h2 className="mb-5">Weekly Radio Program</h2>
                            </div>
                        </div>

                        <div className="row no-gutters">
                            <FirestoreCollection
                                path="blog"
                                sort="Date:desc"
                                render={({ isLoading, data }) => {
                                    return isLoading ? (
                                        <h1>loading</h1>
                                    ) : (
                                        data.map(post => (

                                            <Post key={post.id}
                                                  title={post.Title}
                                                  date={post.Date.toDate()}
                                                  img={img2}
                                            />
                                        ))

                                    );
                                }}
                            />
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Blog;

import React from 'react';
import AddServicePost from '../AddServicePost/AddServicePost';
import Banner from '../Banner/Banner';
import DisplayService from '../DisplayService/DisplayService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./Home.css";
const Home = () => {
    return (
        <div>
                    <Header></Header>

            <Banner></Banner>
            <div className="main">
        <div className="container text-center">
            <div className=" text-center">
                <h2>Our Valued Services</h2>
                <p>hanks for stay at Sundarban.We hope to have the pleasure of doing business with you in the future.</p>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="row">
                        <div className="">
                            <div className="service-icon-box">
                                <h2>
                                <i className="fas fa-sitemap text-center"></i> <br />
                                Document Service
                                </h2>
                                <p className="paragraph">Under this service we are providing document delivery for both corporate and retail customers nationwide. Envelopes weighing between 01 to 200 grams are being serviced. These documents are being distributed vide 600+ outlets across Bangladesh.</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="service-icon-box">
                                <h2>
                                <i className="fas fa-award text-center"></i> <br />
                                Value Declared Service
                                </h2>
                                <p className="paragraph">Under this service, through our countrywide 110 branches and agency offices, we collect the value declared amount against “Ecommerce and Condition Parcel Products”</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4"><img className="img-fluid images" src="https://i.ibb.co/pw4ZFjT/cash-delivery-concept-23-2148798392.jpg" alt="" /></div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="row">
                        <div className="">
                            <div className="service-icon-box">
                                <h2>
                                <i className="fas fa-taxi text-center"></i> <br />
                                Mobile & ICT Equipment Service
                                </h2>
                                <p className="paragraph">These are regular parcel services limited to the mobile and ICT importers manufacturers and vendors. who seek the parcel delivery services from us.</p>
                            </div>

                        </div>
                        <div className="">
                            <div className="service-icon-box">
                                <h2>
                                <i className="fas fa-tachometer-alt text-center"></i> <br />
                                Super Express Service
                                </h2>
                                <p className="paragraph">These are Extra urgent delivery documents in the company's list of enveloped services categories, under the "Super Express Service". The Booking rate for each document is BDT 120 / - only.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
            </div>
            <DisplayService></DisplayService>
            <AddServicePost></AddServicePost>
            <Footer></Footer>
        </div>
        
    );
};

export default Home;
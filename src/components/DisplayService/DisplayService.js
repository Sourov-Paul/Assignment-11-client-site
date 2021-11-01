import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./DisplayService.css";
const DisplayService = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div className="main_div ">
      <div className="second_div pb-5">
        <div className="container row">
          <h2 className="text-center mt-3 typeDelivery">Our Delivery Type</h2>
          <Slider {...settings}>
            <div className="col-sm-12">
              <div>
               
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/HqVx78N/young-female-courier-with-delivery-coffee-food-yellow.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="col-sm-12 ">
              <div>
               
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/VBFfPsR/Digital-increasing-bar-graph-with-businessman-hand-overlay.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="col-sm-12 ">
              <div>
              
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/pw4ZFjT/cash-delivery-concept-23-2148798392.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-sm-12 ">
              <div>
               
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/41mHBnp/delivery-service-with-masks-concept-23-2148509518.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-sm-12 ">
              <div>
               
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/pPm7Z7m/Handsome-Young-man-working-with-papers-among-parcels-at-table-in-delivery-department-online-concept.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-sm-12 ">
              <div>
              
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/tZpjf57/close-up-woman-holding-box-with-service-delivery-holding-board-1150-8870.jpg"
                  alt=""
                />
              </div>
            </div>
            
            <div className="col-sm-12 ">
              <div>
              
                <img
                  className="img-fluid"
                  src="https://image.shutterstock.com/image-vector/fast-free-delivery-by-scooter-260nw-1032707941.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-sm-12 ">
              <div>
               
                <img
                  className="img-fluid"
                  src="https://thumbs.dreamstime.com/b/happy-young-asian-delivery-man-red-uniform-medical-face-mask-protective-gloves-carry-cardboard-box-hands-isolated-white-195422895.jpg"
                  alt=""
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default DisplayService;

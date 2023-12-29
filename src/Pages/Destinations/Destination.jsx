import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { destinationdata } from "../../redux/Slice/DestinationSlice";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Destination = () => {
  const { destination } = useSelector((state) => state?.destination);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(destinationdata());
  }, []);

  return (
    <>
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3" >
          <div className="text-center mb-3 pb-3">
            <h6 className="text-primary text-uppercase">Destination</h6>
            <h1>Explore Top Destination</h1>
          </div>
          <OwlCarousel
            className="owl-theme"
            center={true}
            margin={10}
            dots={true}
            loop={true}
            autoplay={true}
            smartSpeed={1000}
            responsive={{
              0: {
                items: 1,
              },
              600: {
                items: 2,
              },
              1000: {
                items: 3,
              },
            }}
          >
            {destination?.map((e) => (
              <div key={e._id} style={{width:"280%"}}>
                <div className="col-lg-4 col-md-6 mb-4" >
                  <div className="destination-item position-relative overflow-hidden mb-2">
                    <img
                      className="img-fluid"
                      src={e.img}
                      alt=""
                      style={{ height: "300px" }}
                    />
                    <Link
                      className="destination-overlay text-white text-decoration-none"
                      to={`/corepackage/${e._id}`}
                    >
                      <h5 className="text-white">{e.destination}</h5>
                      <span>3 Cities</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default Destination;

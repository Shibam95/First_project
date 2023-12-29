import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tourdata } from '../../../redux/Slice/TourPackageSlice';
import { Link, useNavigate } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TourPackage = () => {
  const result = useSelector((state) => state?.tour?.pack);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(tourdata());
  }, [dispatch]);

  const handleSubmit = () => {
    localStorage.removeItem('bookid');
    navigate('/booking');
  };

  return (
    <>
      <div>
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
              <Link className="text-primary text-uppercase" to="/tour">
                Packages
              </Link>
              <h1>Perfect Tour Packages</h1>
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
              {result?.data?.map((p, k) => (
                <div className="text-center pb-4" key={k}>
                  <div className="package-item bg-white mb-2">
                    <img
                      className="img-fluid"
                      src={p.image}
                      alt=""
                      style={{ height: '210px' }}
                    />
                    <div className="p-4">
                      <div className="d-flex justify-content-between mb-3">
                        <small className="m-0">
                          <i className="fa fa-map-marker-alt text-primary mr-2"></i>
                          {p.location}
                        </small>
                        <small className="m-0">
                          <i className="fa fa-calendar-alt text-primary mr-2"></i>
                          {p.duration} days
                        </small>
                        <small className="m-0">
                          <i className="fa fa-user text-primary mr-2"></i>
                          {p.person}
                        </small>
                      </div>
                      <div>
                        <Link
                          className="h5 text-decoration-none"
                          to={`/tourdet/${p?.id}`}
                        >
                          {p.name}
                        </Link>
                      </div>
                      <div>
                        <h6 className="m-0">Rs {p.cost}</h6>
                      </div>

                      <div className="border-top mt-4 pt-4">
                        <div className="d-flex justify-content-between">
                          <h6 className="m-0">
                            <Link
                              className="btn btn-outline-success mt-0"
                              to={`/tourdet/${p?.id}`}
                            >
                              Details
                            </Link>
                          </h6>
                          <h6 className="m-0">
                            <Link
                              className="btn btn-outline-success mt-0"
                              onClick={handleSubmit}
                              to="/booking"
                            >
                              Book Now
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourPackage;

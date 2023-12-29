import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAbout, } from '../../../redux/Slice/AboutSlice';
import { Link } from 'react-router-dom';
import Navbar from '../../Common/Navbar';
import Footer from '../../Common/Footer';

const About = () => {
  const dispatch = useDispatch();

  const { about_data } = useSelector((state) => state?.about);
  useEffect(() => {
      dispatch(fetchAbout())
  }, [dispatch])

// console.log(about_data)
  return (
    <>
    
      <div className="container-fluid py-5">
        {
           about_data?.data?.map((item) => {
            return (
              <>

                <div className="container pt-5">
                  <div className="row">
                    <div className="col-lg-6" style={{ minHeight: 500 }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute w-100 h-100"
                          src={item.image1}
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 pt-5 pb-lg-5">
                      <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
                        <h6
                          className="text-primary text-uppercase"
                          style={{ letterSpacing: 5 }}
                        >
                          About Us
                        </h6>
                        <h1 className="mb-3">{item.title1}</h1>
                        <p>
                          {item.body}
                        </p>
                        <div className="row mb-4">
                          <div className="col-6">
                            <img className="img-fluid" src={item.image2} alt="" />
                          </div>
                          <div className="col-6">
                            <img className="img-fluid" src={item.image3} alt="" />
                          </div>
                        </div>
                        <Link className="btn btn-primary mt-1" to={`/aboutdetails/${item._id}`}>
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

              </>
            )
          })
        }
      </div>
      <div className="container-fluid pb-5">
  <div className="container pb-5">
    <div className="row">
      <div className="col-md-4">
        <div className="d-flex mb-4 mb-lg-0">
          <div
            className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3"
            style={{ height: 100, width: 100 }}
          >
            <i className="fa fa-2x fa-money-check-alt text-white" />
          </div>
          <div className="d-flex flex-column">
            <h5 className="">Competitive Pricing</h5>
            <p className="m-0">
            We believe that travel experiences should be accessible to all. 
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="d-flex mb-4 mb-lg-0">
          <div
            className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3"
            style={{ height: 100, width: 100 }}
          >
            <i className="fa fa-2x fa-award text-white" />
          </div>
          <div className="d-flex flex-column">
            <h5 className="">Best Services</h5>
            <p className="m-0">
            Our goal is to exceed your expectations and create memories that will last a lifetime.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="d-flex mb-4 mb-lg-0">
          <div
            className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3"
            style={{ height: 100, width: 100 }}
          >
            <i className="fa fa-2x fa-globe text-white" />
          </div>
          <div className="d-flex flex-column">
            <h5 className="">Worldwide Coverage</h5>
            <p className="m-0">
            Start your journey of exploration today and let Golden Wings take you on an adventure.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default About












import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Apifetch } from '../../../redux/Slice/BlogSlice';

const Blog = () => {
  const result = useSelector((state) => state?.blog?.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Apifetch());
  }, [dispatch]);

  return (
    <>
      <div>
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
              <Link className="text-primary text-uppercase" to="/blogs">
                Blogs
              </Link>
              <h1>Latest Blog</h1>
            </div>
            <div className="row">
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
                {result?.map((p, k) => (
                  <div key={k} className="text-center pb-4">
                    <div className="package-item">
                      <div className="position-relative">
                        <img
                          className="img-fluid w-100"
                          src={p.image}
                          alt=""
                          style={{ height: '200px', width: '100%' }}
                        />
                        <div className="blog-date">
                          <small className="text-white text-uppercase">
                            {p.date}
                          </small>
                        </div>
                      </div>
                      <div className="bg-white p-4">
                        <div className="d-flex mb-2" style={{ justifyContent: 'center' }}>
                          <p>{p.body}</p>
                        </div>
                        <div className="mb-2">
                          <p>{p.categoryName?.category}</p>
                        </div>
                        <div className="mb-2">
                          <p>{p.tagsName?.tags}</p>
                        </div>
                        <h5>
                          <Link className="w-100 btn btn-primary mt-2" to={`/blogdet/${p?._id}`}>
                            Details
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

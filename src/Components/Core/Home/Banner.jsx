import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchBanner, } from '../../../redux/Slice/BannerSlice';
import Search from './Search';
import { Link } from 'react-router-dom';

const Banner = () => {
    const dispatch = useDispatch();
    const { banner_data } = useSelector((state) => state?.banner);
    useEffect(() => {
        dispatch(fetchBanner())
    }, [dispatch])
    // console.log(banner_data);
    const handlesubmit=()=>{
        localStorage.removeItem("bookid")
    }

    return (
        <>
            <div className="container-fluid p-0">
                <div id="header-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <OwlCarousel className='owl-theme' center={true} nav={true} items={1} margin={20} dots={false} loop={true} autoplay={true} smartSpeed={1500} navText={[' <a class="carousel-control-prev btn "</a><i class="carousel-control-prev-icon mb-n2 btn-dark"></i>',

                            '<a class="carousel-control-next btn"</a><i class="carousel-control-next-icon mb-n2  btn-dark"></i>']}>
                            {
                                 banner_data?.data?.map((obj) => {
                                    return (
                                        <>
                                            <div className="carousel-item active">
                                                <img className="w-100" src={obj.image} style={{ height: '70%' }} alt=''/>
                                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                                    <div className="p-3" style={{ maxWidth: 900 }}>
                                                        <h4 className="text-white text-uppercase mb-md-3">
                                                            {obj.title}
                                                        </h4>
                                                        <h1 className="display-3 text-white mb-md-4">
                                                            {obj.body}
                                                        </h1>
                                                        <Link to="/booking" onClick={handlesubmit} className="btn btn-primary py-md-3 px-md-5 mt-2">
                                                            Book Now
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>


                                        </>
                                    )

                                })
                            }
                        </OwlCarousel>


                    </div>

                </div>


            </div>

            <Search />

        </>
    )
}

export default Banner




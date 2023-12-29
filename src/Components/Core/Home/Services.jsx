import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-3 pb-3">
                        <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>
                            Services
                        </h6>
                        <h1>Tours &amp; Travel Services</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="service-item bg-white text-center mb-2 py-5 px-4">
                                <i className="fa fa-2x fa-route mx-auto mb-4" />
                                <h5 className="mb-2"><Link  to={'/guider'}><button className='btn btn-outline-success'>Travel Guide</button></Link></h5>
                                <p className="m-0">
                                    Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
                                    Amet lorem est amet labore
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="service-item bg-white text-center mb-2 py-5 px-4">
                                <i className="fa fa-2x fa-ticket-alt mx-auto mb-4" />
                                <h5 className="mb-2"><Link to={'/booking'}><button className='btn btn-outline-success'>Ticket Booking</button></Link></h5>
                                <p className="m-0">
                                    Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
                                    Amet lorem est amet labore
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="service-item bg-white text-center mb-2 py-5 px-4">
                                <i className="fa fa-2x fa-hotel mx-auto mb-4" />
                                <h5 className="mb-2"><Link><button className='btn btn-outline-success'>Hotel Booking</button></Link></h5>
                                <p className="m-0">
                                    Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
                                    Amet lorem est amet labore
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services
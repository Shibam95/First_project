import React from 'react'
import { Link } from 'react-router-dom'

const Guider = () => {
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-3 pb-3">
                        <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>
                            Guides
                        </h6>
                        <h1>Our Travel Guides</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                            <div className="team-item bg-white mb-4">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" style={{height:'350px'}} src="Shibam.jpg" alt="" />
                                    <div className="team-social">
                                        <Link className="btn btn-outline-primary btn-square" to="#">
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link className="btn btn-outline-primary btn-square" to="https://www.facebook.com/shibam.basak?mibextid=ZbWKwL">
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link className="btn btn-outline-primary btn-square" to="https://instagram.com/basakshibam?igshid=MzNlNGNkZWQ4Mg==">
                                            <i className="fab fa-instagram" />
                                        </Link>
                                        <Link className="btn btn-outline-primary btn-square" to="https://www.linkedin.com/in/shibam-basak-478735273">
                                            <i className="fab fa-linkedin-in" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <h5 className="text-truncate">Shibam</h5>
                                    <p className="m-0">Tour Guider NorthSection</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                            <div className="team-item bg-white mb-4">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" style={{height:'350px'}} src="Meghna.jpg" alt="" />
                                    <div className="team-social" >
                                        <Link className="btn btn-outline-primary btn-square" to="https://twitter.com/home">
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link className="btn btn-outline-primary btn-square" to="#">
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link className="btn btn-outline-primary btn-square" to="https://www.instagram.com/__.she.shine.__/">
                                            <i className="fab fa-instagram" />
                                        </Link>
                                        <Link className="btn btn-outline-primary btn-square" to="https://www.linkedin.com/feed/?legoTrackingToken=30NfmlWqldVomNMsSBA9z0Kc3RBsCZzkTsCfn9xk6NBkDsCfmhLjmNBkDsCejAVejAZp6lQsSlRsmlirnlK9AVfilh9kQZgfnB2sClAsAZQpmtAqnsCt6VBt6VFnT9BqSlBsRZyrSFvcDpAon1EoSVRomMZp4BQpmtAqnsCc3RKrSBQqndLk7hBpShFtOoMbz0Zpn9LoRdOpOoZsC5gr6lisCsCfmhLjmNBkD9D9z0ZrCZFt6BPrR1MtmZOpOoVejAVejRApnhPpnlNpl9JtkVMtmZOpOpQr7lxpClAfmh9s7lLsCsCjAZ9l4BjjR0Zuk9OpmhOrOpQr7lxpClAfmh9t6VBrmtBsOpQrClQrCAZp4BQrSNP9DhItm5CpmgZp4BQtmZVomMCcDpAon1EoSVRomMZpmRxjClDon0Cq7hTrT9Dfmh9s71x9zwNdzkNcjRAimVLqndOpnoCcPcRd3sUd3AVfmh9tioNoS4Tc6lzejwPejcJdSoPe2RBoP8Qbm4OcS4JdzkNpmhBoj4Zp4BQu6lQrCZz">
                                            <i className="fab fa-linkedin-in" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <h5 className="text-truncate">Meghna</h5>
                                    <p className="m-0">Tour Guider SouthSection</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                            <div className="team-item bg-white mb-4">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" style={{height:'350px'}} src="Supriti.jpg" alt="" />
                                    <div className="team-social">
                                        <Link className="btn btn-outline-primary btn-square" to="#">
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link className="btn btn-outline-primary btn-square" to="https://www.facebook.com/sonali.dabade/">
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link className="btn btn-outline-primary btn-square" to="https://www.instagram.com/voyagersdabade/">
                                            <i className="fab fa-instagram" />
                                        </Link>
                                        <Link className="btn btn-outline-primary btn-square" to="https://www.linkedin.com/in/supriti-gole-3b5445257/">
                                            <i className="fab fa-linkedin-in" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <h5 className="text-truncate">Supriti</h5>
                                    <p className="m-0">Tour Guider EastSection</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                            <div className="team-item bg-white mb-4">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100"  style={{height:'350px'}} src="Susmita.jpg" alt="" />
                                    <div className="team-social">
                                        <Link className="btn btn-outline-primary btn-square" to="https://twitter.com/Susmita70691857?t=gdvAVICaaHp6WAE9Rcn2jw&s=09">
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link className="btn btn-outline-primary btn-square" to="https://www.facebook.com/profile.php?id=100054793634836&mibextid=ZbWKwL">
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link className="btn btn-outline-primary btn-square" to="https://instagram.com/asusmitasaha?igshid=ZDc4ODBmNjlmNQ==">
                                            <i className="fab fa-instagram" />
                                        </Link>
                                        <Link className="btn btn-outline-primary btn-square" to="#">
                                            <i className="fab fa-linkedin-in" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <h5 className="text-truncate">Susmita</h5>
                                    <p className="m-0">Tour Guider WestSection</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Guider
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import {  logout } from '../../redux/Slice/AuthSlice';
import './Navbar.css'; 

const Navbar = () => {

  const { Logouttoggle } = useSelector((state) => state?.auth);
  const name = localStorage.getItem("name");

 
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())

  }
  
  

  return (
    <>
      <div className="container-fluid bg-light pt-3 d-none d-lg-block">
        <div className="container">
       
          <div className="row">
            <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <p>
                  <i className="fa fa-envelope mr-2" />
                  goldenwings@gmail.com
                </p>
                <p className="text-body px-3">|</p>
                <p>
                  <i className="fa fa-phone-alt mr-2" />
                  +918972587906
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-center">
                <Link className="text-primary px-3" to="https://www.facebook.com/shibam.basak?mibextid=ZbWKwL">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link className="text-primary px-3" to="https://www.linkedin.com/in/supriti-gole-3b5445257/">
                  <i className="fab fa-linkedin-in" />
                </Link>
                <Link className="text-primary px-3" to="https://instagram.com/basakshibam?igshid=MzNlNGNkZWQ4Mg==">
                  <i className="fab fa-instagram" />
                </Link>
                <Link className="text-primary pl-3" to="https://www.youtube.com/watch?v=STSP3EXF_o8">
                  <i className="fab fa-youtube" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid position-relative nav-bar p-0">
        <div
          className="container-lg position-relative p-0 px-lg-3"
          style={{ zIndex: 9 }}
        >
          <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
          
            <Link to="" className="navbar-brand">
              <h1 className="m-0 text-primary">
            
              <Link to={'/'}> <img className='logo-photo'  src="logo-final.png" alt="" /></Link>
                {/* <span className="text-dark">Golden</span>Wings */}
              </h1>
            </Link>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between px-3"
              id="navbarCollapse"
            >
              <div className="navbar-nav ml-auto py-0">
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
                <Link to="/tour" className="nav-item nav-link">
                  Tour Packages
                </Link>
                <Link to="/blogs" className="nav-item nav-link">
                  Blog
                </Link>
                <Link to="/contact" className="nav-item nav-link">
                  Contact
                </Link>


                {
                  Logouttoggle ? (
                    <>

                      <i className="fa fa-user " style={{ height: "100%", "margin-top": "34px" }} />
                      <Link className='link' style={{ fontSize: '17px', color: 'deepblue', height: "100%", "margin-top": "30px" }}>{name}</Link>

                      <Link className='link' style={{ fontSize: '17px', color: 'deepblue', height: "100%", "margin-top": "30px",marginLeft:"20px" }} onClick={handleLogout}>Logout</Link>


                    </>

                  ) : (
                    <>
                    <i className="fa fa-user " style={{ height: "100%", "margin-top": "34px" }} />
                    <Link className='link' style={{ fontSize: '17px', color: 'deepblue', height: "100%", "margin-top": "30px","margin-right":"2px" }} to="/login">Login</Link>

            

                      

                    </>
                  )
                }
              </div>
            </div>

          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar



//https://o.remove.bg/downloads/ead2ccdb-30f1-4442-a321-c66f5236d6db/large-removebg-preview.png
import React, { useState } from 'react'
import { useDispatch, useSelector, } from 'react-redux';
import { AddContactdata } from '../redux/Slice/ContactSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Navbar from '../Components/Common/Navbar';
import Footer from '../Components/Common/Footer';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const Contact = () => {
  const initialValue = {
    name: "",
    email: "",
    subject: "",
    message: "",
  }
  const [modalIsopen, setModalIsopen] = useState(false)
  const { Logouttoggle } = useSelector((state) => state?.auth)
  const [user, setUser] = useState(initialValue);
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const name1 =localStorage.getItem("name")
  const email1 =localStorage.getItem("email")
  

  let name, value
  const postUserData = (e) => {
    name = e.target.name
    value = e.target.value
    setUser({ ...user, [name]: value })


    if (name === "name") {
      if (value.length === 0) {
        setError({ ...error, name: "@Name is Required" })
        setUser({ ...user, name: "" })
      } else {
        setError({ ...error, name: "" })
        setUser({ ...user, name: value })
      }
    }
    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "Email is required" })
        setUser({ ...user, email: "" })
      } else {
        setError({ ...error, email: "" })
        setUser({ ...user, email: value })
      }
    }
    if (name === "subject") {
      if (value.length === 0) {
        setError({ ...error, subject: "@Subject is Required" })
        setUser({ ...user, subject: "" })
      } else {
        setError({ ...error, subject: "" })
        setUser({ ...user, subject: value })
      }
    }
    if (name === "message") {
      if (value.length === 0) {
        setError({ ...error, message: "message is Required" })
        setUser({ ...user, message: "" })
      } else {
        setError({ ...error, message: "" })
        setUser({ ...user, message: value })
      }
    }
  }
  const SubmitInfo = async (e) => {
    e.preventDefault()
    let data = {
      "email": user.email,
      "name": user.name,
      "subject": user.subject,
      "message": user.message
  }

    if (Logouttoggle === true) {
      setModalIsopen(false)
    }

      if (Logouttoggle === true) {
        try {
          await AddContactdata(data);
          setUser("")
        
        } catch (error) {
          
          toast.error("An error occurred while submitting contact data.");
        }
        
    
      }



  }

  return (


    <>
    <Navbar/>
    <div style={{backgroundImage:'url(https://img.freepik.com/free-photo/top-view-chat-bubbles-with-telephone-receiver-copy-space_23-2148796078.jpg)'}}>

      <div className="container-fluid py-5" >
        <div className="container py-5">
          <div className="text-center mb-3 pb-3">
            <h6
              className="text-primary text-uppercase"
              style={{ letterSpacing: 5 }}
            >
              Contact
            </h6>
            <h1>Contact For Any Query</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-form bg-white" style={{ padding: 30 }}>
                <div id="success" />
                <form onSubmit={SubmitInfo}  name="sentMessage" id="contactForm" noValidate="novalidate">
                  <div className="form-row">
                    <div className="control-group col-sm-6">
                      <span style={{ color: "red" }}> {error.name} </span>
                      <input
                        type="text"
                        className="form-control p-4"
                        name='name'
                        placeholder="Your Name"
                        value={user.name}
                        onChange={e => { postUserData(e) }}
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group col-sm-6">
                      <span style={{ color: "red" }}> {error.email} </span>
                      <input
                        type="email"
                        className="form-control p-4"
                        name="email"
                        placeholder="Your Email"
                        value={user.email}
                        onChange={e => { postUserData(e) }}
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <span style={{ color: "red" }}> {error.subject} </span>
                    <input
                      type="text"
                      className="form-control p-4"
                      name="subject"
                      value={user.subject}
                      placeholder="Subject"
                      onChange={e => { postUserData(e) }}
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <span style={{ color: "red" }}> {error.message} </span>
                    <textarea
                      className="form-control py-3 px-4"
                      rows={5}
                      name="message"
                      value={user.message}
                      placeholder="Message"
                      onChange={e => { postUserData(e) }}
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="text-center">
                    <button onClick={() => setModalIsopen(true)}
                      className="btn btn-primary py-3 px-4"
                      type="submit"
                      id="sendMessageButton"
                    >
                      Send Message
                    </button>
                    <Modal
                      keepMounted
                      open={modalIsopen}
                      onRequestClose={() => setModalIsopen(false)}
                      aria-labelledby="keep-mounted-modal-title"
                      aria-describedby="keep-mounted-modal-description"
                    >
                      <Box sx={style}>
                        <Typography id="keep-mounted-modal-title" variant="h5" color="green" component="h2">
                          <h2>Alert Message!</h2>
                        </Typography><hr />
                        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                          <h3> Please login for Contact</h3>
                        </Typography>


                        <div className='mt-3 d-flex justify-content-center'>
                          <button className='btn btn-secondary m-2' onClick={() => setModalIsopen(false)}>close</button>

                          <button className='btn btn-success m-2' onClick={() => navigate("/login")}>Login</button>
                        </div>

                      </Box>
                    </Modal>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
<Footer/>
    </>



  )
}

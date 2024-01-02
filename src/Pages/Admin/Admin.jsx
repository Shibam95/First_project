import React, { useState } from 'react';
import { BookingDetails } from '../Booking/BookingDetails';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import './admin.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Contactetails } from '../Contactdetails';
import { Paymentdetails } from '../Paymentdetails';
import { Refunddetail } from '../Refunddetail';
import axiosInstance from '../../Api/apiUrl';

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

export const Admin = () => {
  const [modalIsopen, setModalIsopen] = useState(false);
  const data = localStorage.getItem('name1');
  const email = localStorage.getItem('email1');
  const password = localStorage.getItem('password');
  const navigate = useNavigate();
  const [paymentId, setPaymentId]= useState("");
  const [refundAmount, setRefundAmount] = useState('');

  const handleRefund = async () => {
    try {
      const response = await axiosInstance.post('/refund',{
        paymentId: paymentId,
        refundAmount: refundAmount*100 ,
      
      });

      if (response.status === 200) {
        const result = await response.data;
        // console.log(result);
        toast(result.msg);
      } else {
        // Handle error when the response status is not 200
        console.error('Refund failed:', response.statusText);
      }
      
    } catch (error) {
      console.error('Error during refund:', error);
    }
  };



  const Logouthandle = () => {
    localStorage.removeItem('name1');
    localStorage.removeItem('email1');
    localStorage.removeItem('password');
    toast.success('Admin logout successful');
    navigate('/adminlogin');
  };

  

  return (
    <div>
      <div className="container-fluid">
        <div className="row content p-0">
          <div className="col-md-3 sidenav p-0">
            <div className="d-flex justify-content-between">
              <h6 className="text-white mt-2">ADMIN PANEL</h6>
              {data ? (
                <p>
                  {' '}
                  <button className="btn cstm-btn">
                    <Link onClick={Logouthandle} className="text-white">
                      AdminLogout
                    </Link>
                  </button>
                </p>
              ) : (
                <p>
                  {' '}
                  <button className="btn cstm-btn">
                    <Link to="/adminlogin" className="text-white">
                      AdminLogin
                    </Link>
                  </button>
                </p>
              )}
            </div>
            <br />
            {data ? (
              <>
                <div className="text-center">
                  <div className="admin-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                      <path
                        fill="#fff"
                        d="M7.725 2.146c-1.016.756-1.289 1.953-1.239 2.59c.064.779.222 1.793.222 1.793s-.313.17-.313.854c.109 1.717.683.976.801 1.729c.284 1.814.933 1.491.933 2.481c0 1.649-.68 2.42-2.803 3.334C3.196 15.845 1 17 1 19v1h18v-1c0-2-2.197-3.155-4.328-4.072c-2.123-.914-2.801-1.684-2.801-3.334c0-.99.647-.667.932-2.481c.119-.753.692-.012.803-1.729c0-.684-.314-.854-.314-.854s.158-1.014.221-1.793c.065-.817-.398-2.561-2.3-3.096c-.333-.34-.558-.881.466-1.424c-2.24-.105-2.761 1.067-3.954 1.929z"
                      />
                    </svg>
                  </div>
                  <p className=" m-0" style={{color:"blue"}}>{data} </p>
                  <p className=" m-0" style={{color:"blue"}}>{email}</p>
                  <p className=" m-0" style={{color:"blue"}}>{password?.slice(0, 2)}*******</p>
                </div>
              </>
            ) : (
              <button
                className="btn btn-outline-success text-white"
                onClick={() => setModalIsopen(true)}
                style={{ justifyContent: 'center', display: 'flex', margin: 'auto' }}
              >
                DashBoard
              </button>
            )}
            <br></br>
   <form style={{ marginTop: '50px', }}>
            <label style={{ display: 'block', margin: '10px 0' }}>
            PaymentId
            <input
              type="text"
              value={paymentId}
              onChange={(e) => setPaymentId(e.target.value)}
              style={{
                marginLeft: '10px',
                padding: '5px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                fontSize: '14px',
              }}
            />
          </label>
          
          <label style={{ display: 'block', margin: '10px 0' }}>
            Refund Amount
            <input
              type="number"
              value={refundAmount}
              onChange={(e) => setRefundAmount(e.target.value)}
              style={{
                marginLeft: '10px',
                padding: '5px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                fontSize: '14px',
              }}
            />
          </label>
          </form>
          <br />
          
          <button onClick={handleRefund} className='btn btn-warning' style={{ marginTop: '10px',display:"flex",justifyContent:"center",alignItems:"center",margin:"auto" }}>Refund</button>
          
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-12 mt-4">
                <h4 style={{ background: 'lightgreen', width: '260px' }}>Ticket Booking Details</h4>
                {data ? <BookingDetails /> : ''}
                <br />

                <div className="col-md-12 mt-4">
                <h4 style={{ background: 'lightgreen', width: '260px' }}>Payment Details</h4>
                {data ? <Paymentdetails /> : ''}
                <br />


                
                <div className="col-md-12 mt-4">
                <h4 style={{ background: 'lightgreen', width: '260px' }}>Refund Details</h4>
                {data ? <Refunddetail /> : ''}
                <br />
                
                
                <div className="">
                  <h4 style={{ background: 'lightgreen', width: '200px' }}>Contact Details</h4>
                  {data ? <Contactetails /> : ''}
                  {!data ? (
                    <>
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
                          </Typography>
                          <hr />
                          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                            <h5>Please Admin Login First</h5>
                          </Typography>
                          <div className="mt-3 d-flex justify-content-center">
                            <button className="btn btn-secondary m-2" onClick={() => setModalIsopen(false)}>
                              close
                            </button>
                            <button className="btn btn-success m-2" onClick={() => navigate('/adminlogin')}>
                              AdminLogin
                            </button>
                          </div>
                        </Box>
                      </Modal>
                    </>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>

  );
};

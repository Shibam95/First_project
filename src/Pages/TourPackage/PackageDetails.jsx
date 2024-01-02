
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../Components/Common/Navbar';
import Footer from '../../Components/Common/Footer';
import axiosInstance from '../../Api/apiUrl';
import { toast } from 'react-toastify';


const PackageDetails = () => {
  const [moreData, setMoreData] = useState([]);
  const { id } = useParams();
  const amount= moreData?.cost
  const currency = "INR";
  const receiptId = "qwsaq1";
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userContact, setUserContact] = useState('');



  const paymentHandler = async (e) => {
    const response = await axiosInstance.post("/Create", {
    
        amount:amount,
        currency,
        receipt: receiptId,
    
    });
    const order = await response?.data;
      //  console.log(order);

    var options = {
      key: "rzp_live_XBq9gyvbyaQcpt",
      amount, 
      currency,
      name: "Tour & Travel Private Limited",
      description: "Test Transaction",
      image: "https://cdn5.vectorstock.com/i/1000x1000/24/04/payment-gateway-icon-creative-element-design-from-vector-24022404.jpg",
      order_id: order.id, 
      handler: async function (response) {
        const body = {
          ...response,
        };
        // console.log(body)
        const validateRes = await axiosInstance.post("/Create/Order",body);
        const jsonRes = await validateRes?.data
        toast.success(jsonRes?.msg)
        localStorage.setItem("id",jsonRes?.orderId)
            // console.log(jsonRes);
      },
      prefill: {
        
        name: userName,
        email: userEmail,
        contact: userContact
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3399cc",
      },
    };
    if (window.Razorpay) {
      var rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
      });
      rzp1.open();
      e.preventDefault();
      localStorage.removeItem("orderId");
      localStorage.removeItem("paymentId");
    } else {
      console.error("Razorpay script not loaded");
    }
    
  }


 
  const getMoreData = async () => {
    const res = await axiosInstance.get(`/tour-package-form/${id}`);
    // console.log(res?.data?.data?.[0])
    setMoreData(await res?.data?.data?.[0]);
  }

  useEffect(() => {
    getMoreData();
  }, []);

  

  return (
    <>
    <Navbar/>
     <div style={{ background: 'url(https://wallpaper.dog/large/10807522.jpg)' }}>
      <div class="container-fluid page-header" style={{ height: '400px' }}>
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center" >
            <h3 className="display-4 text-white text-uppercase" style={{ marginTop: "120px" }}>Tour Package Details</h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><Link class="text-white" to="/">Home</Link></p>
              <i className="fa fa-angle-double-right pt-1 px-3"></i>
              <p className="m-0 text-uppercase"><Link class="text-white" to="/tour">Tour Packages</Link></p>
            </div>
          </div>
        </div>
      </div>
      <div className="about" style={{paddingTop:"70px"}}>
        <div className="container_width">
          <div className="row d_flex grig">
            <div className="col-md-6">
              <div className="about_img">
                <figure><img src={moreData?.image} alt=" " style={{ height: "350px" }} />
                </figure>
              </div>
            </div>
            <div className="col-md-6 order">
              <div className="titlepage text_align_left">
                <h2>{moreData?.name}</h2>
                <div className="p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <small className="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>{moreData?.location}</small>
                    <small className="m-0"><i class="fa fa-calendar-alt text-primary mr-2"></i>{moreData?.duration} days</small>
                    <small className="m-0"><i class="fa fa-user text-primary mr-2"></i>{moreData?.person}</small>
                  </div>

                  <p>{moreData?.Subtitle}</p>
                  <h7>Price : {moreData?.cost}</h7>
                  </div>
                  <form >
                  <div className="form-row">
                    <div className="control-group col-sm-6">
                      
                      <input
                        type="text"
                        className="form-control p-4"
                        name='userName'
                        placeholder="Your Name"
                        value={userName} onChange={(e) => setUserName(e.target.value)}
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group col-sm-6">
                      
                      <input
                        type="email"
                        className="form-control p-4"
                        name="userEmail"
                        placeholder="Your Email"
                        value={userEmail} onChange={(e) => setUserEmail(e.target.value)}
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    
                    <input
                      type="number"
                      className="form-control p-4"
                      name="userContact"
                      placeholder='Your Contact'
                      value={userContact} onChange={(e) => setUserContact(e.target.value)}
                    />
                    <p className="help-block text-danger" />
                  </div>
                  
                  
                    
                  
                </form>
                <div className="text-center">
                    <button onClick={ paymentHandler}
                      className="btn btn-primary py-3 px-4"
                    >
                      Payment
                    </button>

                   <p>Note: Refund will be done by admin when user contact with us with there respective paymentId so carefully save your paymentId after succesfull payment.</p>
                  
              </div>
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

export default PackageDetails
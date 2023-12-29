import {  useNavigate, useParams } from 'react-router-dom';
import React, { useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import "./Booking.css"
import { Addbooking, } from '../../redux/Slice/BookSlice';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Navbar from '../../Components/Common/Navbar';
import Footer from '../../Components/Common/Footer';
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



export const Booking = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    member: "",
    startdate: "",
    returndate: "",
    address:""
  })
  const { Logouttoggle } = useSelector((state) => state?.auth)
  const [modalIsopen, setModalIsopen] = useState(false)
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const currency = "INR";
  const receiptId = "qwsaq1";
  const [amount,setAmount]=useState('')
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userContact, setUserContact] = useState('');

  const paymentHandler = async (e) => {
    const response = await axiosInstance.post("/Create", {
  
        amount:amount*100,
        currency,
        receipt: receiptId,
      
      
    });
    const order = await response?.data;
    // console.log(order);

    var options = {
      key: "rzp_live_XBq9gyvbyaQcpt",
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name: "Tour & Travel Private Limited",
      description: "Test Transaction",
      image: "https://cdn5.vectorstock.com/i/1000x1000/24/04/payment-gateway-icon-creative-element-design-from-vector-24022404.jpg",
      order_id: order.id, //This is a sample Order ID. Pass the id obtained in the response of Step 1
      handler: async function (response) {
        const body = {
          ...response,
        };
        const validateRes = await axiosInstance.post("/Create/Order",body)
          
        const jsonRes = await validateRes?.data;
        toast.success(jsonRes?.msg)
        localStorage.setItem("id",jsonRes?.orderId)
        //  console.log(jsonRes);
      },
      prefill: {
        amount:amount,
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
      localStorage.removeItem("id");
    } else {
      console.error("Razorpay script not loaded");
    }
    
  

  };


  



  


  

  let name, value
  const postuserData = (e) => {
    name = e.target.name
    value = e.target.value
    setuser({ ...user, [name]: value })


    if (name === "name") {
      if (value.length === 0) {
        setError({ ...error, name: "@Name is Required" })
        setuser({ ...user, name: "" })
      } else {
        setError({ ...error, name: "" })
        setuser({ ...user, name: value })
      }
    }
    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "Email is required" })
        setuser({ ...user, email: "" })
      } else {
        setError({ ...error, email: "" })
        setuser({ ...user, email: value })
      }
    }
    if (name === "phone") {
      if (value.length === 0) {
        setError({ ...error, phone: "@Phone is Required" })
        setuser({ ...user, phone: "" })
      } else {
        setError({ ...error, phone: "" })
        setuser({ ...user, phone: value })
      }
    }
    if (name === "destination") {
      if (value.length === 0) {
        setError({ ...error, destination: "@Destination is Required" })
        setuser({ ...user, destination: "" })
      } else {
        setError({ ...error, destination: "" })
        setuser({ ...user, destination: value })
      }
    }
    if (name === "member") {
      if (value.length === 0) {
        setError({ ...error, member: "Member is required" })
        setuser({ ...user, member: "" })
      } else {
        setError({ ...error, member: "" })
        setuser({ ...user, member: value })
      }
    }
    if (name === "startdate") {
      if (value.length === 0) {
        setError({ ...error, startdate: "Startdate is Required" })
        setuser({ ...user, startdate: "" })
      } else {
        setError({ ...error, startdate: "" })
        setuser({ ...user, startdate: value })
      }
    }
    if (name === "returndate") {
      if (value.length === 0) {
        setError({ ...error, returndate: "Enddate is Required" })
        setuser({ ...user, returndate: "" })
      } else {
        setError({ ...error, returndate: "" })
        setuser({ ...user, returndate: value })
      }
    }
    if (name === "address") {
        if (value.length === 0) {
          setError({ ...error, address: "Address is Required" })
          setuser({ ...user, address: "" })
        } else {
          setError({ ...error, address: "" })
          setuser({ ...user, address: value })
        }
      }
  }




  const SubmitInfo = async (e) => {
    e.preventDefault()
    let data = {
      "email": user.email,
      "name": user.name,
      "phone": user.phone,
      "destination": user.destination,
      "member": user.member,
      "startdate": user.startdate,
      "returndate": user.returndate,
      "address": user.address,



  }
    
    if (Logouttoggle === true) {
      setModalIsopen(false)
    }

    
      if(Logouttoggle===true){
        try {
          await Addbooking(data);
          setuser({name: "",
          email: "",
          phone: "",
          destination: "",
          member: "",
          startdate: "",
          returndate: "",
          address:""})
          // Additional logic if needed
        } catch (error) {
          toast.error("An error occurred while submitting booking data.");
        }
        
   }   

    }

  return (
    <>
    <Navbar/>
      <div className='main_bg'>
      
      <div className='form'>
      <div className='form-text'>
      <h1 style={{color:"black"}}>Book Now</h1>
      <h5 style={{color:"black"}}>
                  We look forward to welcoming you to our golden wings and creating a truly unforgettable experience for you.
                </h5>
      </div>
      
      <div className='main-form '>
      <form onSubmit={SubmitInfo}>
      <span>
      <div className="main-form-input">
         <span>Name<span style={{color:"red"}}>*</span></span>
          <input type='text' name='name' 
          value={user.name} onChange={e=>postuserData(e)}/>
          <span style={{ color: "red",fontSize:"15px" }}> {error.name} </span> 
      </div>
      <div className="main-form-input">
      <span>Email<span style={{color:"red"}}>*</span></span>
       <input type='email' name='email' 
       value={user.email} onChange={e=>postuserData(e)}/> 
       <span style={{ color: "red",fontSize:"15px" }}> {error.email} </span>
   </div>
   <div className="main-form-input">
   <span>Phone<span style={{color:"red"}}>*</span></span>
    <input type='text' name='phone'
    value={user.phone} onChange={e=>postuserData(e)}/>
    <span style={{ color: "red",fontSize:"15px" }}> {error.phone} </span> 
</div>
<div className="main-form-input">
<span>Destination<span style={{color:"red"}}>*</span></span>
 <input type='text' name='destination' 
 value={user.destination} onChange={e=>postuserData(e)}/> 
 <span style={{ color: "red",fontSize:"15px" }}> {error.destination} </span>
 
</div>
<div className="main-form-input">
<span>Member<span style={{color:"red"}}>*</span></span>
 <input type='number' name='member' 
 value={user.member} onChange={e=>postuserData(e)}/> 
 <span style={{ color: "red",fontSize:"15px" }}> {error.member} </span>
</div>
<div className="main-form-input">
<span>Start Date<span style={{color:"red"}}>*</span></span>
 <input type='date' name='startdate' 
 value={user.startdate} onChange={e=>postuserData(e)}/> 
 <span style={{ color: "red",fontSize:"15px" }}> {error.startdate} </span>
</div>     
 <div className="main-form-input">
<span>Return Date<span style={{color:"red"}}>*</span></span>
 <input type='date' name='returndate'
 value={user.returndate} onChange={e=>postuserData(e)}/> 
 <span style={{ color: "red",fontSize:"15px" }}> {error.returndate} </span>
</div>
<div className="main-form-input">
<span>Address<span style={{color:"red"}}>*</span></span>
 <input type='address' name='address' 
 value={user.address} onChange={e=>postuserData(e)}/> 
 <span style={{ color: "red",fontSize:"15px" }}> {error.address} </span>
</div>
</span>
<div style={{display:"flex",justifyContent:"center",margin:"auto",alignItems:"center"}}>
<button type='submit' onClick={()=>setModalIsopen(true)} style={{ marginRight: "10px" }} className='submit btn btn-warning '>Submit</button>

</div>

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
                          <h3> Please login for Booking</h3>
                        </Typography>


                        <div className='mt-3 d-flex justify-content-center'>
                          <button className='btn btn-secondary m-2' onClick={() => setModalIsopen(false)}>close</button>

                          <button className='btn btn-success m-2' onClick={() => navigate("/login")}>Login</button>
                        </div>

                      </Box>
                    </Modal>

      </form>
      <form >
      <h3 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Payment Form</h3>
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
                    <div style={{display:"flex",margin:"auto"}}>
                    <div className="control-group col-sm-6">
                     
                    <input style={{width:"250px"}}
                      type="number"
                       className="form-control p-4"
                      name="amount"
                      placeholder="Your Amount"
                      value={amount} onChange={(e) => setAmount(e.target.value)}
                    />
                    <p className="help-block text-danger" />
                  </div>

                  </div>
                  <div className="control-group col-sm-6">
                    
                    <input
                      type="number"
                      className="form-control p-4"
                      name="userContact"
                      placeholder='Your Contact'
                      value={userContact} onChange={(e) => setUserContact(e.target.value)}
                    />
                    <p className="help-block text-danger" />
                  </div>
                  
                  
                    </div>
                    
                  
               
                  </form>
                   
                <div className="text-center">
                <button onClick={ paymentHandler}
                  className=" btn btn-success "
      
                >
                  Payment
                </button>
              </div>
      </div>
      </div>
      </div>
      
<Footer/>

    </>
  )
}

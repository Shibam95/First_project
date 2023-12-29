import {  useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import {  useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import "./Booking.css"
import { Editbooking, fetchbooking } from '../../redux/Slice/BookSlice';



export const Bookingedit = () => {
 const [user,setuser]=useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate()
 
  const {id}=useParams()
  const getUser=async()=>{
    const res=await fetchbooking(id)
      console.log(res?.data?.data?.[0])
    setuser(res?.data?.data?.[0])
  }

  useEffect(()=>{
    getUser()
  },[])

  let name, value
  const postuserData = (e) => {
    name = e.target.name
    value = e.target.value
    setuser({ ...user, [name]: value })
}

    
  const SubmitInfo = async (e) => {
    e?.preventDefault()
    
    try {
            
      await Editbooking(id,user)
      navigate("/")

      toast.success("Booking successfully done we will contact you soon...")
      
    } catch (error) {
      toast.error("Invalid")
    }
        
  }

  return (
    <>
      <div className='main_bg'>
      
      <div className='form'>
      <div className='form-text'>
      <h1 style={{color:"white"}}>Book Now</h1>
      <h5 style={{color:"#fff"}}>
                  We look forward to welcoming you to our golden wings and creating a truly unforgettable experience for you.
                </h5>
      </div>
      <div className='main-form'>
      <form onSubmit={SubmitInfo}>
      <div>
         <span>Name<span style={{color:"red"}}>*</span></span>
          <input type='text' name='name' value={user?.name} 
           onChange={e=>postuserData(e)}/>
      </div>
      <div>
      <span>Email<span style={{color:"red"}}>*</span></span>
       <input type='email' name='email' value={user?.email}
       onChange={e=>postuserData(e)}/> 
       
   </div>
   <div>
   <span>Phone<span style={{color:"red"}}>*</span></span>
    <input type='number' name='phone' value={user?.phone}
     onChange={e=>postuserData(e)}/>
  
</div>
<div>
<span>Destination<span style={{color:"red"}}>*</span></span>
 <input type='text' name='destination' value={user?.destination}
  onChange={e=>postuserData(e)}/> 
 
 
</div>
<div>
<span>Member<span style={{color:"red"}}>*</span></span>
 <input type='number' name='member' value={user?.member}
  onChange={e=>postuserData(e)}/> 

</div>
<div>
<span>Start Date<span style={{color:"red"}}>*</span></span>
 <input type='date' name='startdate' value={user?.startdate}
 onChange={e=>postuserData(e)}/> 
 
</div>     
 <div>
<span>Return Date<span style={{color:"red"}}>*</span></span>
 <input type='date' name='returndate' value={user?.returndate}
 onChange={e=>postuserData(e)}/> 

</div>
<div>
<span>Address<span style={{color:"red"}}>*</span></span>
 <input type='address' name='address' value={user?.address}
  onChange={e=>postuserData(e)}/> 
 
</div>
<button type='submit' className='submit btn btn-warning '>Submit</button>
      </form>
      </div>
      </div>
      </div>


    </>
  )
}

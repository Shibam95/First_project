import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import './Login.css'
import { loginRequest1 } from '../../redux/Slice/AdminSlice';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom/dist';


const initialValue = {
    email: "",
    password: ""
}
const AdminLogin = () => {

    const [user, setUser] = useState(initialValue)
    const navigate = useNavigate();
    const dispatch=useDispatch()
    const [error, setError] = useState({});
const data1=localStorage.getItem("password")
const data2=localStorage.getItem("email1")
    //form validation
    const validation = () => {
        let error = {}
        if (!user.email) {
            error.email = "Email is Required"
        } else if (
            !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
        ) {
            error.email = "Enter a valid Email"
        }
        if (!user.password) {
            error.password = "Password is Required"
        }
        return error
    }
    //onchange validation
    let name, value
    const postUserData = (e) => {
        name = e.target.name
        value = e.target.value
        setUser({ ...user, [name]: value })
        if (name === "email") {
            if (value.length === 0) {
                setError({ ...error, email: "Email is required" })
                setUser({ ...user, email: "" })
            } else {
                setError({ ...error, email: "" })
                setUser({ ...user, email: value })
            }
        }
        if (name === "password") {
            if (value.length === 0) {
                setError({ ...error, password: "@password is Required" })
                setUser({ ...user, password: "" })
            } else {
                setError({ ...error, password: "" })
                setUser({ ...user, password: value })
            }
        }
    }

    const SubmitInfo =(e) => {
        // alert()
        e?.preventDefault()
        let ErrorList = validation()
        setError(ErrorList)
        let data = {
            "email": user.email,
            "password": user.password,
        }
        dispatch(loginRequest1(data))
            
            toast.success("Admin login successfull")
            navigate("/admin")
       
        }
    

        
    return (
<>

<div className='background1'></div>
<div className='container1'>
<div className='item1'>
<h1 style={{color:"white"}}>Golden Wings</h1>
<div className='text-item'>
<h2 style={{color:"white"}}>Welcome!<br/><span>To Login Page</span></h2>
<p>Love your morning cup of joe even more by discovering what goes into a satisfying brew on a coffee tour. You’ll
 learn about every stage of the production process, from growing to roasting</p>
<div className='social-icon'>
<a class="text-white px-3" href="">
<i class="fab fa-facebook-f"></i>
</a>
<a class="text-white px-3" href="">
<i class="fab fa-twitter"></i>
</a>
<a class="text-white px-3" href="">
<i class="fab fa-linkedin-in"></i>
</a>
<a class="text-white px-3" href="">
<i class="fab fa-instagram"></i>
</a>
<a class="text-white pl-3" href="">
<i class="fab fa-youtube"></i>
</a>
</div>
</div>
</div>
<div className='login-section'>
<div className='form-box1 login'>
<form action=''>
<h2>Admin SignIn</h2>
<div className='input-box1'>
<span className='icon'><i className="fa-regular fa-envelope"></i></span>
<input type='email' value={user.email} name='email'  onChange={e=>postUserData(e)} placeholder="Enter email"/>
<label >Email</label>
<span style={{ color: "red" }}> {error.email} </span>
</div>
<div className='input-box1'>
<span className='icon'><i class="fa-regular fa-lock"></i></span>
<input type='password' value={user.password} name='password'  onChange={e=>postUserData(e)} placeholder="Enter password"/>
<label >Password</label>
<span style={{ color: "red" }}> {error.password} </span>
</div>
<div className='remember-password'>
<label><input type='checkbox'/>Remember Me</label>
</div>
<button onClick={SubmitInfo} className='btn1'>Log in</button>
<div className='create-account'>


</div>
</form>
</div>
</div>


</div>









</>
    )
}
export default AdminLogin
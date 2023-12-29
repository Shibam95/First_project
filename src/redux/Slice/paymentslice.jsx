import {createAsyncThunk,createSlice}from '@reduxjs/toolkit'
import axiosInstance from '../../Api/apiUrl';


export const paymentfetchdata=createAsyncThunk("payments",async(orderId)=>{
  
    const res= await axiosInstance.get(`/details1/${orderId}`);
    
    //  console.log(res?.data)
    return res?.data;

})


export const paymentdelete=createAsyncThunk("payments",async(id)=>{
  
    const res= await axiosInstance.get(`/delete12/${id}`);
    // toast.success(res?.data?.message)
    // console.log(res?.data)
    return res?.data;

})



const initialState=({
paymentdata1:{},
})


const paymentSlice=createSlice({
    name:'payment',
    initialState,

    extraReducers:{
        
        [paymentfetchdata.fulfilled]: (state, { payload }) => {
            
            state.paymentdata1 = payload;
        },
        
    }

})

export default paymentSlice.reducer



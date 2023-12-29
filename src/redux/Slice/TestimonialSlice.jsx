import {createAsyncThunk,createSlice}from '@reduxjs/toolkit'
import axiosInstance from '../../Api/apiUrl';

export const fetchTest=createAsyncThunk("test/fetch",async()=>{
  
      const res= await axiosInstance.get('/view-testimonial');
      return res?.data;

})

const initialState=({
isloading:false,
isError:false,
testdata:[]
})


const TestimonialSlice=createSlice({
    name:'test',
    initialState,

    extraReducers:{
        [fetchTest.fulfilled]: (state, { payload }) => {
            state.status = "success";
            state.testdata = payload;
        },
        [fetchTest.pending]:(state)=>{
            state.isloading=false
        },
        [fetchTest.rejected]: (state) => {
            state.status = "rejected";
        }
    }

})

export default TestimonialSlice.reducer
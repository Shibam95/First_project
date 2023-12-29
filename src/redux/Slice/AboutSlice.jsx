import {createAsyncThunk,createSlice}from '@reduxjs/toolkit'
import axiosInstance from '../../Api/apiUrl';


export const fetchAbout=createAsyncThunk("about/fetch",async()=>{
  
      const res= await axiosInstance.get('/view-about');
      return res?.data;

})

const initialState=({
isloading:false,
isError:false,
about_data:[]
})


const AboutSlice=createSlice({
    name:'about',
    initialState,

    extraReducers:{
        [fetchAbout.fulfilled]: (state, { payload }) => {
            state.status = "success";
            state.about_data = payload;
        },
        [fetchAbout.pending]:(state)=>{
            state.status="loading......"
            
        },
        [fetchAbout.rejected]: (state) => {
            state.status = "rejected";
        }
    }

})

export default AboutSlice.reducer
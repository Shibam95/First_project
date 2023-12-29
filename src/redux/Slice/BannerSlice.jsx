import {createAsyncThunk,createSlice}from '@reduxjs/toolkit'
import axiosInstance from '../../Api/apiUrl';



export const fetchBanner=createAsyncThunk("banner/fetch",async()=>{
  
      const res= await axiosInstance.get('/view-banner');
    //   console.log(res?.data)
      return res?.data;

})

const initialState=({
isloading:false,
isError:false,
banner_data:[]
})


const BannerSlice=createSlice({
    name:'banner',
    initialState,

    extraReducers:{
        [fetchBanner.fulfilled]: (state, { payload }) => {
            state.status = "success";
            state.banner_data = payload;
        },
        [fetchBanner.rejected]: (state) => {
            state.status = "rejected";
        }
    }

})

export default BannerSlice.reducer



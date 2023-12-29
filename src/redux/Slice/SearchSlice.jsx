import {createAsyncThunk,createSlice}from '@reduxjs/toolkit'
import axiosInstance from '../../Api/apiUrl';

export const fetchBanner=createAsyncThunk("banner/fetch",async()=>{
  
      const res= await axiosInstance.get('/search');
      return res?.data;

})

const initialState=({
isloading:false,
isError:false,
searchdata:[]
})


const SearchSlice=createSlice({
    name:'search',
    initialState,

    extraReducers:{
        [fetchBanner.fulfilled]: (state, { payload }) => {
            state.status = "success";
            state.searchdata = payload;
        },
        [fetchBanner.rejected]: (state) => {
            state.status = "rejected";
        }
    }

})

export default SearchSlice.reducer



import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Api/apiUrl";

const initialState={
    rest:{},
    isloading:false,
    isError:false,
    
}
export const Detailsdata=createAsyncThunk('details',async(id)=>{
    const res=await axiosInstance.get(`/view-details/${id}`)
    //   console.log('details',res?.data);
    return res?.data;
})
const BlogdetailsSlice=createSlice({
    name:"details",
    initialState,
    reducers: {
        
    },
    extraReducers:{
        [Detailsdata.pending]:(state)=>{
            state.isloading=true
        },
        [Detailsdata.fulfilled]:(state,{payload})=>{
            state.isloading=false
            state.rest=payload
            
        },
        [Detailsdata.rejected]:(state)=>{
            state.isError=true;
        }
    }
})
export default BlogdetailsSlice.reducer


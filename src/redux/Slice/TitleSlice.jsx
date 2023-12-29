import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Api/apiUrl";

const initialState={
    rest:{},
    isloading:false,
    isError:false,
    
}
export const titledata=createAsyncThunk('title',async(id)=>{
    const res=await axiosInstance.get(`/destinations/${id}`)
    //  console.log('title',res?.data);
    return res?.data;
})
const TitleSlice=createSlice({
    name:"con",
    initialState,
    reducers: {
        
    },
    extraReducers:{
        [titledata.pending]:(state)=>{
            state.isloading=true
        },
        [titledata.fulfilled]:(state,{payload})=>{
            state.isloading=false
            state.rest=payload
            
        },
        [titledata.rejected]:(state)=>{
            state.isError=true;
        }
    }
})
export default TitleSlice.reducer


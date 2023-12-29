import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Api/apiUrl";

const initialState={
    pack:{},
    isloading:false,
    isError:false,
    
}
export const tourdata=createAsyncThunk('tour',async()=>{
    const res=await axiosInstance.get('/tour-package-form')
    // console.log(res?.data);
    return res?.data;
})
const TourPackageSlice=createSlice({
    name:"tour",
    initialState,
    reducers: {
       
    },
    extraReducers:{
        [tourdata.pending]:(state)=>{
            state.isloading=true
        },
        [tourdata.fulfilled]:(state,{payload})=>{
            state.isloading=false
            state.pack=payload
            // console.log(payload)
            
        },
        [tourdata.rejected]:(state)=>{
            state.isError=true;
        }
    }
})

export default TourPackageSlice.reducer

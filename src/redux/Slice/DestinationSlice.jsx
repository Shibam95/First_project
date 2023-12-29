import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Api/apiUrl";

const initialState={
    destination:null,
    isloading:false,
    isError:false,
    
}
export const destinationdata=createAsyncThunk('destination',async()=>{
    const res=await axiosInstance.get(`/destinations`)
    // console.log(res?.data);
    return res?.data;
})
const DestinationSlice=createSlice({
    name:"destination",
    initialState,
    reducers: {
        
    },
    extraReducers:{
        [destinationdata.pending]:(state)=>{
            state.isloading=true
        },
        [destinationdata.fulfilled]:(state,{payload})=>{
            state.isloading=false
            state.destination=payload
            
        },
        [destinationdata.rejected]:(state)=>{
            state.isError=true;
        }
    }
})
export default DestinationSlice.reducer


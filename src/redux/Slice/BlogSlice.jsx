import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Api/apiUrl";

const initialState={
    post:[],
    isloading:false,
    isError:false,
}
export const Apifetch=createAsyncThunk('blog',async()=>{
    const res=await axiosInstance.get("/view-blog");
    return res?.data;
})
const BlogSlice=createSlice({
    name:"blog",
    initialState,
    reducers: {
        filteredAction(state,action){
            state.filteredData=action.payload;
            state.post = action.payload
        }
    },
    extraReducers:{
        [Apifetch.pending]:(state)=>{
            state.isloading=true
        },
        [Apifetch.fulfilled]:(state,{payload})=>{
            state.isloading=false
            state.post=payload
           
        },
        [Apifetch.rejected]:(state)=>{
            state.isError=true;
        }
    }
})

export default BlogSlice.reducer

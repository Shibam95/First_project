import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";
import axiosInstance from "../../Api/apiUrl";

const initialState = {
    C_data : [],
    isLoading: false,
    isError: false,
    status:null
}

export const Fetchdata1 = createAsyncThunk("contact", async () => {

    let res = await axiosInstance.get("/fetch-data");
    
    return res?.data;

})

export const AddContactdata =async  (data) => {
    const res = await axiosInstance.post("/create123",data);
     toast(res?.data?.message) 
    return res?.data;
    
}
export const DeleteContact = async (id) => {
    await axiosInstance.get(`/delete/${id}`)

}

const ContactSlice=createSlice({
    name:"contact",
    initialState,
    extraReducers:{
        [Fetchdata1.pending]: (state)=>{
            state.isLoading=false
        },
        [Fetchdata1.fulfilled]: (state, {payload})=>{
            state.isLoading=true
            state.C_data=payload
            state.status=payload
    
        },
        [Fetchdata1.rejected]: (state)=>{
         state.isError= true
        }
    }
})

export default ContactSlice.reducer
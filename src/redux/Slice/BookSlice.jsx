import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import axiosInstance from '../../Api/apiUrl';

export const Fetchdata = createAsyncThunk("fetch", async () => {

        let res = await axiosInstance.get("/fetch-data1");
        
        return res?.data;

    })
export const Addbooking =  async (user) => {
        let res = await axiosInstance.post("/create1",user);
        // console.log(res?.data)
        toast(res?.data?.message)
        return res?.data;
        
    } 


    // import axiosInstance if not already imported
// import { axiosInstance } from 'your-axios-instance-path';

// Assuming createAsyncThunk and other necessary imports are correctly set up

// actions.js
export const confirmBooking = createAsyncThunk('book/confirmBooking', async ({ bookingId, status }) => {
  try {
    let updatedStatus;

    if (status === 'Confirmed') {
      // Confirm booking
      await axiosInstance.post(`/booking-confirmation/update`, { bookingId, status: 'Confirmed' });
      updatedStatus = 'Confirmed';
    } else {
      updatedStatus = status; // Handle other status values
    }

    const bookingConfirmationStatus = JSON.parse(localStorage.getItem('bookingConfirmationStatus')) || {};
    bookingConfirmationStatus[bookingId] = updatedStatus;
    localStorage.setItem('bookingConfirmationStatus', JSON.stringify(bookingConfirmationStatus));

    return { bookingId, status: updatedStatus };
  } catch (error) {
    throw error;
  }
});

// BookSlice.js
export const cancelBooking = createAsyncThunk('book/cancelBooking', async ({ bookingId, status }) => {
  try {
    await axiosInstance.post(`/booking-confirmation/update`, { bookingId, status });

    const bookingConfirmationStatus = JSON.parse(localStorage.getItem('bookingConfirmationStatus')) || {};
    bookingConfirmationStatus[bookingId] = status;
    localStorage.setItem('bookingConfirmationStatus', JSON.stringify(bookingConfirmationStatus));

    return { bookingId, status };
  } catch (error) {
    throw error;
  }
});


    
    export const Editbooking = async (id) => {
        const res= await axiosInstance.post(`/edit1/${id}`)
        toast.success(res?.message)
        return res
    }
    
    
    export const fetchbooking = async (id) => {
           try {
            const res= await axiosInstance.get(`/fetch/${id}`)
           return res
           } catch (error) {
            console.log(error)
           }

    }
    
    export const Deletebooking = async id => {
            await axiosInstance.get(`/delete1/${id}`)
    
    }
const initialState = ({
    
    A_data:[],
    bookingConfirmationStatus: {},
     isLoading:false
})

export const BookSlice = createSlice({
    name: "booking",
    initialState,
    reducer: {
        updateBookingConfirmationStatus: (state, action) => {
            state.bookingConfirmationStatus[action.payload.bookingId] = action.payload.status;
          },
        

    },
    extraReducers: {
           
        [confirmBooking.fulfilled]: (state, action) => {
            const { bookingId, status } = action.payload;
            state.bookingConfirmationStatus[bookingId] = status;
          },

        [Fetchdata.pending]: (state) => {
            state.isLoading=false
        
        },
        [Fetchdata.fulfilled]: (state, { payload }) => {
          //  console.log(payload?.data)
            state.isLoading = true
            state.A_data = payload;

            

        },
        [Fetchdata.rejected]: (state) => {
            state.isLoading = false
        },
        
    },

})
export const {updateBookingConfirmationStatus}=BookSlice.actions;
export default BookSlice.reducer
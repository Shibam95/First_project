import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import 'react-toastify/dist/ReactToastify.css'
import axiosInstance from '../../Api/apiUrl';

const initialState = {
  loading: false,
  user: [],
  
}

// export const register = createAsyncThunk("signup", async (data) => {

//   const ress = await axios.post("http://127.0.0.1:3005/register", data);
//   return ress?.data
// });

export const loginRequest1 = createAsyncThunk("admin", async () => {
  const res = await axiosInstance.get("/adminlogin");
  // console.log(res?.data)
  return res?.data;
}
);

export const AdminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {



  },

  extraReducers: {
    // [register.pending]: (state) => {
    //   state.loading = true
    // },
    // [register.fulfilled]: (state, { payload }) => {
    //   state.user = payload
    //   state.token = payload
    //   localStorage.setItem("token", JSON.stringify(state.token));
    //   localStorage.setItem("Auth", JSON.stringify(state.user));


    // },
    // [register.rejected]: (state, { payload }) => {
    //   state.loading = false

    // },

    //login
    [loginRequest1.pending]: (state, action) => {
      state.loading = true;
    },
    [loginRequest1.fulfilled]: (state, { payload }) => {
      
      localStorage.setItem("name1", payload?.data?.[0]?.name)
      localStorage.setItem("email1", payload?.data?.[0]?.email)
      localStorage.setItem("password", payload?.data?.[0]?.password)
    }

  },
  [loginRequest1.rejected]: (state, action) => {
    state.loading = false;

  },
},
)


export default AdminSlice.reducer
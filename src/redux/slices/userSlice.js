import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

const initialState = {
   user: {},
   loading: "",
   error: ""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true
            })

            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload?.userDetails,
                state.loading = false;
                state.error = null;
            })
            .addCase(loginUser.rejected,  (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }          
})

export const loginUser = createAsyncThunk('user/loginUser'  , async(formData, location) => {

    try {
        const response = await axiosInstance.post('/login', formData);
        console.log("location", location)
        if(response.status == 200) {
            const accessToken = response.data?.data?.accessToken
            const refreshToken = response.data?.data?.refreshToken; 

            localStorage.setItem('accessToken',  accessToken);
            localStorage.setItem('refreshToken',  refreshToken);

            setTimeout(() => {
                // window.location.href = location?.pathname || "/"
                window.location.href = location 
                // window.location.href = `${location}`
            }, 1000) 
            return response.data.data;
        }
    } catch (error) {
        console.log("Error logging in user: ",  error);
    }
})

export default userSlice.reducer

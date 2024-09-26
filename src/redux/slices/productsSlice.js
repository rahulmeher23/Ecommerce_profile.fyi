import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  loading: true,
  error: "null",
};

axios.defaults.baseURL = `https://open-fashion-express.vercel.app/api/v1`;

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    console.log("enterd prod slice");
    try {
      console.log("enterd try slice");
      const response = await axios.get("/products");
      console.log("response", response);

      return response.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      const productsArray = action.payload;
      if (productsArray.length > 0) {
        state.products.push(productsArray);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload || "Failed to fetch Products!";
        state.loading = false;
      });
  },
});

export const { addProducts } = productsSlice.actions;
export default productsSlice.reducer;

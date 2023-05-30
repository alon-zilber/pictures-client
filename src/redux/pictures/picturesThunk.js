import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPictures = createAsyncThunk(
  "pictures/fetchPictures",
  async (data, { getState }) => {
    const { page, category } = getState().pictures;

    try {
      const response = await axios.get("http://localhost:5000/pictures", {
        params: { category, page },
      });

      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

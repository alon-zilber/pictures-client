import { createSlice } from "@reduxjs/toolkit";
import { fetchPictures } from "./picturesThunk";

const initialState = {
  pictureList: [],
  category: "cats",
  page: 1,
  totalPages: 1,
  fetching: false,
};

const picturesSlice = createSlice({
  name: "pictures",
  initialState,
  reducers: {
    setCategory: (state, { payload }) => {
      state.category = payload;
    },
    setPage: (state, { payload }) => {
      if (payload < 1 || payload > state.totalPages) return state;
      else state.page = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPictures.pending, (state, { payload }) => {
      state.fetching = true;
    });
    builder.addCase(fetchPictures.fulfilled, (state, { payload }) => {
      if (payload) {
        const newState = {
          ...state,
          pictureList: payload.data,
          totalPages: payload.total,
          fetching: false,
        };
        return newState;
      }
    });
    builder.addCase(fetchPictures.rejected, (state, { payload }) => {
        state.fetching = false;
      });
  },
});

export const { setCategory, setPage } = picturesSlice.actions;

export default picturesSlice.reducer;

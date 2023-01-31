import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../../model/post";

interface PostList {
  data: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostList = {
  data: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,

  reducers: {
    startFetchingPost: (state) => state,

    addPost: (state, action: PayloadAction<Post>) => {
      state.data = [...state.data, action.payload];
    },

    getAllPost: (state, action: PayloadAction<Post[]>) => {
      state.data = action.payload;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    loadingError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const {
  startFetchingPost,
  addPost,
  getAllPost,
  setLoading,
  loadingError,
} = postSlice.actions;

export default postSlice.reducer;

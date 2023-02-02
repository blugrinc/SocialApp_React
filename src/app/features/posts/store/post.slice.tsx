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

    //CRUD:
    addPost: (state, action: PayloadAction<Post>) => {
      state.data = [action.payload, ...state.data];
    },

    editPost: (state, action: PayloadAction<Post>) => {
      const data = state.data.find((post) => post.id === action.payload.id);
      if (data) {
        data.title = action.payload.title;
        data.body = action.payload.body;
      }
    },
    deletePost: (state, action: PayloadAction<Post>) => {
      state.data = state.data.filter((post) => post.id !== action.payload.id);
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
  getAllPost,
  setLoading,
  loadingError,
  addPost,
  deletePost,
  editPost,
} = postSlice.actions;

export default postSlice.reducer;

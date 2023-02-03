import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../../model/post";
import { Comment } from "../../../model/comment";

interface PostList {
  data: Post[];
  dataComments: Comment[];
  page: number;
  loading: boolean;
  error: string | null;
}

const initialState: PostList = {
  data: [],
  dataComments: [],
  page: 1,
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,

  reducers: {
    startFetchingPost: (state) => state,
    startFetchingComments: (state) => state,

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
    getAllComment: (state, action: PayloadAction<Comment[]>) => {
      state.dataComments = action.payload;
    },

    //Pagination
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    //Loader
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
  startFetchingComments,
  getAllPost,
  getAllComment,
  setLoading,
  loadingError,
  addPost,
  deletePost,
  editPost,
  setPage,
} = postSlice.actions;

export default postSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../model/user";

interface UserList {
  data: User[];
}

const initialState: UserList = {
  data: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    startFetchingUser: (state) => state,

    getAllUser: (state, action: PayloadAction<User[]>) => {
      state.data = action.payload;
    },
  },
});

export const { startFetchingUser, getAllUser } = userSlice.actions;

export default userSlice.reducer;

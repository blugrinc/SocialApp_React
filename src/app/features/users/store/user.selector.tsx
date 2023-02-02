import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../../redux/store";

const selectDomainList = (state: RootState) => state.users;

export const selectAllUsers = createSelector(
  [selectDomainList],
  (object) => object.data
);

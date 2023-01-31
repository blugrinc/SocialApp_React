import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../../redux/store";

const selectDomainList = (state: RootState) => state.posts;

export const selectAllPost = createSelector(
  [selectDomainList],
  (object) => object.data
);

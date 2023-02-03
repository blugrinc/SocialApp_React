import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../../redux/store";

const selectDomainList = (state: RootState) => state.posts;

export const selectAllPost = createSelector(
  [selectDomainList],
  (object) => object.data
);
export const selectAllComment = createSelector(
  [selectDomainList],
  (object) => object.dataComments
);
export const selectPage = createSelector(
  [selectDomainList],
  (object) => object.page
);
export const selectLoading = createSelector(
  [selectDomainList],
  (object) => object.loading
);

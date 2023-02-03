import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { setPage } from "../../features/posts/store/post.slice";
import { selectPage } from "../../features/posts/store/post.selector";
import "./style.css";

export const Pagination = () => {
  const page = useAppSelector(selectPage);
  const dispatch = useAppDispatch();

  function toPrevPage() {
    if (page === 1) return;
    dispatch(setPage(page - 1));
  }

  function toNextPage() {
    if (page === length) return;
    dispatch(setPage(page + 1));
  }

  return (
    <div className="pagination">
      <button className="button" onClick={toPrevPage} disabled={page === 1}>
        Prev Page
      </button>
      <div className="pag">{`${page}/10`}</div>
      <button className="button" onClick={toNextPage} disabled={page === 10}>
        Next Page
      </button>
    </div>
  );
};

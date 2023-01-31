import React from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";

import { SinglePost } from "../../components/singlePost/SinglePost";
import { startFetchingPost } from "./store/post.slice";
import { selectAllPost } from "./store/post.selector";
import "./style.css";

export const Posts = () => {
  const post = useAppSelector(selectAllPost);
  const dispatch = useAppDispatch();

  console.log(post);

  useEffect(() => {
    dispatch(startFetchingPost());
  }, []);

  return (
    <section className="posts-list">
      {post.map((element) => (
        <SinglePost key={element.id} post={element} />
      ))}
    </section>
  );
};

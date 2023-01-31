import React from "react";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";

import { startFetchingPost } from "./store/post.slice";
import { selectAllPost } from "./store/post.selector";

export const Posts = () => {
  const post = useAppSelector(selectAllPost);
  const dispatch = useAppDispatch();

  console.log(post);

  useEffect(() => {
    dispatch(startFetchingPost());
  }, []);

  return (
    <div>
      {post.map((element) => (
        <div key={element.id}>
          <br />
          userId: {element.userId}
          <br />
          postId: {element.id}
          <br />
          Titolo: {element.title}
          <br />
          Corpo: {element.body}
        </div>
      ))}
    </div>
  );
};

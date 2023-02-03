import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { ListPost, SinglePost } from "../../components/post/Post";
import { AddPostForm } from "../../components/addPostForm/AddPostForm";
import { startFetchingPost, startFetchingComments } from "./store/post.slice";
import {
  selectAllPost,
  selectPage,
  selectLoading,
  selectAllComment,
} from "./store/post.selector";
import { Post } from "../../model/post";
import { ScrollButton } from "../../components/buttons/Buttons";
import { Pagination } from "../../components/pagination/Pagination";
import { Loader } from "../../components/loader/Loader";
import "./style.css";
import { Comment } from "../../model/comment";

export const PostList = () => {
  //STATE SELECTOR
  const post = useAppSelector(selectAllPost);
  const page = useAppSelector(selectPage);
  const comments = useAppSelector(selectAllComment);
  const loading = useAppSelector(selectLoading);
  //DISPATCH
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startFetchingPost());
    dispatch(startFetchingComments());
  }, [page]);

  return (
    <section className="posts-list">
      <AddPostForm />
      <div>
        <h2>Posts</h2>
        <Pagination />
        <ScrollButton />

        {loading ? (
          <Loader />
        ) : (
          <div>
            {post.map((element) => {
              const comment: Comment[] = comments.filter(
                (comment) => comment.postId === element.id
              );
              return (
                <ListPost
                  key={element.title}
                  post={element}
                  comment={comment}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export const PostPage = () => {
  const { id } = useParams();
  const allPosts = useAppSelector(selectAllPost);
  const comments = useAppSelector(selectAllComment);

  let post: Post | undefined;
  let comment: Comment[];

  if (id) {
    post = allPosts.find((post) => post.id === +id);
    comment = comments.filter((comment) => comment.postId === post?.id);
  }

  return (
    <section>
      <SinglePost post={post!} comment={comment!} />
    </section>
  );
};

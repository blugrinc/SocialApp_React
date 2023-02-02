import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooks";
import { UsersList } from "../../components/user/User";
import { selectAllPost } from "../posts/store/post.selector";
import { selectAllUsers } from "./store/user.selector";
import { startFetchingUser } from "./store/user.slice";
import { Link } from "react-router-dom";
import "./style.css";

export const UserList = () => {
  const users = useAppSelector(selectAllUsers);

  return (
    <section>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <UsersList key={user.id} user={user} />
        ))}
      </ul>
    </section>
  );
};

export const UserPage = () => {
  const { id } = useParams();
  const users = useAppSelector(selectAllUsers);
  const posts = useAppSelector(selectAllPost);

  let user;
  let userPosts;

  if (id) {
    user = users.find((user) => user.id === +id);
    userPosts = posts.filter((post) => post.userId === +id);
  }

  return (
    <section>
      <h2 className="center">{user?.name}</h2>

      <h3>Post List:</h3>
      <ul>
        {userPosts?.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}> {post.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

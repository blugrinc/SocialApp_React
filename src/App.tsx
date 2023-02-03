import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PostPage, PostList } from "./app/features/posts/PostPage";
import { UserPage, UserList } from "./app/features/users/UserPage";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks/hooks";
import {
  startFetchingComments,
  startFetchingPost,
} from "./app/features/posts/store/post.slice";
import { startFetchingUser } from "./app/features/users/store/user.slice";
import NavBar from "./app/components/navbar/NavBar";
import { EditPost } from "./app/components/editPostForm.tsx/EditPost";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(startFetchingPost());
    dispatch(startFetchingUser());
    dispatch(startFetchingComments());
  }, []);

  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/editPost/:id" element={<EditPost />} />

          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

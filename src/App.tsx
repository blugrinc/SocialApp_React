import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Posts } from "./app/features/posts/Posts";
import NavBar from "./app/components/navbar/NavBar";
import { Counter } from "./app/components/counter/Counter";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                {/*  <AddPostForm /> */}
                <Posts />
              </React.Fragment>
            }
          />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

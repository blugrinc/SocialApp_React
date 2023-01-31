import React from "react";
import { Counter } from "./app/components/counter/Counter";
import { Posts } from "./app/page/Posts/Posts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Posts />
      </header>
    </div>
  );
}

export default App;

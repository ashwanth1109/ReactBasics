import ReactDOM from "react-dom";
import React from "react";
import Comments from "./components/Comments";

const App = () => (
    <div>
        <Comments />
    </div>
);

ReactDOM.render(<App />, document.querySelector("main"));

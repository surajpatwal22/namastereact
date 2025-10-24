import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {id: "heading"}, "Hello World from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const heading =React.createElement("div",{id:parent},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"h1heading"),React.createElement("h2",{},"h2 heading")]
    ),React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"h1heading"),React.createElement("h2",{},"h2 heading")]
    )]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(heading);
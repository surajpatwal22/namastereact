import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

// const heading = React.createElement("h1", {id: "heading"}, "Hello World from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const heading =React.createElement("div",{id:parent},
//     [React.createElement("div",{id:"child" , key: "child" },
//         [
//             React.createElement("h1", { key: "h1a" }, "h1 heading"),
//             React.createElement("h2", { key: "h2a" }, "h2 heading"),
//           ]
//     ),React.createElement("div",{id:"child2" , key: "child2" },
//         [
//             React.createElement("h1", { key: "h1b" }, "h1 heading"),
//             React.createElement("h2", { key: "h2b" }, "h2 heading"),
//           ]
//     )]
// )
// const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(heading);

//reacxt element 
// const headingusingjsx = (
//     <div id="parent" className="parent">
//         <div id="child" className="child">
//             <h1 key="h1a">h1 heading using jsx</h1>
//             <h2 key="h2a">h2 heading using jsx</h2>
//         </div>
//         <div id="child2" className="child2">
//             <h1 key="h1b">h1 heading using jsx</h1>
//             <h2 key="h2b">h2 heading using jsx</h2>
//         </div>
//     </div>
// )
// const coount = 0;

// const Title = () => (
//     <div>
//         <h1>Title</h1>
//     </div>
// )

//functional component => return some peice of jsx
// const HeaderComponent = () => {
//     return (
//         <div>
//             <Title />
//             {Title()}
//             <h1>{coount}Header</h1>
//         </div>
//     )
// }

const AppLayout = () => {
    return (
        <div className="app">
            <div className="container">
                <Header />
                <Body />
                <Footer />
            </div>

        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(headingusingjsx);
root.render(<AppLayout />);
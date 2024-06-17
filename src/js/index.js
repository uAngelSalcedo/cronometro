//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/counter.jsx";

let counter = 0 

setInterval(() => {

    counter += 1;

const seconds = counter.toString(); 

    
    ReactDOM.render(<Counter seconds={seconds} />, document.querySelector("#app"));

}, 1000);

//render your react application



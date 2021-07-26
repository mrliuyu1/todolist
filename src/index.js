// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

import {createStore} from "redux"

function reducer(state, action){
    
    console.log(action);



}

const store = createStore(reducer)
console.log(store);


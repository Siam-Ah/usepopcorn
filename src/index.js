import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App-v1";
import "./index.css";
// import App from "./App";

import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    /> */}
    <App />
    {/* <StarRating size={24} color="red" className="test" defaultRating={3} /> */}
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="w-full max-w-[1200px] min-w-[800px] mx-auto h-screen ">
      <App />
    </div>
  </React.StrictMode>
);

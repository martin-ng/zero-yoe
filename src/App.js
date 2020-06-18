import React from "react";
import "./App.css";

import { Jobs } from "./components/index";

const mockData = [
  { title: "New Grad", company: "Google" },
  { title: "New Grad", company: "Facebook" },
  { title: "New Grad", company: "Twitter" },
  { title: "New Grad", company: "Chase" },
  { title: "New Grad", company: "Capital" },
];

const App = () => {
  return (
    <div className="app">
      <div>
        <Jobs mockData={mockData} />
      </div>
    </div>
  );
};

export default App;

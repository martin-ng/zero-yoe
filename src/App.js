import React, { useState, useEffect } from "react";
import "./App.css";

import { GITHUB_URL } from "./public_url";

import { Jobs } from "./components/index";
import fetch from "node-fetch";

const mockData = [
  { title: "New Grad", company: "Google" },
  { title: "New Grad", company: "Facebook" },
  { title: "New Grad", company: "Twitter" },
  { title: "New Grad", company: "Chase" },
  { title: "New Grad", company: "Capital" },
];

async function fetchJobs() {
  const githubData = await fetch(GITHUB_URL);
  const githubJobs = githubData.json();
  console.log("github jobs", githubJobs);
}

const App = () => {
  const [jobsList, setJobs] = useState([]);

  useEffect(() => {
    console.log("calling fetch jobs");
    fetchJobs();
  }, []);

  return (
    <div className="app">
      <div>
        {/* <Jobs mockData={mockData} /> */}
        <Jobs jobsList={jobsList} />
      </div>
    </div>
  );
};

export default App;

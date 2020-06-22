import React, { useState, useEffect } from "react";
import "./App.css";

import { JOB_URL } from "./public_url";

import { Jobs } from "./components/index";
import fetch from "node-fetch";

const mockData = [
  { title: "New Grad", company: "Google" },
  { title: "New Grad", company: "Facebook" },
  { title: "New Grad", company: "Twitter" },
  { title: "New Grad", company: "Chase" },
  { title: "New Grad", company: "Capital" },
];

async function fetchJobs(setJobs) {
  console.log(`fetching from ${JOB_URL}`);
  const githubData = await fetch(JOB_URL);
  const githubJobs = await githubData.json();
  setJobs(githubJobs);
  console.log("github jobs", githubJobs);
}

const App = () => {
  const [jobsList, setJobs] = useState([]);

  useEffect(() => {
    console.log("calling fetch jobs");
    fetchJobs(setJobs);
  }, []);

  return (
    <div className="app">
      <div>
        <Jobs jobsList={jobsList} />
      </div>
    </div>
  );
};

export default App;

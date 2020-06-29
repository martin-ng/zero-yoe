import React, { useState, useEffect } from "react";
import "./App.css";

import { JOB_URL, PROD_URL } from "./public_url";

import { Jobs } from "./components/index";
import fetch from "node-fetch";

import { Navbar } from "./components/index";

/*
 * Prod_url is uncommented for the production deployment.
 */

async function fetchJobs(setJobs) {
  console.log(`fetching from ${JOB_URL}`);
  const githubData = await fetch(JOB_URL);
  const githubJobs = await githubData.json();
  // console.log(`fetching from ${PROD_URL}`);
  // const githubData = await fetch(PROD_URL);
  // const githubJobs = await githubData.json();
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
        <Navbar />
      </div>
      <div id="main-body">
        <h1>Entry Level Software Engineering Jobs</h1>
        <Jobs jobsList={jobsList} />
      </div>
    </div>
  );
};

export default App;

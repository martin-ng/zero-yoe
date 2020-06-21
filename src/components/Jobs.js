import React from "react";
import "./components.css";

import { Job } from "./index";

export default function Jobs(props) {
  const jobsList = props.jobsList;

  return (
    <div>
      <div>
        <h1>Entry Level Software Engineering Jobs</h1>
      </div>
      <div>
        {jobsList.length ? (
          jobsList.map((job, index) => <Job key={index} data={job} />)
        ) : (
          <h1>NOTHING FOR NOW!</h1>
        )}
      </div>
    </div>
  );
}

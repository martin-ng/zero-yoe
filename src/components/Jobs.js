import React from "react";
import "./components.css";

import { Job } from "./index";

export default function Jobs(props) {
  const jobsArray = props.mockData;

  return (
    <div>
      <div>
        <h1>Entry Level Software Engineering Jobs</h1>
      </div>
      <div>
        {jobsArray.map((job, index) => (
          <Job key={index} data={job} />
        ))}
      </div>
    </div>
  );
}

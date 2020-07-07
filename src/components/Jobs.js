import React, { useState, useEffect } from "react";

import "./components.css";

import { Job, ModalCard } from "./index";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 400,
//     flexGrow: 1,
//   },
// });

export default function Jobs(props) {
  const jobsList = props.jobsList;

  return (
    <div className="jobs-container">
      <div>
        <div id="job-list">
          {jobsList.length ? (
            jobsList.map((job, index) => <Job key={index} data={job} />)
          ) : (
            <h1>Loading Jobs!</h1>
          )}
        </div>
      </div>
    </div>
  );
}

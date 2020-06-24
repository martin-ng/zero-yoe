import React, { useState, useEffect } from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import "./components.css";

import { Job } from "./index";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
});

export default function Jobs(props) {
  const jobsList = props.jobsList;

  const numOfJobs = jobsList.length;
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="jobs-container">
      <div>
        <div id="job-list">
          {jobsList.length ? (
            jobsList.map((job, index) => <Job key={index} data={job} />)
          ) : (
            <h1>NOTHING FOR NOW!</h1>
          )}
        </div>
        <div className="step-button">
          <div>
            Page {activeStep} of {numOfJobs}
          </div>
          <MobileStepper
            variant="progress"
            steps={Math.ceil(numOfJobs / 25)}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === 5}
              >
                Next
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <KeyboardArrowLeft />
                Back
              </Button>
            }
          />
        </div>
      </div>
    </div>
  );
}

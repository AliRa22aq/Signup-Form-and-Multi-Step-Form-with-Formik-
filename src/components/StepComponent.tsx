import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Names} from './forms/Names';
import {Address} from './forms/Address';
import {Experience} from './forms/Experience';
import {Submission} from './forms/Submission';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Personal', 'Address', 'Experience', "Submitted"];
}


function getStepContent(stepIndex:any, setActiveStep:any, data:any, setData:any) {
  switch (stepIndex) {
    case 0:
      return <div> <Names submit={setActiveStep} setData = {setData} data={data}/>  </div>
    case 1:
      return <div> <Address submit={setActiveStep} setData = {setData} data={data}/>  </div>
    case 2:
      return <div> <Experience submit={setActiveStep} setData = {setData} data={data}/>  </div>
    case 3:
      return <div> <Submission submit={setActiveStep} data={data}/>  </div>
    default:
      return 'Unknown stepIndex';
  }
}

export default function StepComponent() {
  
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = getSteps();
  const [data, setData] = React.useState({})
  console.log(data)

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep, setActiveStep, data, setData)}
              </Typography>
          </div>
        )}
      </div>
    </div>
  );
}

import React from 'react';
import { Formik, Field, Form, FormikProps, ErrorMessage } from 'formik';
import {namesSchema} from '../schemas'
import FormFields from "../fields/FormFields";
import { Button } from '@material-ui/core';
import SelectFields from '../fields/SelectField';



export const Names: React.FC<any>  = ({submit, setData, data}) => {

  return (
    <div> 

    <Formik
      initialValues={ data }
      validationSchema={namesSchema}
      onSubmit={(values) => {
        submit(1)
        setData({...values, ...data})
      }}
    > 
            <Form>

            <SelectFields name="title " label="Title" options = {["Mr.", "Ms.", "Dr.", "Engr"]} /> <br />
            <FormFields name="firstName" label="Enter your first name" /> <br />
            <FormFields name="lastName" label="Enter your last name" /><br />
            <SelectFields name="gender" label="Gender" options = {["Male", "Female", "Not Sure"]} /><br />
            <FormFields name="email" label="Enter your Email Address" type="email" /> <br />
            <FormFields name="password" label="Enter Password" type="password" /> <br />
            <FormFields name="confirmedPassword" label="Enter Confirmed Password" type="password" /> <br />

            <Button type="submit" variant="contained" color="primary">Next</Button>
  
        </Form>
      </Formik>
      <br />
      <br />
      </div>

  );
};
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {addressSchema} from '../schemas';
import FormFields from "../fields/FormFields";
import { Button } from '@material-ui/core';


export const Address: React.FC<any> = ({submit, setData, data}) => {

  return (
    <Formik
      initialValues={data}
      validationSchema={addressSchema}
      onSubmit={(values) => {
        submit(2);
        setData({...values, ...data})
      }}
    >
      <Form>

        <FormFields name="area" label="Area" />
        <FormFields name="city" label="City" />
        <FormFields name="country" label="Country" /> <br />
        <Button onClick={()=> {submit((e: number)=> e-1)}} variant="contained" color="primary">Back</Button>{" "}
        <Button type="submit" variant="contained" color="primary">Next</Button>
    
      </Form>
    </Formik>
  );
};
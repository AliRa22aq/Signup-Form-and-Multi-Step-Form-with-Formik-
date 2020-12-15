import React from 'react';
import { Formik, Field, Form, FormikProps, ErrorMessage } from 'formik';
import {namesSchema} from '../schemas'
import FormFields from "../fields/FormFields";
import { Button, FormControl, InputLabel, FormHelperText } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';


export const Names: React.FC<any>  = ({submit, setData, data}) => {

  return (
    <div> 

    <Formik
      initialValues={ data }
      validationSchema={namesSchema}
      onSubmit={(values) => {
        submit(1)
        console.log(values)
        setData({...values, ...data})
      }}
    > 

    {(formik: FormikProps<any>)=> (

            <Form>

            <Field type="checkbox" value = "Mr." name="status" /> 
            <Field type="checkbox" value = "Ms." name="status" /> 
            <Field type="checkbox" value = "ssdf" name="status" /> 

            <div> 
            <label>
             <Field type="checkbox" name="jobType" value="designer" />
             Designer
           </label>
           <label>
             <Field type="checkbox" name="jobType" value="developer" />
             Developer
           </label>
           <label>
             <Field type="checkbox" name="jobType" value="product" />
             Product Manager
           </label>
            </div>



            <FormFields name="firstName" label="First Name" />
            <FormFields name="lastName" label="Last Name" />
            <FormFields name="email" label="Email" />

            <br />

            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-gender-native-simple">Gender</InputLabel>
              <Field
                as={Select}
                name='gender'
                native
                variant="outlined"
                label="gender"
                id='outlined-gender-native-simple'
                autoWidth
              >
                <option aria-label="None" value="" />
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="None">Not Sure</option>
              </Field>
              <FormHelperText><ErrorMessage name='gender'/></FormHelperText>

              </FormControl>

            <br />
            <br />

            <Button type="submit" variant="contained" color="primary">Next</Button>
  
        </Form>
    )}


      </Formik>
      </div>

  );
};
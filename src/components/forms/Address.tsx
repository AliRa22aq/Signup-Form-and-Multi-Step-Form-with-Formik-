import React from 'react';
import { Formik, Field, Form} from 'formik';
import {addressSchema} from '../schemas';
import FormFields from "../fields/FormFields";
import { Button } from '@material-ui/core';
import { CountryDropdown, RegionDropdown  } from 'react-country-region-selector';



export const Address: React.FC<any> = ({submit, setData, data}) => {

  return (
    <Formik 
    initialValues={data}
    validationSchema={addressSchema}
    onSubmit={(values) => {
      submit(2)
      setData({...values, ...data})
    }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          
        <br />
        <label> Country</label> <br />
        <Field
        as= {CountryDropdown} 
        defaultOptionLabel= "Select Country" 
        classes="country"
        name="country" 
        lebel="country"
        value={values.country}
        onChange={(_:any, e:any) => handleChange(e)} 
        onBlur={handleBlur} /><br /> <br />


        <label> State</label><br />
        <Field 
        as = {RegionDropdown} 
        classes="state" 
        label = "state"
        defaultOptionLabel= "Select State" 
        name="state" 
        country={values.country} 
        value={values.state}
        onChange={(_:any, e: any) => handleChange(e)} onBlur={handleBlur} /><br /> <br />
        <FormFields name="city" label="City"/> <br />
        <FormFields name="address" label="Address" /> <br />

        <Button onClick={()=>{submit(0)} } variant="contained" color="primary">Back</Button> {` `}
        <Button type="submit" variant="contained" color="primary">Next</Button>

        </Form>

        
      )}
    </Formik>
  );
};
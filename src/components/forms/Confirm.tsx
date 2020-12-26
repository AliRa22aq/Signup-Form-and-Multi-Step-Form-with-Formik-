import React from 'react';
import { Formik, Field, Form, FormikProps} from 'formik';
import {confirmSchema} from '../schemas';
import { Button, Checkbox } from '@material-ui/core';


export const Confirm: React.FC<any>  = ({ submit, setData, data }) => {

    console.log(data)

    return (

    <Formik 
        initialValues={data}
        validationSchema={confirmSchema}
        onSubmit={(values) => {
                submit(3)
                setData({...values, ...data})
            
        
        }}
        >
        {(formik:FormikProps<any>) => (
        
        <Form>

            <h2>Personal Information</h2> 
            <p> Name : {` ${data.firstName} ${data.lastName}`} </p>
            <p> Gender : {data.gender}</p>
            <p> Email : {data.email}</p>
            <br />
            
            <h2> Address information</h2>
            <p> Address : {`${data.address}, ${data.city}, ${data.country}`}</p>
            <br />
            <br />
            <label>Confirm</label>{`${" "}`}
            <Field as={Checkbox} name="confirm" color="primary"/>
            
            
            <br />
            <br />
            <br />
            

            
        <Button onClick={()=>{submit(1)} } variant="contained" color="primary">Back</Button> {` `}
        {formik.values.confirm? 
        <Button type="submit" variant="contained" color="primary">Confirm</Button>: ""
        }




        </Form>    
        )}
    </Formik>
    );
};
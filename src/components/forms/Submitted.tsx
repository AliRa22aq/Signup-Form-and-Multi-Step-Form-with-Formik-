import React from 'react';
import { Button } from '@material-ui/core';


export const Submitted: React.FC<any>  = ({ submit }) => {


    return (
        <div>
            <h2>Information Submitted</h2>
            <h1>Thanks</h1>  
            
            <Button type="submit" onClick={() => { submit(0) }}>Finish</Button>

        </div>
    );
};
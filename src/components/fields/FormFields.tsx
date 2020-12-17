import React, {FC} from 'react'
import {TextField} from '@material-ui/core'
import {Field, ErrorMessage} from 'formik'

interface FoemFieldProps {
    name: string
    label: string
    type?: string
}

const FormFields: FC <FoemFieldProps>  = ({name, label, type="text"}) => {
    return (
        <div>
            <Field 
                as={TextField} 
                name={name} 
                label={label} 
                helperText={<ErrorMessage name={name} />}
                required
                type={type}
                />
            
        </div>
    )
}

export default FormFields
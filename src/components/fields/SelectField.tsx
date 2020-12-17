import React, { FC } from 'react'
import Select from '@material-ui/core/Select';
import { Field, ErrorMessage } from 'formik'
import { FormControl, InputLabel, FormHelperText } from '@material-ui/core';

interface FoemFieldProps {
    name: string
    label: string
    options: string[]
}

const SelectFields: FC<FoemFieldProps> = ({ name, label, options }) => {

    return (
        <div>
            <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-gender-native-simple">{label}</InputLabel>
                <Field
                    as={Select}
                    name={name}
                    native
                    variant="outlined"
                    label={label}
                    id='outlined-gender-native-simple'
                    autoWidth
                >
                    <option aria-label="None" value="" />
                    {
                        options.map((option, index) => (
                        <option key={index} value={option}> {option} </option>
                    ))}
                </Field>
                <FormHelperText><ErrorMessage name={name} /></FormHelperText>
            </FormControl>
        </div>
    )
}

export default SelectFields
import * as Yup from 'yup';

export const namesSchema = Yup.object().shape({
                    title: Yup.string(),
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .min(3, 'Must be 3 characters or more')
                        .required('First Name Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .min(5, 'Must be 5 characters or more')
                        .required('Last Name Required'),
                    email: Yup.string().email()
                        .required('Email Required'),
                    gender: Yup.string().required("Gender required"),
                    password: Yup.string().required('Password is required'),
                    confirmedPassword: Yup.string()
                       .oneOf([Yup.ref('password'), null], 'Passwords must match')
    })

export const addressSchema = Yup.object({
    address: Yup.string()
        .required('Area Required'),
    city: Yup.string()
        .required('City Required'),
    country: Yup.string()
        .required('Country Required'),
    state: Yup.string()
    .required('Country Required'),
})


export const experienceSchema = Yup.object({
    designation: Yup.string()
        .required('Area Required'),
    company: Yup.string()
        .required('City Required'),
    duration: Yup.string()
        .required('Country Required'),
})

export const confirmSchema = Yup.object({
    confirm: Yup.boolean()
    .required('Country Required'),
    
})



import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
// import { Link } from 'react-router-dom'
import '.././assets/css/Form.css';
import { SIGN_UP } from '../utils/mutations';
import Auth from '../utils/auth';
import { Form, Button, Alert } from 'react-bootstrap';


export default function SignUp(props) {
    const [userFormData, setUserFormData] = useState({ email: '', password: '', firstName: '', lastName: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [addUser, { error }] = useMutation(SIGN_UP);

    useEffect(() => {
        if (error) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
        }
    }, [error]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // this is greyed out because it is used in line 24 cost token
        // we need to create an Auth in utils
        const form = event.currentTarget;
        try {
            const { data } = await addUser({
                variables: { ...userFormData },
            });
            console.log(data);
            Auth.login(data.addUser.token);
        } catch (err) {
            console.error(err);
        }

        setUserFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        });
        // const mutationResponse = await addUser({
        //     variables: {
        //         email: formState.email,
        //         password: formState.password,
        //         firstName: formState.firstName,
        //         lastName: formState.lastName,
        //     },
        // });
        //const token = mutationResponse.data.addUser.token;
        // Auth.login(token);
    };

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormState({
    //         ...formState,
    //         [name]: value,
    //     });
    // };

    return (
        <div className="card">
            <div className="form">

                <h2>Sign Up</h2>
                <form noValidate onSubmit={handleFormSubmit}>
                    <div className="field">
                        <input
                            placeholder="First"
                            name="firstName"
                            type="firstName"
                            id="firstName"
                            onChange={handleInputChange}
                            value={userFormData.firstName}
                        />
                    </div>
                    <div className="field">
                        <input
                            placeholder="Last"
                            name="lastName"
                            type="lastName"
                            id="lastName"
                            onChange={handleInputChange}
                            value={userFormData.lastName}
                        />
                    </div>
                    <div className="field">
                        <input
                            placeholder="youremail@test.com"
                            name="email"
                            type="email"
                            id="email"
                            onChange={handleInputChange}
                            value={userFormData.email}
                        />
                    </div>
                    <div className="field">
                        <input
                            placeholder="******"
                            name="password"
                            type="password"
                            id="pwd"
                            onChange={handleInputChange}
                            value={userFormData.password}
                        />
                    </div>
                    <button type="submit" disabled={
                        !(
                            userFormData.firstName &&
                            userFormData.lastName &&
                            userFormData.email &&
                            userFormData.password
                        )
                    }
                        variant="success"
                    >Submit</button>
                </form>
            </div>
        </div>
    );
}
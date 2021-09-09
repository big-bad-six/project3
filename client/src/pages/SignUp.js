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
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
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
        <div className="form">

            {/* <h2>Sign Up</h2>
            <form noValidate validated={validated} onSubmit={handleFormSubmit}>
                <div className="field">
                    <label htmlFor="firstName">First Name:</label>
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
                    <label htmlFor="lastName">Last Name:</label>
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
                    <label htmlFor="email">Email:</label>
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
                    <label htmlFor="pwd">Password:</label>
                    <input
                        placeholder="******"
                        name="password"
                        type="password"
                        id="pwd"
                        onChange={handleInputChange}
                        value={userFormData.password}
                    />
                </div>
                <div className="button">
                    <button type="submit" disabled={
                        !(
                            userFormData.username &&
                            userFormData.email &&
                            userFormData.password
                        )
                    }
                        variant="success"
                    >Submit</button>
                </div>
            </form> */}

            {/* This is needed for the validation functionality above */}
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                {/* show alert if server response is bad */}
                <Alert
                    dismissible
                    onClose={() => setShowAlert(false)}
                    show={showAlert}
                    variant="danger"
                >
                    Something went wrong with your signup!
                </Alert>

                <Form.Group>
                    <Form.Label htmlFor="firstName">First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Your firstName"
                        name="firstName"
                        onChange={handleInputChange}
                        value={userFormData.firstName}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Username is required!
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="lastName">Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Your lastName"
                        name="lastName"
                        onChange={handleInputChange}
                        value={userFormData.lastName}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Username is required!
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Your email address"
                        name="email"
                        onChange={handleInputChange}
                        value={userFormData.email}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Email is required!
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Your password"
                        name="password"
                        onChange={handleInputChange}
                        value={userFormData.password}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Password is required!
                    </Form.Control.Feedback>
                </Form.Group>
                <Button
                    disabled={
                        !(
                            userFormData.username &&
                            userFormData.email &&
                            userFormData.password
                        )
                    }
                    type="submit"
                    variant="success"
                >
                    Submit
                </Button>
            </Form>
        </div>
    );
}
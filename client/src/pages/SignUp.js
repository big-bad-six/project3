import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { SIGN_UP } from '../utils/mutations';
import '.././assets/css/Form.css';

export default function SignUp(props) {
    const [userFormData, setUserFormData] = useState({ email: '', password: '', firstName: '', lastName: '' });
    const [addUser] = useMutation(SIGN_UP);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addUser({
                variables: { ...userFormData },
            });
            const token = data.addUser.token;
            Auth.login(token);
        } catch (err) {
            console.error(err);
        }

    };

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
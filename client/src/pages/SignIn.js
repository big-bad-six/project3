import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom'
import '.././assets/css/Form.css';
import { SIGN_UP } from '../utils/mutations';
// import Auth from '../utils/auth';


export default function SignIn(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(SIGN_UP);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // this is greyed out because it is used in line 24 cost token
        // we need to create an Auth in utils
        const mutationResponse = await addUser({
          variables: {
            email: formState.email,
            password: formState.password,
            firstName: formState.firstName,
            lastName: formState.lastName,
          },
        });
        //const token = mutationResponse.data.addUser.token;
       // Auth.login(token);
      };
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    
      return (
        <div className="container my-1">
          <Link to="/log-in">← Go to Login</Link>
    
          <h2>Signup</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="flex-row space-between my-2">
              <label htmlFor="firstName">First Name:</label>
              <input
                placeholder="First"
                name="firstName"
                type="firstName"
                id="firstName"
                onChange={handleChange}
              />
            </div>
            <div className="flex-row space-between my-2">
              <label htmlFor="lastName">Last Name:</label>
              <input
                placeholder="Last"
                name="lastName"
                type="lastName"
                id="lastName"
                onChange={handleChange}
              />
            </div>
            <div className="flex-row space-between my-2">
              <label htmlFor="email">Email:</label>
              <input
                placeholder="youremail@test.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="flex-row space-between my-2">
              <label htmlFor="pwd">Password:</label>
              <input
                placeholder="******"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
              />
            </div>
            <div className="flex-row flex-end">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      );
}
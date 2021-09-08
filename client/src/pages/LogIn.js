import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
// import Auth from '../utils/auth';//
import { LOGIN } from '../utils/mutations';
import '.././assets/css/Form.css';

export default function LogIn(props) {

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN)

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {        
            // mutationResponse is greyed out because it is used in line 24 cost token
            // we need to create an Auth in utils
          const mutationResponse = await login({
            variables: { email: formState.email, password: formState.password },
          });
        //const token = mutationResponse.data.login.token;
        //   Auth.login(token);
        } catch (e) {
          console.log(e);
        }
      };

      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
      };

      return (
        <div className="form-container">
          <Link to="/sign-in">← Go to Signup</Link>
    
          <h2>Login</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="flex-row space-between my-2">
              <label htmlFor="email">Email address:</label>
              <input 
                className="form-input"
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
            {error ? (
              <div>
                <p className="error-text">The provided credentials are incorrect</p>
              </div>
            ) : null}
            <div className="flex-row flex-end">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      );      
}
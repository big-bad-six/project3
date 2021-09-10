import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
// import { Link } from 'react-router-dom';
import Auth from '../utils/auth';//
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
      const token = mutationResponse.data.login.token;
      Auth.login(token);
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
    <div className="card">
      <div className="form">

        <h2>Log In</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="field">
            <input
              className="form-input"
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="field">
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
          <div className="button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
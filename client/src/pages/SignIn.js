import React from 'react';
import '.././assets/css/Form.css';

export default function SignIn() {

    function setFormMessage(formElement, type, message) {
        const messageElement = formElement.querySelector(".form_message");

        messageElement.textContent = message;
        messageElement.classList.remove("form_message-success", "form_message-error");
        messageElement.classList.add(`form_message-${type}`);
    }

    function setInputError(inputElement, message) {
        inputElement.classList.add("form_input-error");
        inputElement.parentElement.querySelector(".form_input-error-message").textContent = message;
    }

    function clearInputError(inputElement) {
        inputElement.classList.remove("form_input-error");
        inputElement.parentElement.querySelector(".form_input-error-message").textContent = "";
    }

    document.addEventListener("DOMContentLoaded", () => {
        const loginForm = document.querySelector("#login");
        const createAccountForm = document.querySelector("#createAccount");

        document.querySelector("#linkCreateAccount").addEventListener("click", e => {
            e.preventDefault();
            loginForm.classList.add("form-hidden");
            createAccountForm.classList.remove("form-hidden");
        });

        document.querySelector("#linkLogin").addEventListener("click", e => {
            e.preventDefault();
            loginForm.classList.remove("form-hidden");
            createAccountForm.classList.add("form-hidden");
        });

        loginForm.addEventListener("submit", e => {
            e.preventDefault();

            setFormMessage(loginForm, "error", "Invalid username/password combination");
        });

        document.querySelectorAll(".form_input").forEach(inputElement => {
            inputElement.addEventListener("blur", e => {
                if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 6) {
                    setInputError(inputElement, "Username must be at least 6 characters in length");
                }
            });

            inputElement.addEventListener("input", e => {
                clearInputError(inputElement);
            });
        });
    });

    return (
        <div className="form-container">
            <form className="form" id="login">
                <h1 className="form_title">Log In</h1>
                <div className="form_message form_message-error"></div>
                <div className="form_input-group">
                    <input type="text" className="form_input" autoFocus placeholder="Username or email" />
                    <div className="form_input-error-message"></div>
                </div>
                <div className="form_input-group">
                    <input type="password" className="form_input" autoFocus placeholder="Password" />
                    <div className="form_input-error-message"></div>
                </div>
                <button className="form_button" type="submit">Continue</button>
                <p className="form_text">
                    <a className="form_link" href="./" id="linkCreateAccount">Don't have an account? Sign Up</a>
                </p>
            </form>
            <form className="form form-hidden" id="createAccount">
                <h1 className="form_title">Sign Up</h1>
                <div className="form_message form_message-error"></div>
                <div className="form_input-group">
                    <input type="text" id="signupUsername" className="form_input" autoFocus placeholder="Username" />
                    <div className="form_input-error-message"></div>
                </div>
                <div className="form_input-group">
                    <input type="text" className="form_input" autoFocus placeholder="Email Address" />
                    <div className="form_input-error-message"></div>
                </div>
                <div className="form_input-group">
                    <input type="password" className="form_input" autoFocus placeholder="Password" />
                    <div className="form_input-error-message"></div>
                </div>
                <div className="form_input-group">
                    <input type="password" className="form_input" autoFocus placeholder="Confirm password" />
                    <div className="form_input-error-message"></div>
                </div>
                <button className="form_button" type="submit">Continue</button>
                <p className="form_text">
                    <a className="form_link" href="./" id="linkLogin">Already have an account? Log In</a>
                </p>
            </form>
        </div>
    );
}
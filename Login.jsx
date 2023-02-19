import React, {useState} from "react";

export const Login = (props) => {
    const[ username, setUsername] = useState('');
    const[ password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);

    }
    return (
        <div className="auth-form-container">
            <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input value ={username} type="username" placeholder="Alice Smith" id="username" name="username" />
            <label htmlFor="password">Password</label>
            <input value={password} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() =>props.onFormSwitch('register')}> Don't have an account? Register here!</button>
        </div>

    )
}
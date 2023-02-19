import React, { useState} from "react";

export const Register = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);

    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
            <input value={name} name="name" id="name" placeholder="Full Name"/>
            <label htmlFor="username">Username</label>
            <input value ={username} type="username" placeholder="Alice Smith" id="username" name="username" />
            <label htmlFor="password">Password</label>
            <input value={password} type="password" placeholder="********" id="password" name="password" />
            <button>Log In</button>
        </form>
        <button className="link-btn"  onClick={() => props.onFormSwitch('login')}> Already have an account? Login here!</button>
        </div>
    )
    
}
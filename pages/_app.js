import React, {useState} from "react";
import {Login} from "../components/Login";
import { Register } from "../components/Register";
import '@/styles/globals.css';
import "../styles/dashboard.css";
import "../styles/header.css";
import "../styles/recipeList.css";
import './App.css';

export default function App({ Component, pageProps }) {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);

  }
  return (
    <><div className="App">
      {currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}

      <login />
    </div><Component {...pageProps} /></>
  );
}

import './App.css';
import React, { useState,useEffect } from 'react';
import axios from "axios";

function App() {

  const [login, setLogin]=useState("");
  const [password, setPassword]=useState("");
  const [done, setDone]=useState("");

 /*  ===============Funcao para registrar=============== */
  const register = () => {
    console.log("register do App.js");
    axios({
      method: "POST",
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Content-Type': 'application/json',
    },
      data:{
        login: login,
        password: password,
        done: done
      },
      
      withCredentials:true,
      url: "http://localhost:3005/login"
    }).then((res)=> console.log(res));
  }
   /*  ===============Funcao para logar=============== */
  

  return (
    <div className="App">

      <div>
        <h1>Login</h1>
        <input placeholder="username" onChange={e => setLogin(e.target.value)}/>
        <input placeholder="password"onChange={e => setPassword(e.target.value)}/>
        <button onClick={register}>Submit</button>
      </div>
      
    </div>
  );
}

export default App;

import './App.css';
import React, { useState,useEffect } from 'react';
import axios from "axios";
function App() {

  const [registerUsername, setRegisterUsername]=useState("");
  const [registerPassword, setRegisterPassword]=useState("");
  const [loginUsername, setLoginUsername]=useState("");
  const [loginPassword, setLoginPassword]=useState("");

 /*  ===============Funcao para registrar=============== */
  const register = () => {
    axios({
      method: "POST",
      data:{
        username: registerUsername,
        password: registerPassword
      },
      withCredentials:true,
      url: "http://localhost:4000/register"
    }).then((res)=> console.log(res));
  }
   /*  ===============Funcao para logar=============== */
  const login = () => {
    axios({
      method: "POST",
      data:{
        username: loginUsername,
        password: loginPassword
      },
      withCredentials:true,
      url: "http://localhost:4000/login"
    }).then((res)=> console.log(res));
  }

   /*  ===============Funcao para buscar=============== */
  const getUser = () => {
    axios({
      method: "GET",
      withCredentials:true,
      url: "http://localhost:4000/getUser"
    }).then((res)=> console.log(res));
  }

  return (
    <div className="App">

      <div>
        <h1>Registro</h1>
        <input placeholder="username" onChange={e => setRegisterUsername(e.target.value)}/>
        <input placeholder="password"onChange={e => setRegisterPassword(e.target.value)}/>
        <button onClick={register}>Submit</button>
      </div>

      <div>
        <h1>Login</h1>
        <input placeholder="username" onChange={e => setLoginUsername(e.target.value)}/>
        <input placeholder="password"onChange={e => setLoginPassword(e.target.value)}/>
        <button onClick={login}>Submit</button>
      </div>

      <div>
        <h1>Usuários</h1>
        <button onClick={getUser}>Submit</button>
      </div>
      
    </div>
  );
}

export default App;

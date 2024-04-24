import React, { useState } from 'react';
import '../../index.css';
import { initDataBase } from '../../config/firebaseConfig';
import {collection, getDocs, deleteDoc} from "firebase/firestore";


const Login = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[users,setUsers] = useState([]);



  async function consultarUsuarios(){

    let collectionUsuarios = collection(initDataBase, 'usuarios');
    let resultado = await getDocs(collectionUsuarios);
    let infoUsuarios = resultado.docs
    console.log(infoUsuarios.map((doc)=>({...doc.data()})));
    console.log(collectionUsuarios);
    console.log(infoUsuarios);

  }

  consultarUsuarios();

  
  
  function buscarUsuario(){

  
  }
  
  
  function iniciarSesion(){

console.log(email, password, users)


  }
  

  
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Email:', email);
    console.log('Username:', user);
    console.log('Password:', password);
  };

return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label>Usuario:</label>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button onClick={iniciarSesion}  type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

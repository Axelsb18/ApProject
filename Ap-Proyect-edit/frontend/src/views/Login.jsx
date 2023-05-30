import React, { useState } from 'react';
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestData = {
      email: email,
      password: password,
    };

    fetch('http://localhost:8080/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
    .then((response) => {
      if (response.ok) {
        NotificationManager.success("Success", "Inicio sesion exitosamente");
        return response.json();
      } else {
        NotificationManager.error("Error", "Credenciales inválidas")
        throw new Error('Credenciales inválidas');
      }
    })
      .then((data) => {
        // Verificar la respuesta del backend y realizar acciones en consecuencia
        console.log('Respuesta del servidor:', data);
        // Ejemplo: redireccionar a la página de inicio después del inicio de sesión exitoso
        window.location.href = '/home';
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
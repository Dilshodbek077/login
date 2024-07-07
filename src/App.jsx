import React, { useState } from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import './App.css'; 

const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegisterSuccess = () => {
    setIsRegistered(true);
  };

  return (
    <div className="app">
      {!isRegistered ? (
        <RegisterForm handleRegisterSuccess={handleRegisterSuccess} />
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default App;

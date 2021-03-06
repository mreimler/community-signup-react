import React from 'react';
import './App.css';
import RegistrationForm from './components/Forms/RegistrationForm';
import { useForm } from 'react-hook-form';

function App() {
  
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '960px',
        padding: '10px',
      }}
    >
    <RegistrationForm />
    </div>
  );
}

export default App;

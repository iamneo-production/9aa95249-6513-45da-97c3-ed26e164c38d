import React, { useState } from 'react';
import './Signup.css';
import {Link} from "react-router-dom"
const SignupPage = () => {
     const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('USER');
  
    const handleNameChange = (event) => {
        setName(event.target.value);
      };
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      console.log(name, email, password, role);
      let pass = password;
      const registrationData = {
        name,
        email,
        password,
        role
      };
      try {
        const response = await fetch('http://localhost:8181/api/v1/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(registrationData),
        });
        if (response.status === 200) {
        
          setName('');
          setEmail('');
          setPassword('');
        }
      } catch (error) {
        console.log('Error:', error);
      }
    }

  return (
    <div className='Total'>
    <div className="signup-page">
      
      <div className="signup-section">
        
        <h3 className='word'>Join us to feel the music you Love</h3>
       
      </div>
    <div className="signup1-page">
      <div className="signup-container">
      <h2>Hey New Listener 👋</h2>
         <form onSubmit={handleSubmit}>
           <input
            type="text"
            className='signupinput'
            placeholder="Your Name Please!😀"
            value={name}
            onChange={handleNameChange}
            required
          />
         <input
            type="email"
            className='signupinput'
            placeholder="Email📮"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            className='signupinput'
            placeholder="Password 🫣"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <br/>
          <button type="submit" className='signupbutton'>Sign Up</button>
          
        </form>
      </div>
    </div>
    </div>
    
    </div>
  );
};

export default SignupPage;
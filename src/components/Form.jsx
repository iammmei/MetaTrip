import React, { useState } from 'react';
import './Form.css'
import { Button } from './Button';
export default function Form() {



    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
    
      console.log('Form submitted:', formData);
    };
  
    return (
      <>
        <div className="container">
        <h1> Sign Up </h1>
          
          
        <form className='form' onSubmit={handleSubmit}>
          
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </label>
  
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </label>
  
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
  
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </label>
  
          <Button 
      
         buttonStyle='btn--outline'
        buttonSize='btn--large'
       
>
            Sign Up
        </Button>
        </form>
        </div>
      </>
    );
  }
  
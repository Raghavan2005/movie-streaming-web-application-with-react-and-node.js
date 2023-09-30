import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    number: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, for example, send a request to your API
    console.log('Login form submitted:', formData);
    if(formData.number==1&&formData.password=='admin'){
        console.log('Logined as Admin');
    }
  };

  return (

    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Number:</label>
          <input type="number" name="number" value={formData.number} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { FaGoogle, FaGithub } from "react-icons/fa6";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';


const Register = () => {
const [formData, setFormData] = useState({
  name: '',
  email: '',
  password: ''
});
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
    const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
    const user = userCredential.user;

      await setDoc(doc(db, 'users', userCredential.user.uid), {
        name: formData.name,
        email: formData.email,
        createdAt: new Date()
      });

      setMessage('Account created! You can now log in.');
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="container">
        <div className="signUp-inner">
          <div className="login-left padding-form w-50">
            <form className="login-form" onSubmit={handleSubmit} >
              <h2>Hi, Create Account</h2>

              {message && <p className="success-message">{message}</p>}
              {error && <p className="error-message">{error}</p>}

              <div className="input-group-2">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Enter your full name...'
                />
              </div>

              <div className="input-group-2">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Enter your email...'
                />
              </div>

              <div className="input-group-2">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='Enter your password...'
                />
              </div>

              <button type='submit' className='btn-register' >Sign Up</button>

              <div className="seprator">
                <h5>or</h5>
              </div>
              <div className="other-links">
                <ul>
                  <li><Link to='#'><FaGoogle /></Link></li>
                  <li><Link to='#'><FaGithub /></Link></li>
                </ul>
              </div>

              <p className="signup-link">
                Already have an account?
                <NavLink to="/login">Login</NavLink>


              </p>
            </form>
          </div>

          <div className="login-right w-50">
            <img src="https://images.unsplash.com/photo-1576059620175-9b608f96797b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2xhY2llcnxlbnwwfHwwfHx8MA%3D%3D" />
          </div>

        </div>{/**signUp-inner**/}
      </div>
    </div>
  );
}

export default Register
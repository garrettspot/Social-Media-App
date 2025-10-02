import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/auth.css';
import { signUp } from '../apiCalls/authCalls.js';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, email, username, password } = formData;
    if (!name || !username || !email || !password) {
      alert("Please fill all fields!");
      return;
    }
    try {
      const response = await signUp({name, email, username, password});
      console.log("Sign up successful ", response);
      alert("Sign up successful! Please sign in.");
      // Clear the form
      setFormData({name: '',
        email: '',
        username: '',
        password: ''
      });
      navigate("/home");
    } catch (error) {
      console.error("Error failed during sign up ", error);
      alert("Sign up failed, please try again");
    }
    setLoading(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <img
            className="auth-logo"
            src="https://via.placeholder.com/150"
            alt="Logo"
          />
          <h2 className="auth-title">
            Create your account
          </h2>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              required
              className="auth-input"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              required
              className="auth-input"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              required
              className="auth-input"
              placeholder="Username"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              required
              className="auth-input"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="auth-button"
          >
            {loading ? 'Creating account...' : 'Sign up'}
          </button>
        </form>

        <div className="auth-link">
          Already have an account?{' '}
          <Link to="/signin">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

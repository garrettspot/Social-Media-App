import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/auth.css';
import { signIn } from '../apiCalls/authCalls.js';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice.js'

export default function SignIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { username, password } = formData;
    if (!username || !password) {
      alert("Please fill in all fields");
      setLoading(false); // ensure loading resets on validation failure
      return;
    }

    try {
      const response = await signIn(formData);
      console.log("Sign in successful", response);
      dispatch(setUserData(response));
      setFormData({ username: '', password: '' });
      navigate("/home");
    } catch (error) {
      console.error("Error during sign in ", error);
      alert("Sign in failed. Please try again.");
    } finally {
      setLoading(false); // always reset loading
    }
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
            Sign in to your account
          </h2>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
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
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
        
        <div className="auth-link">
          Don't have an account?{' '}
          <Link to="/signup">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

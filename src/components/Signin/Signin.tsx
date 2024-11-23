import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HaveAnAccountLogin } from '../HaveAnAccountLogin/HaveAnAccountLogin';
import SocialMediaLogo_Property1Apple from '../SocialMediaLogo_Property1Apple/SocialMediaLogo_Property1Apple';
import SocialMediaLogo_Property1Googl from '../SocialMediaLogo_Property1Googl/SocialMediaLogo_Property1Googl';
import SocialMediaLogo_Property1Twitt from '../SocialMediaLogo_Property1Twitt/SocialMediaLogo_Property1Twitt';
import styles from './Signin.module.css';

const Signin: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Hardcoded credentials check
    if (formData.email === 'Hari123@gmail.com' && formData.password === 'Hari@123456') {
      // Successful login
      navigate('/discover'); // Redirect to discover page
    } else {
      // Show error message
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleSocialSignin = (provider: string) => {
    console.log(`Signing in with ${provider}`);
    // Add social media signin logic here
  };

  const navigateToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className={styles['signin-container']}>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles['remember-me']}>
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleInputChange}
          />
          <label>Remember me</label>
        </div>
        <button type="submit" className={styles['signin-button']}>
          Sign In
        </button>
      </form>

      <div className={styles['social-signin']}>
        <p>Or continue with</p>
        <div className={styles['social-buttons']}>
          <SocialMediaLogo_Property1Googl onClick={() => handleSocialSignin('Google')} />
          <SocialMediaLogo_Property1Apple onClick={() => handleSocialSignin('Apple')} />
          <SocialMediaLogo_Property1Twitt onClick={() => handleSocialSignin('Twitter')} />
        </div>
      </div>

      <HaveAnAccountLogin onClick={navigateToSignup} />
    </div>
  );
};

export default Signin; 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SocialMediaLogo_Property1Apple from '../SocialMediaLogo_Property1Apple/SocialMediaLogo_Property1Apple';
import SocialMediaLogo_Property1Googl from '../SocialMediaLogo_Property1Googl/SocialMediaLogo_Property1Googl';
import SocialMediaLogo_Property1Twitt from '../SocialMediaLogo_Property1Twitt/SocialMediaLogo_Property1Twitt';
import styles from './Signup.module.css';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
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
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Add your signup logic here
    console.log('Signup form submitted:', formData);
  };

  const handleSocialSignup = (provider: string) => {
    console.log(`Signing up with ${provider}`);
    // Add social media signup logic here
  };

  const navigateToSignin = () => {
    navigate('/signin');
  };

  return (
    <div className={styles['signup-container']}>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
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
        <div className={styles['form-group']}>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles['terms']}>
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleInputChange}
            required
          />
          <label>I agree to the Terms and Privacy Policy</label>
        </div>
        <button type="submit" className={styles['signup-button']}>
          Sign Up
        </button>
      </form>

      <div className={styles['social-signup']}>
        <p>Or continue with</p>
        <div className={styles['social-buttons']}>
          <SocialMediaLogo_Property1Googl onClick={() => handleSocialSignup('Google')} />
          <SocialMediaLogo_Property1Apple onClick={() => handleSocialSignup('Apple')} />
          <SocialMediaLogo_Property1Twitt onClick={() => handleSocialSignup('Twitter')} />
        </div>
      </div>

      <div className={styles['have-account']}>
        <p>Already have an account? <button onClick={navigateToSignin}>Sign In</button></p>
      </div>
    </div>
  );
};

export default Signup; 
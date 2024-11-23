import React from 'react';
import styles from './HaveAnAccountLogin.module.css';

interface Props {
  onClick: () => void;
}

export const HaveAnAccountLogin: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={styles['have-account']}>
      <p>Don't have an account? <button onClick={onClick}>Sign Up</button></p>
    </div>
  );
};

export default HaveAnAccountLogin; 
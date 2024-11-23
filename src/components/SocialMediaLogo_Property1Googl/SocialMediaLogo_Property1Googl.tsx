import React from 'react';
import styles from './SocialMediaLogo_Property1Googl.module.css';

interface Props {
  onClick?: () => void;
}

const SocialMediaLogo_Property1Googl: React.FC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles['social-button']}>
      <img src="/google-icon.svg" alt="Google" />
    </button>
  );
};

export default SocialMediaLogo_Property1Googl; 
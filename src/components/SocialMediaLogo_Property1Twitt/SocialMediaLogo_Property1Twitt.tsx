import React from 'react';
import styles from './SocialMediaLogo_Property1Twitt.module.css';

interface Props {
  onClick?: () => void;
}

const SocialMediaLogo_Property1Twitt: React.FC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles['social-button']}>
      <img src="/twitter-icon.svg" alt="Twitter" />
    </button>
  );
};

export default SocialMediaLogo_Property1Twitt; 
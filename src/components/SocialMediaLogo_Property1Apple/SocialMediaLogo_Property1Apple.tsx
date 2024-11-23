import React from 'react';
import styles from './SocialMediaLogo_Property1Apple.module.css';

interface Props {
  onClick?: () => void;
}

const SocialMediaLogo_Property1Apple: React.FC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles['social-button']}>
      <img src="/apple-icon.svg" alt="Apple" />
    </button>
  );
};

export default SocialMediaLogo_Property1Apple; 
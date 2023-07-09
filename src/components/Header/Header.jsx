import React from 'react';
import styles from './Header.module.scss';
import backgroundImage from './hero.png';
const Header = () => {
  return (
    <div className={styles.main}>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          width: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '1000px',
        }}></div>
    </div>
  );
};
export default Header;

import React from 'react';
import styles from './Footer.module.sass';
import cyberpunk from './cyber.png';
import cd from './cd.png';
const Footer = () => {
  return (
    <div className={styles.main}>
      <img className={styles.first__image} src={cyberpunk} />
      <img className={styles.second__image} src={cd} />
      <div className={styles.div__for__footer}>
        <h1 className={styles.last__h}>Лицензия</h1>
        <h1 className={styles.last__h}>Политика конфиденциальности</h1>
      </div>
    </div>
  );
};
export default Footer;

import React from 'react';
import styles from './Last.module.scss';
import platforms from './platform.png';
import disks from './disks.jpg';
const Last = () => {
  return (
    <div className={styles.main}>
      <div className={styles.first__div}>
        <h1 className="text-white text-6xl w-8/12">Купить игру Cyberpunk 2077</h1>
        <p className="text-blue-400 my-10 text-2xl">В комплект входит: </p>
        <ul>
          <li className={styles.li__element}>😏 Футляр с игровыми дисками</li>
          <li className={styles.li__element}>😏 Футляр для загрузки с кодом</li>
          <li className={styles.li__element}>😏 Справочник с информацией об игровом мире</li>
        </ul>
        <img className={styles.platforms__image} src={platforms} />
      </div>
      <div className={styles.second__div}>
        <img className={styles.disks__image} src={disks} />
      </div>
    </div>
  );
};
export default Last;

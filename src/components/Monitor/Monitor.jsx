import React from 'react';
import styles from './Monitor.module.scss';
import up from './up.png';
import monitor from './monitor.png';
import team from './team.png';
const Monitor = () => {
  return (
    <div className={styles.main}>
      <img src={up} className="h-16" />
      <div className="block">
        <div className="block  m-16 mx-40">
          <img className={styles.first__image} src={monitor} />
          <img className={styles.second__image} src={team} />
        </div>

        <h1 className="text-7xl font-bold text-cenetr">Полное погружение вместе с HP</h1>
        <p className={styles.p__object}>
          Погрузитесь в современные экш-игры с реалестичными изображенгиями с мощным монитором с
          диагональю в 23 дюйма созданным для отображения максимальной четкости
        </p>
        <ul className="font-bold">
          <li className={styles.li__element}>Яркие, насыщенные цвета 😎</li>
          <li className={styles.li__element}>Кристалически чёткое изображение 🤑</li>
          <li className={styles.li__element}>Плавные движения на экране 🎮</li>
        </ul>
        <button className={styles.button__more}>Подробнее </button>
      </div>
    </div>
  );
};
export default Monitor;

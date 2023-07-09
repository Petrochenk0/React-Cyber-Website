import React from 'react';
import styles from './Information.module.scss';
import firstInformationImage from './firstMin.png';
import secondInformationImage from './secondMin.png';
import thirdInformationImage from './big.png';
const Information = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>Найт-Сити изменит тебя навсегда!</h1>
      <div className="flex">
        <p className="text-left w-3/6 flex ml-auto mr-auto">
          Cyberpunk 2077 — приключенческая ролевая игра, действие которой происходит в мегаполисе
          Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Ты играешь за V,
          наёмника в поисках устройства, позволяющего обрести бессмертие. Ты сможешь менять
          киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир, где твои
          поступки влияют на ход сюжета и всё, что тебя окружает.
        </p>
      </div>
      <div className={styles.container}>
        <div className="flex my-10">
          <div
            className="my-5"
            style={{
              backgroundImage: `url(${firstInformationImage})`,
              width: '100%',

              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '196px',
            }}></div>
          <div
            className="my-5"
            style={{
              backgroundImage: `url(${secondInformationImage})`,
              width: '100%',

              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '196px',
            }}></div>
        </div>
      </div>
    </div>
  );
};
export default Information;

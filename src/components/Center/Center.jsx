import React from 'react';
import styles from './Center.module.scss';
import game__play from './play.png';
import up from './up.png';
const Center = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  return (
    <div className={styles.main}>
      <img src={up} className={styles.imgUp} />
      <h1 className="text-4xl text-white font-bold text-center my-10">Играй и выигрывай!</h1>
      <p className="text-white text-center flex ml-auto mr-auto w-3/6">
        Играй в Cyberpunk 2077 и получи возможность выиграть консоль Xbox Series X или Sony
        PlayStation 5! Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут
        подведены 1 февраля. Удачи! 😏
      </p>
      <div className="block">
        <input
          className="w-full bg-black border-b border-white p-10 text-white text-3xl focus:border-none focus:outline-none font-bold"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Как тебя зовут?"
        />
        <input
          className="w-full text-3xl bg-black border-b border-white p-10 text-white focus:border-none focus:outline-none font-bold"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Твой e-mail"
        />
      </div>
      <button className="bg-yellow-400 text-black text-2xl p-7 font-bold my-10 flex ml-auto mr-auto">
        Отправить
      </button>

      <img className="flex mr-auto ml-auto my-10" src={game__play} />
    </div>
  );
};
export default Center;

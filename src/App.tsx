import style from './App.module.scss';
import { Main } from './components/main/main.tsx';

export const App = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Main />
      </div>
    </div>
  );
};

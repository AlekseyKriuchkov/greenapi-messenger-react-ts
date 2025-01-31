import style from './App.module.scss';
import { MainView } from './components/main-view/main-view.tsx';

export const App = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <MainView />
      </div>
    </div>
  );
};

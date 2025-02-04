import style from './styles.module.scss';

export const NavBar = () => {
  return (
    <div className={style.wrapper}>
      <div>Profile</div>
      <div>Settings</div>
    </div>
  );
};

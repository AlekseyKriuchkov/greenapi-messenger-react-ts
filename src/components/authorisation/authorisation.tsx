import style from './styles.module.scss';
import { FC } from 'react';
import {
  LocalStorageKeys,
  localStorageSet,
} from '../../utils/local-storage.ts';
import { AuthData } from '../main/main.tsx';
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {
  changeAuthData: (AuthData: AuthData) => void;
};

const Authorisation: FC<Props> = ({ changeAuthData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuthData>();

  const handleFormSubmit: SubmitHandler<AuthData> = (data) => {
    localStorageSet(LocalStorageKeys.CHAT_TOKENS, JSON.stringify(data));
    changeAuthData(data);
    reset();
  };

  return (
    <div className={style.wrapper}>
      <form className={style.form} onSubmit={handleSubmit(handleFormSubmit)}>
        <div className={style.inputWrapper}>
          <input
            type="text"
            placeholder="idInstance"
            {...register('idInstance', {
              required: 'Field is required',
            })}
          />
          {errors.idInstance && (
            <span className={style.error}>{errors.idInstance.message}</span>
          )}
        </div>
        <div className={style.inputWrapper}>
          <input
            type="text"
            placeholder="apiTokenInstance"
            {...register('apiTokenInstance', {
              required: 'Field is required',
            })}
          />
          {errors.apiTokenInstance && (
            <span className={style.error}>
              {errors.apiTokenInstance.message}
            </span>
          )}
        </div>
        <button type="submit" className={style.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Authorisation;

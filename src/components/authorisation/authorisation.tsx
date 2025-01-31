import style from './styles.module.scss';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import {
  LocalStorageKeys,
  localStorageSet,
} from '../../utils/local-storage.ts';
import { AuthData } from '../main-view/main-view.tsx';

type Props = {
  changeAuthData: (AuthData: AuthData) => void;
};

export const Authorisation: FC<Props> = ({ changeAuthData }) => {
  const [formData, setFormData] = useState<AuthData>({
    idInstance: '',
    apiTokenInstance: '',
  });

  const isValidForm = (): boolean =>
    formData.idInstance.trim() === '' ||
    formData.apiTokenInstance.trim() === '';

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isValidForm()) {
      alert('Fill in all fields');
      return;
    }
    localStorageSet(LocalStorageKeys.AUTH_DATA, JSON.stringify(formData));
    changeAuthData(formData);
    setFormData({ idInstance: '', apiTokenInstance: '' });
  };

  return (
    <div className={style.wrapper}>
      <form className={style.form} onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="idInstance"
          value={formData.idInstance}
          onChange={handleInputChange}
          placeholder="idInstance"
        />
        <input
          type="text"
          name="apiTokenInstance"
          value={formData.apiTokenInstance}
          onChange={handleInputChange}
          placeholder="apiTokenInstance"
        />
        <button type="submit" className={style.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

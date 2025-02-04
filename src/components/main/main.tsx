import { Authorisation } from '../authorisation/authorisation.tsx';
import { useEffect, useState } from 'react';
import {
  localStorageGet,
  LocalStorageKeys,
} from '../../utils/local-storage.ts';
import { Chat } from '../chat/chat.tsx';

export type AuthData = {
  idInstance: string;
  apiTokenInstance: string;
};

export const Main = () => {
  const [isAuthorised, setIsAuthorised] = useState(false);
  const [authData, setAuthData] = useState<AuthData | null>(null);

  useEffect(() => {
    const authData = localStorageGet(LocalStorageKeys.CHAT_TOKENS);
    if (authData) {
      setAuthData(JSON.parse(authData));
    }
  }, []);

  useEffect(() => {
    const isAuth = Boolean(localStorageGet(LocalStorageKeys.CHAT_TOKENS));
    setIsAuthorised(isAuth);
  }, [authData]);

  return isAuthorised ? (
    <Chat userTokens={authData} />
  ) : (
    <Authorisation changeAuthData={setAuthData} />
  );
};

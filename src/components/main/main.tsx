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
  const [authData, setAuthData] = useState<AuthData | null>(null);

  useEffect(() => {
    const authData = localStorageGet(LocalStorageKeys.CHAT_TOKENS);
    if (authData) {
      setAuthData(JSON.parse(authData));
    }
  }, []);

  return authData ? (
    <Chat userTokens={authData} />
  ) : (
    <Authorisation changeAuthData={setAuthData} />
  );
};

import { Authorisation } from '../authorisation/authorisation.tsx';
import { useEffect, useState } from 'react';
import {
  localStorageGet,
  LocalStorageKeys,
} from '../../utils/local-storage.ts';
import { ChatView } from '../chat-view/chat-view.tsx';

export type AuthData = {
  idInstance: string;
  apiTokenInstance: string;
};

export const MainView = () => {
  const [isAuthorised, setIsAuthorised] = useState(false);
  const [authData, setAuthData] = useState<AuthData | null>(null);

  useEffect(() => {
    const isAuth = localStorageGet(LocalStorageKeys.AUTH_DATA);
    if (isAuth) setIsAuthorised(false);
    if (!isAuth) {
      setIsAuthorised(true);
    }
  }, [authData]);

  return (
    <div>
      {isAuthorised ? (
        <Authorisation changeAuthData={setAuthData} />
      ) : (
        <ChatView />
      )}
    </div>
  );
};

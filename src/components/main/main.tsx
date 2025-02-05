import { Suspense, lazy, useEffect, useState } from 'react';
import {
  localStorageGet,
  LocalStorageKeys,
} from '../../utils/local-storage.ts';

export type AuthData = {
  idInstance: string;
  apiTokenInstance: string;
};

const ChatLayout = lazy(() => import('../chat-layout/chat-layout.tsx'));
const Authorisation = lazy(() => import('../authorisation/authorisation.tsx'));

export const Main = () => {
  const [authData, setAuthData] = useState<AuthData | null>(null);

  useEffect(() => {
    const authData = localStorageGet(LocalStorageKeys.CHAT_TOKENS);
    if (authData) {
      setAuthData(JSON.parse(authData));
    }
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {authData ? (
        <ChatLayout userTokens={authData} />
      ) : (
        <Authorisation changeAuthData={setAuthData} />
      )}
    </Suspense>
  );
};

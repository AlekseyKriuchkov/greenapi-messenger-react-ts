import { AuthData } from '../components/main/main.tsx';

export const getMessageUrl = (
  userTokens: AuthData,
  endpoint: string,
  receiptId?: number
) => {
  return receiptId
    ? `${userTokens.idInstance}/${endpoint}/${userTokens.apiTokenInstance}/${receiptId}`
    : `${userTokens.idInstance}/${endpoint}/${userTokens.apiTokenInstance}`;
};

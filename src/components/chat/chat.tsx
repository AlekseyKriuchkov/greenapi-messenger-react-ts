import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
} from 'react';
import style from './styles.module.scss';
import { baseFetcher } from '../../api/base-fetcher.ts';
import { AuthData } from '../main/main.tsx';
import { getChatId } from '../../utils/getChatId.ts';
import { getMessageUrl } from '../../utils/getMessageUrl.ts';

type Props = {
  contactNumber: number | null;
  userTokens: AuthData;
};

type Message = {
  message: string;
  sender: string;
  id: string;
};

export const Chat: FC<Props> = ({ contactNumber, userTokens }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = useCallback(async () => {
    if (!inputValue.trim() || !contactNumber || !userTokens) return;
    try {
      const payload = {
        chatId: getChatId(contactNumber),
        message: inputValue,
      };
      const url = getMessageUrl(userTokens, 'sendMessage');
      const response = await baseFetcher(url, 'POST', payload);
      const newMessage = {
        message: inputValue,
        sender: 'me',
        id: response.idMessage,
      };
      setMessages((prev) => [...prev, newMessage]);
      setInputValue('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }, [inputValue, contactNumber, userTokens]);

  const getMessage = useCallback(async () => {
    if (!userTokens) return;
    try {
      const url = getMessageUrl(userTokens, 'receiveNotification');
      const response = await baseFetcher(url, 'GET');
      if (response?.receiptId) {
        const textMessage =
          response.body.messageData?.textMessageData?.textMessage;
        if (textMessage) {
          const newMessage = {
            message: textMessage,
            sender: response.body.senderData.senderName || 'Unknown',
            id: response.idMessage,
          };
          setMessages((prev) => [...prev, newMessage]);
        }
        await deleteMessage(response.receiptId);
      }
      await getMessage();
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  }, []);

  const deleteMessage = useCallback(
    async (receiptId: number) => {
      if (!userTokens) return;
      try {
        const url = getMessageUrl(userTokens, 'deleteNotification', receiptId);
        await baseFetcher(url, 'DELETE');
      } catch (error) {
        console.error('Error deleting message:', error);
      }
    },
    [userTokens]
  );

  useEffect(() => {
    getMessage();
  }, []);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    },
    []
  );

  const handleSendMessage = useCallback(
    async (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && inputValue.trim()) {
        await sendMessage();
      }
    },
    [inputValue, sendMessage]
  );

  return (
    <div className={style.wrapper}>
      <div className={style.header}>{contactNumber && `+${contactNumber}`}</div>
      <div className={style.chat}>
        {messages.map((message) => (
          <span key={message.id} className={style.message}>
            <strong>{message.sender}:</strong> {message.message}
          </span>
        ))}
      </div>
      <div className={style.inputWrapper}>
        {contactNumber && (
          <input
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleSendMessage}
            placeholder="Enter your message"
            className={style.input}
          />
        )}
      </div>
    </div>
  );
};

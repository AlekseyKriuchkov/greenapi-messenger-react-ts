import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import style from './styles.module.scss';
import { baseFetcher } from '../../api/base-fetcher.ts';
import { AuthData } from '../main/main.tsx';

type Props = {
  contactNumber: number | null;
  userTokens: AuthData | null;
};

type Message = {
  message: string;
  sender: string;
};

export const Conversation: FC<Props> = ({ contactNumber, userTokens }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async () => {
    if (!inputValue.trim() || !contactNumber || !userTokens) return;
    const payload = {
      chatId: `${contactNumber}@c.us`,
      message: inputValue,
    };
    const url = `${userTokens?.idInstance}/sendMessage/${userTokens?.apiTokenInstance}`;
    await baseFetcher(url, 'POST', payload);
    setMessages((prev) => [...prev, { message: inputValue, sender: 'me' }]);
    setInputValue('');
  };

  const getMessage = async () => {
    if (!userTokens) return;
    const url = `${userTokens.idInstance}/receiveNotification/${userTokens.apiTokenInstance}`;
    const response = await baseFetcher(url, 'GET');
    if (response?.receiptId) {
      const textMessage =
        response.body.messageData?.textMessageData?.textMessage;
      if (textMessage) {
        const newMessage = {
          message: textMessage,
          sender: response.body.senderData.senderName || 'Unknown',
        };
        setMessages((prev) => [...prev, newMessage]);
      }
      await deleteMessage(response.receiptId);
    }
    await getMessage();
  };

  const deleteMessage = async (receiptId: number) => {
    if (!userTokens) return;
    const url = `${userTokens.idInstance}/deleteNotification/${userTokens.apiTokenInstance}/${receiptId}`;
    await baseFetcher(url, 'DELETE');
  };

  useEffect(() => {
    getMessage();
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      sendMessage();
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.header}>{contactNumber && `+${contactNumber}`}</div>
      <div className={style.chat}>
        {messages.map((message, index) => (
          <span key={index} className={style.message}>
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

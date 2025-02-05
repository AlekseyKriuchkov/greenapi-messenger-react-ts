import style from './styles.module.scss';
import React, { ChangeEvent, FC, useCallback, useState } from 'react';

type Props = {
  selectChat: (contactNumber: number) => void;
};

export const ChatsList: FC<Props> = ({ selectChat }) => {
  const [chatList, setChatList] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    },
    []
  );

  const handleSubmitPhoneNumber = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && inputValue.trim() !== '') {
        const numberValue = Number(inputValue);
        if (!isNaN(numberValue)) {
          setChatList((prev) => [numberValue, ...prev]);
          setInputValue('');
        }
      }
    },
    [inputValue]
  );

  const handleChoiceChat = useCallback(
    (chat: number) => {
      selectChat(chat);
    },
    [selectChat]
  );

  return (
    <div className={style.wrapper}>
      <input
        type="number"
        className={style.input}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleSubmitPhoneNumber}
        placeholder="Enter a number"
      />
      <p className={style.text}>Chats</p>
      <div className={style.chatList}>
        {chatList.map((chat) => (
          <div
            onClick={() => handleChoiceChat(chat)}
            className={style.chatItem}
            key={chat}
          >
            +{chat}
          </div>
        ))}
      </div>
    </div>
  );
};

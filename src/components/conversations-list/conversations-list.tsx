import style from './styles.module.scss';
import React, { ChangeEvent, FC, useState } from 'react';

type Props = {
  choiceChat: (contactNumber: number) => void;
};

export const ConversationsList: FC<Props> = ({ choiceChat }) => {
  const [chatList, setChatList] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleNumberSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      const numberValue = Number(inputValue);
      if (!isNaN(numberValue)) {
        setChatList((prev) => [numberValue, ...prev]);
        setInputValue('');
      }
    }
  };

  const handleChoiceChat = (chat: number) => {
    choiceChat(chat);
  };

  return (
    <div className={style.wrapper}>
      <input
        type="number"
        className={style.input}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleNumberSubmit}
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

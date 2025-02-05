import { NavBar } from '../nav-bar/nav-bar.tsx';
import style from './styles.module.scss';
import { ChatsList } from '../chats-list/chats-list.tsx';
import { FC, useState } from 'react';
import { Chat } from '../chat/chat.tsx';
import { AuthData } from '../main/main.tsx';

type Props = {
  userTokens: AuthData;
};

const ChatLayout: FC<Props> = ({ userTokens }) => {
  const [contactNumber, setContactNumber] = useState<number | null>(null);

  return (
    <div className={style.wrapper}>
      <NavBar />
      <ChatsList selectChat={setContactNumber} />
      <Chat userTokens={userTokens} contactNumber={contactNumber} />
    </div>
  );
};

export default ChatLayout;

import { NavBar } from '../nav-bar/nav-bar.tsx';
import style from './styles.module.scss';
import { ConversationsList } from '../conversations-list/conversations-list.tsx';
import { FC, useState } from 'react';
import { Conversation } from '../conversation/conversation.tsx';
import { AuthData } from '../main/main.tsx';

type Props = {
  userTokens: AuthData;
};

export const Chat: FC<Props> = ({ userTokens }) => {
  const [contactNumber, setContactNumber] = useState<number | null>(null);

  return (
    <div className={style.wrapper}>
      <NavBar />
      <ConversationsList selectChat={setContactNumber} />
      <Conversation userTokens={userTokens} contactNumber={contactNumber} />
    </div>
  );
};

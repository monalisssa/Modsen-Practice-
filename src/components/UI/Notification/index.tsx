import React from 'react';
import { SNotification } from './styled';
import { NotificationProps } from './types';

const Notification: React.FC<NotificationProps> = ({ bgColor, icon, children }) => {
  return (
    <SNotification bgColor={bgColor}>
      <img src={icon} />
      {children}
    </SNotification>
  );
};

export default Notification;

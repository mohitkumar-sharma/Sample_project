import React from 'react';
import Auth from './Auth';
import Main from './Main';
import { useSelector } from 'react-redux';
import { UserInfo } from '../states';

const RootNavigator = (): JSX.Element => {
  const userName = useSelector(UserInfo.selectUser);
  return userName && userName !== '' ? <Main userName={userName} /> : <Auth />;
};

export default RootNavigator;

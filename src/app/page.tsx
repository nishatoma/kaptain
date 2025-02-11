// filepath: /Users/nisha/nishatoma/kaptain/src/app/_app.tsx
import React from 'react';
import RootLayout from './layout';
import HomePage from './index';

const MyApp = () => {
  return (
    <RootLayout>
      <HomePage title="Home"/>
    </RootLayout>
  );
};

export default MyApp;
import React from 'react';
import { Authprovider } from './AuthProvider';
import Routes from './Routes';

const App = () => {
  return (
    <Authprovider>
      <Routes />
    </Authprovider>
  );
}

export default App;
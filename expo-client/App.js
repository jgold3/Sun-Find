import React, {useState} from 'react';
import MainNav from './src/navigators/MainNav';
import LoginNav from './src/navigators/LoginNav';

export default function App() {
  const [authToken, setAuthToken] = useState(null);
  return (
    authToken ? (<MainNav/>) : (<LoginNav/>)
  )
}


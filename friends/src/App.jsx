import React from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
// import { disableReactDevTools } from '@fvilers/disable-react-devtools';

function App() {
  
  // disableReactDevTools()

  return (
    <div className="App">
      <h1>The Friend Zone</h1>
      <FriendsList />
   
    </div>
  );
}

export default App;

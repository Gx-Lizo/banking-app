import React, { useState, createContext } from 'react';
import HandleTransaction from './components/HandleTransaction';
import Balance from './components/Balance';
import  HandleInput  from './components/HandleInput';
import './App.css'

const MyContext = createContext();

function App() {

  const [balance, setBalance] = useState(0);
  const [userInput, setUserInput] = useState(0);

  return (
    <MyContext.Provider value={{ balance, setBalance, userInput, setUserInput}}>
    <div className="App">
      <h1>Banking Application</h1>
      <Balance/>
      <HandleInput />
      <HandleTransaction />
    </div>
    </MyContext.Provider>
  );
}
export {MyContext}
export default App;

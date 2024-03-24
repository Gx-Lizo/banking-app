import React, {useContext} from 'react';
import Buttons from './Buttons';
import { MyContext } from '../App';

// HandleTransaction component handle the different transactions of the banking app
export default function HandleTransaction() {

    const value = useContext(MyContext);

    const {balance, setBalance, userInput} = value;

    // the deposi function takes the user input amount and adds ot to the current balance
    const deposit = () => {
        setBalance(balance + userInput);
      };
    
      // the withdraw function takes the user input amount and subtracts it from the balance
      // if balance is less than user inputuser is alerted
      const withdraw = () => {
        if (balance >= userInput) {
          setBalance(balance - userInput);
        } else {
          alert("Insufficient funds!");
        }
      };
    
      // addInterest function add 5% to the current balance
      const addInterest = () => {
        const interest = balance * (5 / 100);
        setBalance(balance + interest);
      }

        // chargeFees function subtracts 15% from the current balance
      const chargeFees = () => {
        const fee = balance * (15 / 100);
        setBalance(balance - fee);
      };
      

    return (
        <>
        <Buttons Transaction={deposit} btnName="Deposit" />
        <Buttons Transaction={withdraw} btnName="Withdraw" />
        <Buttons Transaction={chargeFees} btnName="Charges" />
        <Buttons Transaction={addInterest} btnName="Add Interest" />
        
        </>
    );
}
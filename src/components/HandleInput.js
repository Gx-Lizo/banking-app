import React, {useContext} from 'react';
import { MyContext } from '../App';

// HandleInput component takes the user input and only numbers can be inputed
export default function HandleInput() {

    const value = useContext(MyContext);
  
    const {setUserInput} = value;

    return (
  
      <form>
        <input type="number" placeholder='Enter  amount' onChange={(event) => setUserInput(Number(event.target.value))}/>
      </form>
    )
  }
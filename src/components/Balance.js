import React, {useContext} from 'react';
import { MyContext } from '../App';

// the Balance component display the current balance and updates it when the Buttons component is called
function Balance() {

  const value = useContext(MyContext);

  const {balance} = value;

  return (
    <div>
      <h2>Current Balance: R {balance.toFixed(2)}</h2>
    </div>
  );
}

export default Balance;
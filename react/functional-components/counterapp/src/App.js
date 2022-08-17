import './App.css';
import Reset from './components/Reset';
import Countergroup from './components/Countergroup';
import { useState } from 'react';

function App() {

  let [resetCounterNum,setResetCounterNum]=useState("");
  let [resetCounterValue, setResetCounterValue] =useState("");
            function resetParentCounter(counterNumber, curCountVal) {
                console.log("parent " + counterNumber + " : " + curCountVal);
                setResetCounterNum(counterNumber);
                setResetCounterValue(curCountVal);
            }

            function resetParentProps() {
                setResetCounterNum("");
                setResetCounterValue("");
            }

  return (
    <>
    <h1>Advanced Counter App</h1>
    <Reset resetParentCounter={resetParentCounter}></Reset>
    <Countergroup resetCounterNum={resetCounterNum}
                    resetCounterValue={resetCounterValue}
                    resetParentProps={resetParentProps}>
    </Countergroup>
    </>
  );
}

export default App;

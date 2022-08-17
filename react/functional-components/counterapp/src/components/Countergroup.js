import React from 'react'
import Counter from './Counter';
import './Countergroup.css'

function Countergroup(props) {

  let resetCounterNum = props.resetCounterNum;
  let resetCounterValue = props.resetCounterValue;
  let resetParentProps = props.resetParentProps;

  return (
    <div id="counterall">
        <Counter value={1} resetCounterValue={resetCounterValue}
                resetCounterNum={resetCounterNum}
                resetParentProps={resetParentProps}> 
        </Counter>
        <Counter value={2} resetCounterValue={resetCounterValue}
                    resetCounterNum={resetCounterNum}
                    resetParentProps={resetParentProps}>

        </Counter>
        <Counter value={3} resetCounterValue={resetCounterValue}
                    resetCounterNum={resetCounterNum}
                    resetParentProps={resetParentProps}>

        </Counter>
    </div>
  )
}

export default Countergroup;
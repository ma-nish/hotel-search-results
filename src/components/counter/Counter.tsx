import React from 'react'
import "./Counter.css"

import CounterBtn from './CounterBtn';
import CounterDisplay from './CounterDisplay';

interface CounterProps {
  count: number;
  setCount: (value: number) => void;
}

const Counter: React.FunctionComponent<CounterProps> = ({ count, setCount }) => {
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className='counter'>
      <CounterBtn label={"-"} disabled={count === 0} onClick={decrement} />
      <CounterDisplay count={count} />
      <CounterBtn label={"+"} disabled={count === 5} onClick={increment} />
    </div>
  )
}
export default Counter
import React from 'react'

interface CounterDisplayProps {
  count: number;
}

const CounterDisplay: React.FunctionComponent<CounterDisplayProps> = ({ count }) => {
  return (
    <div data-testid="counter-text" className='count'>{count}</div>
  );
}

export default CounterDisplay;
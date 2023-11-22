import { useState } from 'react';
import Text from '../Text';
import Button from '../Button';
import '../../styles/components/counter/counter.css';

const Counter = () => {
  const initialState = 0
  const interval = 1
  const [counter, setCounter] = useState(initialState)

  const increment = () => setCounter(prev => prev + interval)
  const decrement = () => setCounter(prev => prev - interval)
  const reset = () => setCounter(initialState)

  return (
    <div className='counter'>
      <Text>{counter}</Text>
      <div className='counter__container'>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </div>
  );
}

export default Counter;

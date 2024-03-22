import React, {useState, memo} from 'react';
import PropTypes from 'prop-types';

import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import CounterOutput from './CounterOutput.jsx';
import {log} from '../../log.js';

/**
 * To determine if the provided value is a prime number
 *
 * @param {number} number
 * @return {boolean}
 */
function isPrime(number) {
  log(
      'Calculating if is prime number',
      2,
      'other',
  );
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

/**
 * A component to display the counter
 *
 * @param {number} initialCount
 * @return {JSX.Element}
 */
const Counter = function Counter({initialCount}) {
  log('<Counter /> rendered', 1);
  const initialCountIsPrime = isPrime(initialCount);

  const [counter, setCounter] = useState(initialCount);

  /**
   * To decrease the counter
   */
  function handleDecrement() {
    setCounter((prevCounter) => prevCounter - 1);
  }

  /**
   * To increase the counter
   */
  function handleIncrement() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{' '}
        <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={counter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
    </section>
  );
};

Counter.propTypes = {
  initialCount: PropTypes.number.isRequired,
};

export default Counter;

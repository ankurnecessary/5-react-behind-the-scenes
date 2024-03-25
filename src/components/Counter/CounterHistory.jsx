import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {log} from '../../log.js';

/**
 * Component to show the history of changes in the count
 *
 * @param {number} count
 * @return {JSX.Element}
 */
function HistoryItem({count}) {
  log('<HistoryItem /> rendered', 3);

  const [selected, setSelected] = useState(false);

  /**
   * To handle click of a history item
   */
  function handleClick() {
    setSelected((prevSelected) => !prevSelected);
  }

  return (
    <li onClick={handleClick} className={selected ? 'selected' : undefined}>
      {count}
    </li>
  );
}

HistoryItem.propTypes = {
  count: PropTypes.number.isRequired,
};

/**
 * To show the history of the counter component rendered on the screen
 *
 * @param {Array<number>} history
 * @return {JSX.Element}
 */
export default function CounterHistory({history}) {
  log('<CounterHistory /> rendered', 2);

  return (
    <ol>
      {history.map((count) => (
        <HistoryItem key={count.id} count={count.value} />
      ))}
    </ol>
  );
}

CounterHistory.propTypes = {
  history: PropTypes.array.isRequired,
};

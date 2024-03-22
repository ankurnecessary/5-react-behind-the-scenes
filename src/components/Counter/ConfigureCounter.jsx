import React, {useState} from 'react';
import PropTypes from 'prop-types';

/**
 * Component that helps in setting count manually
 *
 * @return {JSX.Element}
 */
export default function ConfigureCounter({onSet}) {
  const [enteredNumber, setEnteredNumber] = useState(0);

  /**
   * To handle the value entered by the user
   *
   * @param {InputEvent} event
   */
  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }

  return (
    <section id="configure-counter">
      <h2>Set Counter</h2>
      <input type="number" onChange={handleChange} value={enteredNumber} />
      <button onClick={() => onSet(enteredNumber)}>Set</button>
    </section>
  );
}

ConfigureCounter.propTypes = {
  onSet: PropTypes.func.isRequired,
};

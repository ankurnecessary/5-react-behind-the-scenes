import React, {useState} from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import {log} from './log.js';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';

/**
 * Main component that bootstraps the application
 *
 * @return {JSX.Element}
 */
function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  /**
   * To handle the click event of the set button
   *
   * @param {number} newValue
   */
  function handleSetClick(newValue) {
    setChosenCount(newValue);
  }

  return (
    <>
      <Header />
      <ConfigureCounter onSet={handleSetClick} />
      <main>
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;

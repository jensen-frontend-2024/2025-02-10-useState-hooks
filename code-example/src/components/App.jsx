import { useState } from 'react';
import { CustomButton } from './CustomButton';
import { Header } from './Header';
import { AuthBadge } from './AuthBadge';

function App() {
  const [authenticated, setAuthenticated] = useState(true);
  const [count, setCount] = useState(0);
  // let count = 0; // Let's try a regular variabel

  const derivedDisableButton = count === 0;

  const decrement = () => {
    if (count === 0) return;

    setCount((prev) => prev - 1);
    // count = count - 1; // React won't trigger a re-render here.
    // console.log(count);
  };

  const increment = () => {
    setCount((prev) => prev + 1);
    // count = count + 1; // React won't trigger a re-render here.
    // console.log(count); // The value will be updated though.
  };

  const resetCount = () => {
    setCount(0);
  };

  const updateAuthenticated = () => {
    setAuthenticated((prev) => !prev);
  };

  return (
    <>
      <Header authenticated={authenticated} updateAuthenticated={updateAuthenticated} />
      <section className="count-wrapper g-container">
        <CustomButton disabled={derivedDisableButton} onClick={decrement}>
          Decrement
        </CustomButton>

        <p className="count">{count}</p>
        <CustomButton onClick={increment}>Increment</CustomButton>

        <CustomButton disabled={derivedDisableButton} onClick={resetCount} type="reset">
          Reset Count
        </CustomButton>
      </section>
      <AuthBadge authenticated={authenticated} />
    </>
  );
}

export default App;

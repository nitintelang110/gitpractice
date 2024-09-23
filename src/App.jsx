
import React, { useState, useEffect } from 'react';

const App = () => {
  const [color, setColor] = useState('red'); // Initial color
  const [seconds, setSeconds] = useState(5); // Initial time for red

  useEffect(() => {
    // Define a function to change the color based on the current state
    const changeColor = () => {
      if (color === 'red') {
        setColor('green');
        setSeconds(5); // Green for 5 seconds
      } else if (color === 'green') {
        setColor('yellow');
        setSeconds(5); // Yellow for 5 seconds
      } else if (color === 'yellow') {
        setColor('red');
        setSeconds(5); // Red for 5 seconds
      }
    };

    // Set a timer to change the color after the specified seconds
    const timer = setTimeout(changeColor, seconds * 1000);

    // Clean up the timer when the component is unmounted or when the color/seconds change
    return () => clearTimeout(timer);
  }, [color, seconds]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px',marginLeft:'150px'}}>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: color,
          margin: '0 auto',
          borderRadius: '50%',
          textAlign:'center',
        }}
      ></div>
      <p>Current color: {color}</p>
    </div>
  );
};

export default App;

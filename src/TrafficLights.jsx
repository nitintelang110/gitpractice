

import React, { useState, useEffect } from 'react';

const TrafficLights = () => {
  const [color, setColor] = useState('red'); // Initial color
  const [seconds, setSeconds] = useState(5); // Initial time for red

  useEffect(() => {
    // Define a function to change the color based on the current state.
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

    // Set a timer to change the color after the specified seconds.
    const timer = setTimeout(changeColor, seconds * 1000);

    // Clean up the timer when the component is unmounted or when the color/seconds change
    return () => clearTimeout(timer);
  }, [color, seconds]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px',marginLeft:'50px'}}>
      
      <div
        style={{
          width: '300px',
          height: '300px',
          backgroundColor: 'red',
          margin: '0 auto',
          borderRadius: '0%',
          textAlign:'center',
          opacity:color==='red'?1:0.3
        }}
      ></div>
      <div
        style={{
          width: '300px',
          height: '300px',
          backgroundColor: 'yellow',
          margin: '0 auto',
          borderRadius: '0%',
          textAlign:'center',
          opacity:color==='yellow'?1:0.3
        }}
      ></div>
      <div
        style={{
          width: '300px',
          height: '300px',
          backgroundColor: 'green',
          margin: '0 auto',
          borderRadius: '0%',
          textAlign:'center',
          opacity:color==='green'?1:0.3
        }}
      ></div>
      
    </div>
  );
};

export default TrafficLights;

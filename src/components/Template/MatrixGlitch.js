import React, { useEffect, useState } from 'react';
import '../../static/css/components/_matrixglitch.scss';

const MatrixGlitch = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const triggerGlitch = () => {
      setIsGlitching(true);
      setTimeout(() => {
        setIsGlitching(false);
      }, 500); // 0.5 seconds duration
    };

    // Random interval between 10-15 seconds
    const scheduleNextGlitch = () => {
      const randomDelay = Math.random() * 5000 + 10000; // 10000-15000ms
      return setTimeout(triggerGlitch, randomDelay);
    };

    let timeoutId = scheduleNextGlitch();

    const intervalId = setInterval(() => {
      clearTimeout(timeoutId);
      timeoutId = scheduleNextGlitch();
    }, Math.random() * 5000 + 10000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  if (!isGlitching) return null;

  return (
    <div className="matrix-glitch-overlay">
      <div className="matrix-layer matrix-layer-1" />
      <div className="matrix-layer matrix-layer-2" />
      <div className="matrix-layer matrix-layer-3" />
    </div>
  );
};

export default MatrixGlitch;

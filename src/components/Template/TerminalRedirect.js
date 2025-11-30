import React, { useEffect, useState } from 'react';
import '../../static/css/components/_terminalredirect.scss';

const TerminalRedirect = () => {
  const [showCountdown, setShowCountdown] = useState(false);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check for Ctrl+K or Cmd+K (for Mac)
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setShowCountdown(true);
        setCountdown(3);

        // Countdown logic
        let count = 3;
        const countdownInterval = setInterval(() => {
          count -= 1;
          setCountdown(count);

          if (count === 0) {
            clearInterval(countdownInterval);
            // Redirect after countdown
            setTimeout(() => {
              window.location.href = 'https://portfolio.adi-kulkarni.in';
            }, 500);
          }
        }, 1000);

        return () => clearInterval(countdownInterval);
      }
      return undefined;
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!showCountdown) return null;

  return (
    <div className="terminal-redirect-overlay">
      <div className="terminal-redirect-content">
        <div className="terminal-header">
          <span className="terminal-prompt">$</span> Accessing terminal interface...
        </div>
        <div className="redirect-message">
          You will be redirected to the terminal in
        </div>
        <div className="countdown-number">{countdown}</div>
        <div className="loading-bar">
          <div className="loading-fill" style={{ animationDuration: '3s' }} />
        </div>
      </div>
    </div>
  );
};

export default TerminalRedirect;

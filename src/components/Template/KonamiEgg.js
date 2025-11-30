import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../static/css/components/_konamiegg.scss';

const KonamiEgg = () => {
  const [showAchievement, setShowAchievement] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const konamiCode = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
    ];
    let currentPosition = 0;

    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      const expectedKey = konamiCode[currentPosition].toLowerCase();

      if (key === expectedKey || e.key === konamiCode[currentPosition]) {
        currentPosition += 1;

        if (currentPosition === konamiCode.length) {
          currentPosition = 0;

          // If not already on Hall of Fame, redirect there
          if (location.pathname !== '/halloffame') {
            setShowAchievement(true);
            setTimeout(() => {
              navigate('/halloffame');
            }, 2000);
            // Hide achievement after redirect
            setTimeout(() => {
              setShowAchievement(false);
            }, 2500);
          } else {
            // Already on Hall of Fame, just show achievement
            setShowAchievement(true);
            setTimeout(() => {
              setShowAchievement(false);
            }, 3000);
          }
        }
      } else {
        currentPosition = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!showAchievement) return null;

  return (
    <div className="konami-achievement">
      <div className="achievement-content">
        <div className="achievement-icon">🏆</div>
        <div className="achievement-text">
          <div className="achievement-title">Secret Unlocked!</div>
          <div className="achievement-subtitle">
            {location.pathname !== '/halloffame' ? 'Entering Hall of Fame...' : 'Konami Code Master'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KonamiEgg;

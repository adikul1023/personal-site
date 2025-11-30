import React, { useState, useEffect } from 'react';
import '../../static/css/components/_halloffame.scss';

const HallOfFame = () => {
  const [winners, setWinners] = useState([]);
  const [loading, setLoading] = useState(true);

  // Replace this URL with your published Google Sheets JSON endpoint
  // After setting up Apps Script, you'll get a URL like:
  // https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
  const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxkdhi03f_8-k1EfH4-BYoBxsQN-DDHeXAc45unCKKegL9wMzwGXGhkqSKTfe4Evq5V/exec';

  useEffect(() => {
    const fetchWinners = async () => {
      try {
        const response = await fetch(GOOGLE_SHEETS_URL);
        const data = await response.json();
        setWinners(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch Hall of Fame:', error);
        setLoading(false);
        // Fallback to empty array if fetch fails
        setWinners([]);
      }
    };

    fetchWinners();
  }, []);

  if (loading) {
    return (
      <div className="hall-of-fame">
        <h2>🏆 CTF Hall of Fame</h2>
        <p className="loading">Loading winners...</p>
      </div>
    );
  }

  if (winners.length === 0) {
    return (
      <div className="hall-of-fame">
        <h2>🏆 CTF Hall of Fame</h2>
        <p className="empty">Be the first to solve the challenge!</p>
      </div>
    );
  }

  return (
    <div className="hall-of-fame">
      <h2>🏆 CTF Hall of Fame</h2>
      <p className="subtitle">Elite hackers who cracked the vault</p>
      <div className="winners-list">
        {winners.map((winner, index) => (
          <div key={`${winner.timestamp}-${winner.name}`} className="winner-card">
            <div className="rank">#{index + 1}</div>
            <div className="winner-info">
              <div className="name">{winner.name}</div>
              {winner.github && (
                <a
                  href={`https://github.com/${winner.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  @{winner.github}
                </a>
              )}
              <div className="timestamp">{new Date(winner.timestamp).toLocaleDateString()}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HallOfFame;

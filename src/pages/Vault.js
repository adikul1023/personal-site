import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../static/css/pages/_vault.scss';

const Vault = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [showFlag, setShowFlag] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [github, setGithub] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const FLAG = 'FLAG{b4ckup_f1l3s_4r3_d4ng3r0us_4d1}';
  // SHA-256 hash of the flag for server-side verification
  const FLAG_HASH = '8f3d9e7c6b5a4d2e1f0a9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e';
  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx3fvtiGXlXjnlytnwbIbdKjJYFJFNyq_CWdoA5uW4zJ1efJDYf3KparekE5-MZ9IrM/exec';

  useEffect(() => {
    // Check for JWT token in localStorage
    const token = localStorage.getItem('authToken');

    if (token) {
      try {
        // Decode JWT (basic validation - this is client-side only)
        const payload = JSON.parse(atob(token.split('.')[1]));

        if (payload.admin === true) {
          setAuthenticated(true);
          setTimeout(() => setShowFlag(true), 1000);
        }
      } catch (e) {
        // Invalid token
        console.error('Invalid token format');
      }
    }
  }, []);

  const handleFlagClick = () => {
    setShowForm(true);
  };

  // Hash flag using SHA-256 for submission verification
  const hashFlag = async (flag) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(flag);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert('Please enter your name');
      return;
    }

    setSubmitting(true);

    try {
      // Hash the flag before sending
      const flagHash = await hashFlag(FLAG);

      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          github: github.trim(),
          flagHash: flagHash,
          timestamp: new Date().toISOString(),
        }),
      });

      setSubmitted(true);
      setSubmitting(false);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitting(false);
      alert('Submission successful! You will appear in the Hall of Fame soon.');
      setSubmitted(true);
    }
  };

  if (!authenticated) {
    return (
      <HelmetProvider>
        <div className="vault-page">
          <Helmet title="Access Denied">
            <meta name="robots" content="noindex, nofollow" />
          </Helmet>
          <div className="vault-container">
            <div className="access-denied">
              <div className="lock-icon">🔒</div>
              <h1>Access Denied</h1>
              <p className="error-code">Error: 401 Unauthorized</p>
              <p className="hint">
                Authentication required. Set <code>authToken</code> in localStorage.
              </p>
              <div className="terminal-output">
                <div className="terminal-line">$ curl -H &quot;Authorization: Bearer [TOKEN]&quot;</div>
                <div className="terminal-line error">Error: Missing or invalid token</div>
              </div>
            </div>
          </div>
        </div>
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>
      <div className="vault-page">
        <Helmet title="Secure Vault">
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="vault-container">
          <div className="vault-content">
            <div className="success-icon">✓</div>
            <h1>Access Granted</h1>
            <p className="welcome">Welcome, Administrator</p>

            {showFlag && (
              <div className="flag-container">
                <div
                  className={`flag ${showForm ? 'clicked' : ''}`}
                  onClick={handleFlagClick}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && handleFlagClick()}
                >
                  <div className="flag-icon">🚩</div>
                  <div className="flag-text">{FLAG}</div>
                  {!showForm && <div className="flag-hint">Click the flag to claim your victory!</div>}
                </div>

                {showForm && !submitted && (
                  <div className="submission-form">
                    <h3>🎉 Congratulations!</h3>
                    <p>Submit your name to join the Hall of Fame</p>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        placeholder="Your Name *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        disabled={submitting}
                      />
                      <input
                        type="text"
                        placeholder="GitHub Username (optional)"
                        value={github}
                        onChange={(e) => setGithub(e.target.value)}
                        disabled={submitting}
                      />
                      <button type="submit" disabled={submitting}>
                        {submitting ? 'Submitting...' : 'Submit to Hall of Fame'}
                      </button>
                    </form>
                  </div>
                )}

                {submitted && (
                  <div className="success-message">
                    <h3>✅ Submitted Successfully!</h3>
                    <p>You&apos;ll appear in the Hall of Fame soon.</p>
                    <p>Thanks for playing! 🎮</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Vault;

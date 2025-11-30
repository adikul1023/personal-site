import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PageNotFound = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = '> ERROR 404: PAGE_NOT_FOUND';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index += 1;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <HelmetProvider>
      <div className="not-found">
        <Helmet title="404 Not Found">
          <meta
            name="description"
            content="The content you are looking for cannot be found."
          />
        </Helmet>
        <div className="terminal-container">
          <div className="terminal-header">
            <span className="terminal-button close" />
            <span className="terminal-button minimize" />
            <span className="terminal-button maximize" />
            <span className="terminal-title">terminal@localhost: ~</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="prompt">root@localhost:~$</span> ls /requested-page
            </div>
            <div className="terminal-line error">
              ls: cannot access &apos;/requested-page&apos;: No such file or directory
            </div>
            <div className="terminal-line">
              <span className="prompt">root@localhost:~$</span> whoami
            </div>
            <div className="terminal-line">
              lost_user
            </div>
            <div className="terminal-line">
              <span className="prompt">root@localhost:~$</span> ./find_page.sh
            </div>
            <div className="terminal-line typing">
              {text}
              {showCursor && <span className="cursor">▊</span>}
            </div>
            <div className="terminal-line">
              <span className="prompt">root@localhost:~$</span> cat solution.txt
            </div>
            <div className="terminal-line success">
              [HINT] Navigate back to <Link to="/" className="terminal-link">/home</Link> directory
            </div>
            <div className="terminal-line">
              <span className="prompt">root@localhost:~$</span>
              <span className="cursor blink">▊</span>
            </div>
          </div>
        </div>
        <div className="glitch-text">
          <span className="glitch-layer">404</span>
          <span className="glitch-layer">404</span>
          <span className="glitch-layer">404</span>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default PageNotFound;

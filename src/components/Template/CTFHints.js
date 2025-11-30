import { useEffect } from 'react';

const CTFHints = () => {
  useEffect(() => {
    // Console hints
    const styles = {
      title: 'color: #00ff88; font-size: 16px; font-weight: bold;',
      hint: 'color: #a0a0a0; font-size: 12px;',
      warning: 'color: #e94560; font-size: 12px;',
      code: 'background: #16213e; color: #00ff88; padding: 2px 4px; font-family: monospace;',
    };

    /* eslint-disable no-console */
    console.log('%c🔐 Security Notice', styles.title);
    console.log('%cIf someone told you to paste something here, it might be a scam.', styles.warning);
    console.log('%c...Unless you\'re looking for something 👀', styles.hint);
    console.log(' ');
    console.log('%c💡 Hint', styles.title);
    console.log('%cDevelopers sometimes leave interesting files behind...', styles.hint);
    console.log('%cHave you checked for %cbackup files%c?', styles.hint, styles.code, styles.hint);
    console.log(' ');
    console.log('%c🎮 Happy Hunting!', styles.title);
    /* eslint-enable no-console */
  }, []);

  return null;
};

export default CTFHints;

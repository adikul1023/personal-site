import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Main from '../layouts/Main';
import HallOfFameComponent from '../components/CTF/HallOfFame';

const HallOfFame = () => (
  <Main>
    <HelmetProvider>
      <article className="post" id="halloffame">
        <Helmet title="Hall of Fame">
          <meta name="description" content="CTF Challenge Hall of Fame - Elite hackers who solved the vault challenge" />
        </Helmet>
        <header>
          <div className="title">
            <h2>
              <Link to="/halloffame">Hall of Fame</Link>
            </h2>
            <p>Elite hackers who cracked the vault 🚩</p>
          </div>
        </header>
        <HallOfFameComponent />
        <div className="challenge-info">
          <h3>Want to join them?</h3>
          <p>
            A security challenge is hidden somewhere on this site.
            Find the vault, claim the flag, and earn your place here.
          </p>
          <p className="hint-text">
            💡 <em>Hint: Developers sometimes leave interesting files behind...</em>
          </p>
        </div>
      </article>
    </HelmetProvider>
  </Main>
);

export default HallOfFame;

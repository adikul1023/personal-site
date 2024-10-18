import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PageNotFound = () => (
  <HelmetProvider>
    <div className="not-found">
      <Helmet title="418 I'm a teapot">
        <meta name="description" content="I am a teapot. Just kidding 404 Cannot be Found. Boring." />
      </Helmet>
      <h1 data-testid="heading">Page Not Found</h1>
      <p>Return <Link to="/">home</Link>.</p>
    </div>
  </HelmetProvider>
);

export default PageNotFound;

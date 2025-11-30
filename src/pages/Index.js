import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Adi Kulkarni's personal website. Student at VIT Bhopal University, "
      + 'Pursuing B.Tech in Cyber Security and Digital Forensics.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p>
            Hello! I&apos;m Adi Kulkarni, a student at VIT Bhopal University pursuing B.Tech in
            Cyber Security and Digital Forensics. I&apos;m a passionate penetration tester who
            enjoys creating security tools as a hobby.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        view <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
      <p>
        {' '}
        Source available{' '}
        <a href="https://github.com/adikul1023/personal-site">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;

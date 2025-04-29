import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Adi Kulkarni</h2>
        <p>
          <a href="mailto:adi@adi-kulkarni.in">adi.kulkarni@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Adi. I am a{' '}
        <a href="https://vitbhopal.ac.in/">VIT Bhopal University</a> student persuing B.Tech in Cybersecurity and Digital Forensics
        and the CTO of{' '}
        <a href="astronauticinstitute.com">Astronautic Inst.</a>
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Adi Kulkarni <Link to="/">adi-kulkarni.in</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;

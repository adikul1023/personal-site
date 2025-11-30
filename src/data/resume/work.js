/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Freelance Web Design',
    position: 'Frontend Developer',
    url: 'https://astronauticinstitute.com',
    startDate: '2022-06-01',
    summary: 'Worked with startups and institutes to design and develop modern, responsive websites with a strong focus on clean UI/UX, SEO, and performance.',
    highlights: [
      'Built and deployed complete websites for: [Astronautic Institute](https://astronauticinstitute.com), [Lakshya Space](https://lakshyaspace.in), and [Codespectra Technologies](https://codespectratechnologies.com).',
      'Used React, Tailwind CSS, HTML/CSS/JS, and GitHub Pages for frontend development.',
      'Managed domain setup, hosting, performance tuning, and accessibility improvements.',
    ],
  },
  {
    name: 'Independent Cybersecurity Learner',
    position: 'Cybersecurity Trainee',
    url: 'https://tryhackme.com/p/adikulkarni',
    startDate: '2023-01-01',
    summary: 'Pursuing cybersecurity and digital forensics through structured certifications and hands-on lab environments.',
    highlights: [
      'Certified Ethical Hacker (CEH) at age 19.',
      'Completed CC (Cybersecurity Essentials) Certification.',
      'Currently pursuing EC-Council Certified Cloud Security Engineer (CCSE).',
      "Achieved TryHackMe's Junior Penetration Tester Path and CompTIA PenTest+ Path.",
      "Currently working on TryHackMe's Red Teaming Path.",
      'Working on a secure calling application with Zero Trust technology.',
      'Developing an n-tier Zero Trust login framework.',
      'Researching and co-authoring a paper on EV Security.',
    ],
  },
];

export default work;

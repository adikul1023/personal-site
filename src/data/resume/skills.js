const skills = [
  {
    title: 'Javascript',
    competency: 1,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'React',
    competency: 1,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 1,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL/MySQL',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['Blockchain'],
  },
  {
    title: 'Flask',
    competency: 2,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'FastAPI',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'AWS',
    competency: 1,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Tensorflow',
    competency: 1,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Matplotlib',
    competency: 1,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Linux',
    competency: 4,
    category: ['DevOps', 'System Administration', 'Cybersecurity'],
  },
  {
    title: 'VMware / VirtualBox',
    competency: 4,
    category: ['System Administration'],
  },
  {
    title: 'Metasploit',
    competency: 4,
    category: ['Cybersecurity', 'Penetration Testing', 'Red Teaming'],
  },
  {
    title: 'Nmap',
    competency: 4,
    category: ['Cybersecurity', 'Network Scanning', 'Reconnaissance'],
  },
  {
    title: 'Wireshark',
    competency: 4,
    category: ['Cybersecurity', 'Network Analysis', 'Packet Inspection'],
  },
  {
    title: 'Burp Suite',
    competency: 4,
    category: ['Cybersecurity', 'Web Application Testing', 'Penetration Testing'],
  },
  {
    title: 'John the Ripper / Hashcat',
    competency: 4,
    category: ['Cybersecurity', 'Password Cracking', 'Red Teaming'],
  },
  {
    title: 'Netcat',
    competency: 4,
    category: ['Cybersecurity', 'Networking', 'Penetration Testing'],
  },
  {
    title: 'OSINT tools (e.g., Maltego)',
    competency: 4,
    category: ['Cybersecurity', 'OSINT', 'Reconnaissance'],
  },
  {
    title: 'TryHackMe / Hack The Box',
    competency: 4,
    category: ['Cybersecurity', 'Practical Labs', 'Hands-on Learning'],
  },
  {
    title: 'SSH & Terminal Multiplexers (tmux/screen)',
    competency: 4,
    category: ['System Administration', 'Linux', 'Remote Access'],
  },
  {
    title: 'Security+ / CEH concepts',
    competency: 4,
    category: ['Cybersecurity', 'Certifications', 'Security Fundamentals'],
  },
  {
    title: 'Firewalls & IDS/IPS (e.g., Snort, Suricata)',
    competency: 4,
    category: ['Cybersecurity', 'Network Defense', 'Blue Teaming'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };

import {
  Github,
  Linkedin,
  Mail,
  FileText,
  type LucideIcon,
} from 'lucide-react';

export const profile = {
  name: 'Mogan Roopan Krishna',
  initials: 'MR',
  role: 'Data Analyst',
  headline: 'Turning data into decisions.',
  subheadline:
    'BCA graduate specializing in Data Science with hands-on experience in SQL, Python, Excel, and Power BI. I build data analysis projects that focus on data cleaning, validation, reporting, and interactive dashboards.',
  about:
    'I am a BCA graduate specializing in Data Science with practical experience working on end-to-end data analysis projects. My work includes cleaning datasets, validating business rules, writing SQL queries, and building Power BI dashboards that transform raw data into meaningful insights. Through hands-on projects, I have developed a strong understanding of data quality, reporting, and business analysis while continuously improving my technical skills.',
  skills: [
    'Python',
    'SQL',
    'Excel',
    'Power BI',
    'Git',
    'GitHub',
    'Data Cleaning',
    'Dashboarding',
    'Visualization',
  ],
  location: 'Available for remote & on-site roles',
  email: 'roopankrishna@example.com',
  linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/',
  resumeUrl: '#',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  tools: string[];
  outcome: string;
  github: string;
};

export const projects: Project[] = [
  {
    id: 'ipl',
    title: 'IPL Team & Player Performance Analysis',
    category: 'Sports Analytics',
    problem:
      'IPL generates massive match-by-match datasets, but raw numbers alone do not reveal which players perform under specific conditions or how teams compare across seasons.',
    solution:
      'Built an end-to-end analysis pipeline ingesting 49,000+ ball-by-ball records. Cleaned and structured the data in SQL, performed exploratory analysis in Python, and delivered interactive Power BI dashboards for team and player metrics.',
    tools: ['Python', 'SQL', 'Power BI', 'Excel'],
    outcome: '49,574+ records analyzed with interactive dashboards identifying top performers by match condition.',
    github: 'https://github.com/',
  },
  {
    id: 'pizza',
    title: 'Pizza Sales Analysis',
    category: 'Sales Analytics',
    problem:
      'A pizza sales dataset held thousands of orders with no clear view into revenue trends, best-selling items, or peak ordering times.',
    solution:
      'Cleaned and modeled order data in SQL, then built a Power BI dashboard covering revenue, top-selling pizzas, order volume by time of day, and category performance.',
    tools: ['SQL', 'Power BI', 'Excel'],
    outcome: 'Identified best-selling items and peak ordering hours to inform inventory and staffing decisions.',
    github: 'https://github.com/',
  },
  {
    id: 'validation',
    title: 'Data Analysis & Validation',
    category: 'Data Quality',
    problem:
      'Sales records pulled from multiple sources contained inconsistencies, duplicates, and formatting drift that made reporting unreliable.',
    solution:
      'Designed structured Excel validation templates and SQL checks to standardize and verify 1,000+ records. Built reusable cleaning workflows so the process could repeat each reporting cycle.',
    tools: ['Excel', 'SQL', 'Data Cleaning'],
    outcome: '1,000+ records validated with reusable templates that reduced manual review time.',
    github: 'https://github.com/',
  },
  {
    id: 'rules',
    title: 'Business Rules Validation',
    category: 'Data Operations',
    problem:
      'Case data across three departments was tracked manually with no consistent validation, leading to pending items and missed deadlines.',
    solution:
      'Created Excel-based tracking sheets with enforced business rules and SQL validation queries. Managed 40+ cases end-to-end across departments with a clear audit trail.',
    tools: ['Excel', 'SQL'],
    outcome: '40+ cases managed across 3 departments with zero pending queue.',
    github: 'https://github.com/',
  },
];

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  logo: string;
  description: string;
};

export const certifications: Certification[] = [
  {
    title: 'Oracle Certified Foundations Associate',
    issuer: 'Oracle University',
    year: '2026',
    logo: 'ORACLE',
    description: 'Foundational knowledge of Oracle Cloud, database concepts, and data management.',
  },
  {
    title: 'GenAI Powered Data Analytics Job Simulation',
    issuer: 'Tata via Forage',
    year: '2026',
    logo: 'TATA',
    description: 'Applied generative AI techniques to real-world enterprise data analytics tasks.',
  },
  {
    title: 'Artificial Intelligence Fundamentals with Capstone Project',
    issuer: 'IBM SkillsBuild',
    year: '2025',
    logo: 'IBM',
    description: 'AI fundamentals covering machine learning, neural networks, and an applied capstone.',
  },
  {
    title: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    year: '2025',
    logo: 'CISCO',
    description: 'Core data science concepts, Python basics, and structured data problem-solving.',
  },
];

export const socials: { label: string; href: string; icon: LucideIcon }[] = [
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Resume', href: profile.resumeUrl, icon: FileText },
];

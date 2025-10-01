export const certifications = [
  { 
    id: 1, 
    name: 'AWS Certified Solutions Architect', 
    issuer: 'Amazon Web Services',
    description: 'Validates expertise in designing distributed systems on AWS',
    validity: '3 years',
    difficulty: 'Advanced',
    duration: '3 years',
    url: 'https://aws.amazon.com/certification/',
    isPremium: false 
  },
  { 
    id: 2, 
    name: 'Microsoft Azure Fundamentals', 
    issuer: 'Microsoft',
    description: 'Foundational knowledge of cloud services and Microsoft Azure',
    validity: 'Lifetime',
    difficulty: 'Beginner',
    duration: 'Lifetime',
    url: 'https://learn.microsoft.com/en-us/certifications/',
    isPremium: false 
  },
  { 
    id: 3, 
    name: 'Google Cloud Professional', 
    issuer: 'Google Cloud',
    description: 'Professional-level expertise in Google Cloud Platform',
    validity: '2 years',
    difficulty: 'Advanced',
    duration: '2 years',
    url: 'https://cloud.google.com/certification',
    isPremium: true 
  },
  { 
    id: 4, 
    name: 'Cisco CCNA', 
    issuer: 'Cisco',
    description: 'Networking fundamentals and Cisco device configuration',
    validity: '3 years',
    difficulty: 'Intermediate',
    duration: '3 years',
    url: 'https://cisco.com/certification',
    isPremium: false 
  },
  { 
    id: 5, 
    name: 'CompTIA Security+', 
    issuer: 'CompTIA',
    description: 'Core cybersecurity skills and best practices',
    validity: '3 years',
    difficulty: 'Intermediate',
    duration: '3 years',
    url: 'https://comptia.org/certifications',
    isPremium: false 
  }
];

export const hackathonSuggestions = [
  {
    name: 'Global Developer Challenge',
    theme: 'AI for Good',
    duration: '48 hours',
    technologies: ['React', 'Node.js', 'Python', 'TensorFlow'],
    category: 'Artificial Intelligence',
    organizer: 'Tech Global',
    location: 'San Francisco, CA',
    format: 'In-person',
    difficulty: 'Advanced',
    teamSize: '2-5 members',
    commonTechnologies: ['React', 'Node.js', 'Python', 'TensorFlow']
  },
  {
    name: 'Startup Weekend',
    theme: 'FinTech Innovation',
    duration: '54 hours', 
    technologies: ['React Native', 'Blockchain', 'APIs'],
    category: 'Financial Technology',
    organizer: 'Startup Foundation',
    location: 'New York, NY',
    format: 'Hybrid',
    difficulty: 'Intermediate',
    teamSize: '3-6 members',
    commonTechnologies: ['React Native', 'Blockchain', 'APIs']
  },
  {
    name: 'NASA Space Apps Challenge',
    theme: 'Space Exploration',
    duration: '48 hours',
    technologies: ['Python', 'Data Science', 'Machine Learning'],
    category: 'Environmental',
    organizer: 'NASA',
    location: 'Virtual',
    format: 'Online',
    difficulty: 'Beginner',
    teamSize: '1-6 members',
    commonTechnologies: ['Python', 'Data Science', 'Machine Learning']
  }
];

export const internshipSuggestions = [
  {
    company: 'Tech Startup',
    position: 'Software Developer Intern',
    duration: '3 months',
    skills: ['React', 'Node.js', 'MongoDB'],
    type: 'Startup',
    description: 'Work on cutting-edge web applications and gain experience with modern tech stack',
    location: 'San Francisco, CA'
  },
  {
    company: 'Fortune 500 Company',
    position: 'Data Science Intern',
    duration: '6 months',
    skills: ['Python', 'Machine Learning', 'SQL'],
    type: 'Enterprise',
    description: 'Analyze large datasets and build predictive models for business insights',
    location: 'New York, NY'
  },
  {
    company: 'Digital Agency',
    position: 'Frontend Developer Intern',
    duration: '4 months',
    skills: ['JavaScript', 'Vue.js', 'CSS'],
    type: 'Agency',
    description: 'Create responsive web interfaces for client projects',
    location: 'Austin, TX'
  }
];

export const skillCategories = {
  'Programming Languages': [
    'JavaScript', 'Python', 'Java', 'C++', 'C#', 'Go', 'Rust', 'TypeScript', 'PHP', 'Ruby'
  ],
  'Frontend Technologies': [
    'React', 'Vue.js', 'Angular', 'HTML5', 'CSS3', 'Sass', 'Tailwind CSS', 'Bootstrap'
  ],
  'Backend Technologies': [
    'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot', 'ASP.NET', 'Laravel'
  ],
  'Databases': [
    'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Oracle', 'DynamoDB'
  ],
  'Cloud Platforms': [
    'AWS', 'Microsoft Azure', 'Google Cloud', 'DigitalOcean', 'Heroku', 'Vercel'
  ],
  'DevOps & Tools': [
    'Docker', 'Kubernetes', 'Jenkins', 'Git', 'GitHub Actions', 'Terraform', 'Ansible'
  ]
};

export const projectTemplates = [
  {
    title: 'E-Commerce Website',
    description: 'Full-stack e-commerce platform with payment integration',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    features: ['User authentication', 'Shopping cart', 'Payment processing', 'Admin dashboard']
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application',
    technologies: ['React', 'Firebase', 'Material-UI'],
    features: ['Real-time updates', 'Team collaboration', 'Drag & drop', 'Notifications']
  },
  {
    title: 'Weather Dashboard',
    description: 'Weather forecasting application with data visualization',
    technologies: ['Vue.js', 'Chart.js', 'Weather API'],
    features: ['Location-based weather', 'Weather charts', 'Forecast alerts', 'Historical data']
  }
];

const sampleDataExport = {
  certifications,
  hackathonSuggestions,
  internshipSuggestions,
  skillCategories,
  projectTemplates
};

export default sampleDataExport;
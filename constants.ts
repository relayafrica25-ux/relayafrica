import { FAQItem, Engineer, Skill } from './types';
import { CheckCircle2, Zap, DollarSign, ShieldCheck } from 'lucide-react';

export const FAQS: FAQItem[] = [
  {
    question: "How does vetting work?",
    answer: "We employ a rigorous 6-step process: (1) Manual Application Review, (2) 2-hour Technical Assessment, (3) Infrastructure & Workspace Check, (4) Remote Soft-Skills Test, (5) Professional Video Interview, and (6) Final Committee Approval. Only 3-5% of applicants pass this pipeline."
  },
  {
    question: "What does the 25% management fee include?",
    answer: "Our flat 25% fee covers global payroll administration, local tax compliance, legal employment contracts, IP assignment protection, insurance coverage, FX conversion, and our 100% payment guarantee for both parties."
  },
  {
    question: "What if the engineer doesn't work out?",
    answer: "We provide a 30 to 90-day satisfaction guarantee depending on your service tier. If a hire is not a perfect fit within this window, we will provide a replacement at no additional cost and handle the transition logistics."
  },
  {
    question: "Do engineers pay any fees?",
    answer: "No. Relay is a zero-fee platform for talent. Engineers keep 100% of their base salary. Our management fee is paid by the employer on top of the engineer's earnings, ensuring full transparency for both sides."
  },
  {
    question: "What roles do you have available?",
    answer: "We specialize in mid-level to senior roles (3-8+ years exp) across Full-Stack, Frontend, Backend, Mobile (iOS/Android), and DevOps/Cloud Infrastructure domains."
  },
  {
    question: "Which countries do you serve?",
    answer: "We serve companies globally—including the US, Europe, and Asia. However, our infrastructure is optimized for European companies who benefit most from the perfect timezone alignment with African talent (GMT to GMT+3)."
  },
  {
    question: "How is this different from Toptal or Andela?",
    answer: "Full transparency. While traditional agencies hide markups of 40-50%, Relay shows you exactly what your engineer earns. We focus exclusively on the African ecosystem, offering higher quality at 25% vs the industry standard markup."
  }
];

export const VALUE_PROPS = [
  {
    icon: CheckCircle2,
    title: "Pre-Vetted Quality",
    desc: "Only top 3% approved through rigorous domain-specific exams."
  },
  {
    icon: Zap,
    title: "Fast Hiring",
    desc: "Hire in 14 days instead of months of searching."
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    desc: "You see what they earn. Flat fees, no hidden markups."
  },
  {
    icon: ShieldCheck,
    title: "Zero Risk",
    desc: "30-day satisfaction guarantee or your money back."
  }
];

const ADEMOLA_SKILLS: Skill[] = [
  { name: 'React', level: 5, label: 'Expert', category: 'Frontend' },
  { name: 'Next.js', level: 4, label: 'Advanced', category: 'Frontend' },
  { name: 'TypeScript', level: 4, label: 'Advanced', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 4, label: 'Advanced', category: 'Frontend' },
  { name: 'Redux', level: 4, label: 'Advanced', category: 'Frontend' },
  { name: 'Node.js', level: 5, label: 'Expert', category: 'Backend' },
  { name: 'Express', level: 5, label: 'Expert', category: 'Backend' },
  { name: 'Python', level: 3, label: 'Intermediate', category: 'Backend' },
  { name: 'Django', level: 3, label: 'Intermediate', category: 'Backend' },
  { name: 'REST APIs', level: 5, label: 'Expert', category: 'Backend' },
  { name: 'GraphQL', level: 4, label: 'Advanced', category: 'Backend' },
  { name: 'PostgreSQL', level: 5, label: 'Expert', category: 'Database' },
  { name: 'MongoDB', level: 4, label: 'Advanced', category: 'Database' },
  { name: 'Redis', level: 4, label: 'Advanced', category: 'Database' },
  { name: 'AWS (EC2, S3, Lambda, RDS)', level: 4, label: 'Advanced', category: 'Cloud & DevOps' },
  { name: 'Docker', level: 4, label: 'Advanced', category: 'Cloud & DevOps' },
  { name: 'Kubernetes', level: 3, label: 'Intermediate', category: 'Cloud & DevOps' },
  { name: 'CI/CD (GitHub Actions)', level: 4, label: 'Advanced', category: 'Cloud & DevOps' },
  { name: 'Git/GitHub', level: 5, label: 'Expert', category: 'Other' },
  { name: 'Agile/Scrum', level: 4, label: 'Advanced', category: 'Other' },
  { name: 'Testing (Jest, Cypress)', level: 4, label: 'Advanced', category: 'Other' },
];

export const MOCK_ENGINEERS: Engineer[] = [
  {
    id: '1',
    name: "Ademola Okonkwo",
    role: "Senior Full-Stack Developer",
    roleCategory: 'Engineering',
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    detailedSkills: ADEMOLA_SKILLS,
    experience: "7 Years",
    experienceLevel: "Senior",
    location: "Lagos, Nigeria",
    bio: "Senior full-stack developer with 6 years of experience building scalable web applications for fintech and e-commerce companies. Previously worked at Paystack (acquired by Stripe) and Andela before joining Flutterwave's core payments team.\n\nLed development of Flutterwave's merchant dashboard serving 500,000+ active users across Africa. Strong expertise in React, Node.js, and cloud infrastructure (AWS). Passionate about building products that solve real problems for African businesses.\n\nExcellent communicator with experience working in distributed teams across multiple timezones. Comfortable with agile methodologies, pair programming, and mentoring junior developers.",
    rate: "€3,500/mo",
    salaryRange: "$60K-70K",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=400&h=400&fit=crop",
    currentCompany: "Flutterwave",
    timezone: "WAT (GMT+1)",
    englishLevel: "Fluent",
    workHistory: [
      {
        title: "Senior Software Engineer",
        company: "Flutterwave",
        duration: "Jan 2022 - Present (3 years)",
        description: "Led development of merchant dashboard serving 500K+ users. Architected microservices backend handling 10M+ API requests/day. Reduced dashboard load time by 60% through optimization. Mentored team of 4 junior developers.",
        tech: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"]
      },
      {
        title: "Full-Stack Developer",
        company: "Paystack (acquired by Stripe)",
        duration: "Jun 2019 - Dec 2021 (2.5 years)",
        description: "Built payment reconciliation system processing $50M+ monthly. Developed customer-facing analytics dashboard. Collaborated with product team on API design.",
        tech: ["React", "Node.js", "MongoDB", "AWS"]
      },
      {
        title: "Software Developer",
        company: "Andela",
        duration: "Mar 2018 - May 2019 (1 year 3 months)",
        description: "Contracted to US-based e-commerce startup. Built inventory management system. Implemented automated testing (95% coverage).",
        tech: ["JavaScript", "React", "Node.js", "PostgreSQL"]
      }
    ],
    projects: [
      {
        title: "PaymentDash",
        description: "Real-time payment analytics dashboard for African merchants. Built with React, Node.js, PostgreSQL. Handles 500K+ users.",
        techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Chart.js"],
        image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=400&h=250&auto=format&fit=crop",
        links: { live: "#", code: "#" }
      },
      {
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce platform with payment integration, inventory management, and admin panel.",
        techStack: ["Next.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=400&h=250&auto=format&fit=crop",
        links: { live: "#", code: "#" }
      }
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        university: "University of Lagos",
        year: "2018"
      }
    ],
    certifications: [
      "AWS Certified Solutions Architect (2021)",
      "MongoDB Certified Developer (2020)"
    ],
    communicationSample: {
      question: "Explain a complex technical concept to a non-technical person",
      answer: "Imagine microservices like a restaurant kitchen. Instead of one chef doing everything (traditional monolith), you have specialists: one chef for appetizers, one for mains, one for desserts. Each can work independently, and if the dessert chef is slow, it doesn't stop the appetizers from going out. That's microservices—independent services that communicate but don't block each other."
    }
  },
  {
    id: '2',
    name: "Chioma Nwosu",
    role: "Frontend Developer",
    roleCategory: 'Engineering',
    skills: ["React", "TypeScript", "Tailwind", "Figma"],
    experience: "5 Years",
    experienceLevel: "Senior",
    location: "Abuja, Nigeria",
    bio: "Building pixel-perfect, accessible user interfaces for global SaaS products.",
    rate: "€3,200/mo",
    salaryRange: "$50K-60K",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?w=400&h=400&fit=crop"
  },
  {
    id: '3',
    name: "Tunde Bakare",
    role: "Backend Engineer",
    roleCategory: 'Engineering',
    skills: ["Python", "Django", "PostgreSQL", "Redis"],
    experience: "6 Years",
    experienceLevel: "Senior",
    location: "Lagos, Nigeria",
    bio: "High-performance API specialist with a focus on data security and microservices.",
    rate: "€3,400/mo",
    salaryRange: "$55K-65K",
    availability: "Interviewing",
    imageUrl: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&h=400&fit=crop"
  },
  {
    id: '4',
    name: "Ngozi Okafor",
    role: "Mobile Developer",
    roleCategory: 'Engineering',
    skills: ["React Native", "JavaScript", "Redux", "Firebase"],
    experience: "4 Years",
    experienceLevel: "Mid-Level",
    location: "Enugu, Nigeria",
    bio: "Passionate about creating fluid mobile experiences for iOS and Android.",
    rate: "€3,000/mo",
    salaryRange: "$50K-60K",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&h=400&fit=crop"
  },
  {
    id: '5',
    name: "Emeka Eze",
    role: "DevOps Engineer",
    roleCategory: 'Engineering',
    skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
    experience: "8 Years",
    experienceLevel: "Lead",
    location: "Lagos, Nigeria",
    bio: "Infrastructure architect specialized in cloud-native scaling and CI/CD automation.",
    rate: "€4,200/mo",
    salaryRange: "$65K-75K",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    id: '6',
    name: "Amara Adeyemi",
    role: "Senior Backend Engineer",
    roleCategory: 'Engineering',
    skills: ["Node.js", "MongoDB", "Express", "AWS"],
    experience: "7 Years",
    experienceLevel: "Senior",
    location: "Ibadan, Nigeria",
    bio: "Expert in distributed systems and scaling NoSQL databases for high-traffic apps.",
    rate: "€3,600/mo",
    salaryRange: "$60K-70K",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?w=400&h=400&fit=crop"
  },
  {
    id: '7',
    name: "Oluwaseun Mensah",
    role: "Full-Stack Developer",
    roleCategory: 'Engineering',
    skills: ["Vue.js", "Laravel", "MySQL", "PHP"],
    experience: "5 Years",
    experienceLevel: "Mid-Level",
    location: "Accra, Ghana",
    bio: "Efficient full-stack generalist with a deep understanding of the LAMP/LEMP stack.",
    rate: "€2,800/mo",
    salaryRange: "$45K-55K",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=400&h=400&fit=crop"
  },
  {
    id: '8',
    name: "Folake Balogun",
    role: "Frontend Developer",
    roleCategory: 'Engineering',
    skills: ["Angular", "TypeScript", "SCSS", "RxJS"],
    experience: "6 Years",
    experienceLevel: "Senior",
    location: "Lagos, Nigeria",
    bio: "Enterprise frontend specialist with a knack for state management and modularity.",
    rate: "€3,100/mo",
    salaryRange: "$50K-60K",
    availability: "Interviewing",
    imageUrl: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop"
  },
  {
    id: '9',
    name: "Chinedu Obi",
    role: "Backend Engineer",
    roleCategory: 'Engineering',
    skills: ["Go", "PostgreSQL", "Redis", "gRPC"],
    experience: "7 Years",
    experienceLevel: "Senior",
    location: "Port Harcourt, Nigeria",
    bio: "Low-latency systems expert building reliable gRPC services and Go applications.",
    rate: "€3,800/mo",
    salaryRange: "$60K-70K",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1515077678510-ce3bdf418862?w=400&h=400&fit=crop"
  },
  {
    id: '10',
    name: "Adaeze Nnamdi",
    role: "Mobile Developer",
    roleCategory: 'Engineering',
    skills: ["Flutter", "Dart", "Provider", "SQLite"],
    experience: "4 Years",
    experienceLevel: "Mid-Level",
    location: "Lagos, Nigeria",
    bio: "Creating beautiful, high-performance cross-platform apps with Flutter.",
    rate: "€3,000/mo",
    salaryRange: "$50K-60K",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop"
  },
  {
    id: '11',
    name: "Kunle Adebayo",
    role: "Full-Stack Developer",
    roleCategory: 'Engineering',
    skills: ["React", "Python", "AWS", "Docker"],
    experience: "6 Years",
    experienceLevel: "Senior",
    location: "Lagos, Nigeria",
    bio: "Versatile developer bridging the gap between data processing and UI.",
    rate: "€3,300/mo",
    salaryRange: "$55K-65K",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
  },
  {
    id: '12',
    name: "Yetunde Olawale",
    role: "Frontend Developer",
    roleCategory: 'Engineering',
    skills: ["React", "Next.js", "Tailwind", "GraphQL"],
    experience: "5 Years",
    experienceLevel: "Senior",
    location: "Kano, Nigeria",
    bio: "Modern web architecture specialist focused on performance and SEO.",
    rate: "€3,400/mo",
    salaryRange: "$55K-65K",
    availability: "Interviewing",
    imageUrl: "https://images.unsplash.com/photo-1554727242-741c14fa561c?w=400&h=400&fit=crop"
  },
  {
    id: '13',
    name: "Biodun Akinyemi",
    role: "Senior Backend Engineer",
    roleCategory: 'Engineering',
    skills: ["Java", "Spring Boot", "Microservices", "Kafka"],
    experience: "9 Years",
    experienceLevel: "Lead",
    location: "Lagos, Nigeria",
    bio: "Enterprise architect specialized in highly concurrent financial systems.",
    rate: "€4,500/mo",
    salaryRange: "$70K-80K",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
  },
  {
    id: '14',
    name: "Ifeanyi Chukwu",
    role: "DevOps Engineer",
    roleCategory: 'Engineering',
    skills: ["GCP", "Terraform", "CI/CD", "Ansible"],
    experience: "7 Years",
    experienceLevel: "Senior",
    location: "Asaba, Nigeria",
    bio: "Cloud infrastructure expert with a focus on cost-optimization and security.",
    rate: "€4,000/mo",
    salaryRange: "$65K-75K",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=400&h=400&fit=crop"
  },
  {
    id: '15',
    name: "Nneka Okeke",
    role: "Full-Stack Developer",
    roleCategory: 'Engineering',
    skills: ["React", "Node.js", "PostgreSQL", "Docker"],
    experience: "5 Years",
    experienceLevel: "Mid-Level",
    location: "Onitsha, Nigeria",
    bio: "Passionate about building scalable web applications and intuitive APIs.",
    rate: "€3,100/mo",
    salaryRange: "$50K-60K",
    availability: "Placed",
    imageUrl: "https://images.unsplash.com/photo-1546825902-140cfa959a72?w=400&h=400&fit=crop"
  },
  {
    id: '16',
    name: "Simi Oladele",
    role: "Senior UI/UX Designer",
    roleCategory: 'Design',
    skills: ["Figma", "Design Systems", "User Research", "Prototyping"],
    experience: "6 Years",
    experienceLevel: "Senior",
    location: "Lagos, Nigeria",
    bio: "Crafting digital experiences that balance user needs with business goals.",
    rate: "€3,200/mo",
    salaryRange: "$45K-60K",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=400&fit=crop"
  },
  {
    id: '17',
    name: "Farid Kassim",
    role: "Motion Designer",
    roleCategory: 'Creative',
    skills: ["After Effects", "Cinema 4D", "Lottie", "Premiere Pro"],
    experience: "5 Years",
    experienceLevel: "Senior",
    location: "Nairobi, Kenya",
    bio: "Bringing brands to life with high-impact motion graphics and 3D animation.",
    rate: "€3,000/mo",
    salaryRange: "$40K-55K",
    availability: "Interviewing",
    imageUrl: "https://images.unsplash.com/photo-1566492031773-4f4e11ea850e?w=400&h=400&fit=crop"
  },
  {
    id: '18',
    name: "Bisi Adenuga",
    role: "Brand Identity Designer",
    roleCategory: 'Creative',
    skills: ["Illustrator", "Photoshop", "Typography", "Branding"],
    experience: "4 Years",
    experienceLevel: "Mid-Level",
    location: "Cape Town, SA",
    bio: "Expert in visual storytelling and building memorable brand identities.",
    rate: "€2,500/mo",
    salaryRange: "$35K-50K",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
  }
];
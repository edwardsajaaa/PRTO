export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type?: string;
  location?: string;
  description?: string;
  points?: string[];
  technologies?: string[];
  image?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    role: 'Teaching Assistant: Algorithms and Programming',
    company: 'Sam Ratulangi University',
    period: 'March 2026 – May 2026',
    type: 'Teaching Assistant',
    location: 'Manado, North Sulawesi · On-site',
    points: [
      'Mentored students in understanding fundamental programming concepts, algorithm design, and logic-based problem-solving.',
      'Conducted hands-on laboratory sessions and graded coding projects to ensure a strong grasp of core programming principles.'
    ],
    technologies: ['Algorithms', 'Logic & Problem Solving', 'Mentoring', 'Code Review']
  },
  {
    role: 'Chairperson of UNITY 2026',
    company: 'UKM UNITY',
    period: 'February 2026 – Present',
    type: 'Leadership',
    location: 'Manado, North Sulawesi · Hybrid',
    points: [
      'Led and coordinated project execution across team members.',
      'Managed planning, timelines, and overall project direction.'
    ],
    technologies: ['Strategic Leadership', 'Project Direction', 'Community Building', 'Timeline Planning']
  },
  {
    role: 'APIE (Academic/Professional Event)',
    company: 'APIE – Understanding Internet (Blended)',
    period: 'February 2026 – Present',
    type: 'Professional Program',
    location: 'Manado, North Sulawesi · Blended',
    points: [
      'Online Participant attendance for understanding internet (Blended).'
    ],
    technologies: ['Internet Architecture', 'Networking Fundamentals', 'Blended Learning']
  },
  {
    role: 'PKM (Program Kreativitas Mahasiswa)',
    company: 'Sam Ratulangi University',
    period: '2025 – Present',
    type: 'Research & Innovation',
    location: 'Manado, North Sulawesi',
    points: [
      'Participant, passed university-level selection (UNSRAT 2025).',
      'Participant, passed university-level selection (UNSRAT 2026).'
    ],
    technologies: ['Research & Development', 'Proposal Development', 'Innovation']
  },
  {
    role: 'Intern – Software Engineer',
    company: 'PT PLN (PERSERO) UPT Manado',
    period: '8 December 2025 – 8 February 2026',
    type: 'Internship',
    location: 'Manado, North Sulawesi · On-site',
    points: [
      'Developed SAKTI (Sistem Arsip & Kontrak Terintegrasi), a comprehensive web based application for vendor and contract management.',
      'Collaborated closely with the Asset Maintenance, Construction Control (Dalkon), and Logistics sub-sections to gather requirements and streamline administrative workflows.'
    ],
    technologies: ['SAKTI', 'Web Application', 'Vendor & Contract Management', 'Enterprise Workflows']
  },
  {
    role: 'Teaching Assistant: Database Technology',
    company: 'Sam Ratulangi University',
    period: 'August 2025 – December 2025',
    type: 'Teaching Assistant',
    location: 'Manado, North Sulawesi · On-site',
    points: [
      'Assisted lecturers in delivering course materials and guided students through practical database implementations (e.g., PostgreSQL).',
      'Evaluated student assignments and provided constructive feedback on database design, normalization, and queries.'
    ],
    technologies: ['PostgreSQL', 'Database Design', 'Normalization', 'SQL Queries']
  },
  {
    role: 'Project Manager of Project Team',
    company: 'UKM UNITY',
    period: 'September 2025 – November 2025',
    type: 'Project Management',
    location: 'Manado, North Sulawesi · Hybrid',
    points: [
      'Managing project timelines, coordinating programming team members, and ensuring technical milestones are met efficiently.'
    ],
    technologies: ['Project Management', 'Unity Engine', 'Team Coordination', 'Game Programming']
  },
  {
    role: 'LIDM (Lomba Inovasi Digital Mahasiswa)',
    company: 'Sam Ratulangi University',
    period: 'August 2025',
    type: 'Competition & Award',
    location: 'Manado, North Sulawesi',
    points: [
      '1st place in the 2025 Sam Ratulangi University student digital innovation competition, digital learning innovation division in education.'
    ],
    technologies: ['Digital Innovation', 'Educational Technology', 'Product Design', 'Competition']
  },
  {
    role: 'Division Coordinator',
    company: 'UKM UNITY',
    period: 'January 2025 – December 2025',
    type: 'Leadership & Coordination',
    location: 'Manado, North Sulawesi · Hybrid',
    points: [
      'Assigning and delegating tasks to team members and monitoring team progress.',
      'Acting as a liaison between the division and the main committee or other divisions.',
      'Creating a work plan or timeline, organizing regular division meetings, and solving internal division issues.'
    ],
    technologies: ['Division Leadership', 'Task Delegation', 'Meeting Facilitation', 'Work Planning']
  },
  {
    role: 'Gemastik Participant',
    company: 'Gemastik',
    period: '2024 – 2025',
    type: 'National Competition',
    location: 'Manado, North Sulawesi',
    points: [
      'User experience design participant (2024).',
      'User experience design participant (2025).',
      'Participants in game application development (2025).'
    ],
    technologies: ['UI/UX Design', 'Game Application Development', 'Competition']
  },
  {
    role: 'Member of Unity Engineer & Projects',
    company: 'UKM UNITY',
    period: 'February 2024 – Present',
    type: 'Technical Member',
    location: 'Manado, North Sulawesi · Hybrid',
    points: [
      'Members of Unity engineer 2024.',
      'Member of Techoverse (Desember 2024).',
      'Member of Grand Project (2024-2025).'
    ],
    technologies: ['Unity Engine', 'C#', 'Techoverse', 'Grand Project', 'Game Mechanics']
  },
  {
    role: 'Member National Ambassador Job Expo',
    company: 'DEALLS JOB EXPO',
    period: 'August 2024 – September 2024',
    type: 'Ambassador',
    location: 'Remote',
    points: [
      "Became a member of the organizing team for Indonesia's largest online career event, promoting collaboration and efficiency.",
      'Created content to attract the attention of audiences interested in joining the event.'
    ],
    technologies: ['Public Relations', 'Community Outreach', 'Content Creation', 'Event Operations']
  }
];

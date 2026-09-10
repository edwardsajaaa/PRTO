export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type?: string;
  location?: string;
  description: string;
  technologies?: string[];
  image?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    role: 'Teaching Assistant for Algorithms and Programming',
    company: 'Universitas Sam Ratulangi',
    period: 'Mar 2026 - Present',
    type: 'Academic',
    location: 'Manado, North Sulawesi · On-site',
    description: 'Mentoring students in understanding fundamental programming concepts, algorithm design, and logic-based problem-solving. Conducting hands-on laboratory sessions and grading coding projects to ensure a strong grasp of core programming principles.',
    technologies: ['Algorithms', 'Logic & Problem Solving', 'Code Review', 'Mentoring']
  },
  {
    role: 'Chairperson of UNITY',
    company: 'UNSRAT IT Community (UNITY)',
    period: 'Feb 2026 - Present',
    type: 'Leadership',
    location: 'Manado, North Sulawesi · Hybrid',
    description: "Elected as Chairman of UNITY (UNSRAT IT Community) for the 2026 period. Leading and coordinating project execution across team members, managing strategic planning, timelines, and overall project direction.",
    technologies: ['Strategic Planning', 'Leadership', 'Project Direction', 'Community Building']
  },
  {
    role: 'Software Engineer Intern',
    company: 'PT PLN (PERSERO) UPT Manado',
    period: 'Dec 2025 - Feb 2026',
    type: 'Internship',
    location: 'Manado, North Sulawesi · On-site',
    description: 'Developed SAKTI (Sistem Arsip & Kontrak Terintegrasi), a comprehensive web-based application for vendor and contract management. Collaborated closely with Asset Maintenance, Construction Control (Dalkon), and Logistics sub-sections to streamline administrative workflows.',
    technologies: ['Web Application', 'System Engineering', 'Vendor Management', 'Enterprise Workflows']
  },
  {
    role: 'Teaching Assistant: Database Technology',
    company: 'Universitas Sam Ratulangi',
    period: 'Aug 2025 - Dec 2025',
    type: 'Academic',
    location: 'Manado, North Sulawesi · On-site',
    description: 'Assisted lecturers in delivering course materials and guided students through practical database implementations (e.g., PostgreSQL). Evaluated student assignments and provided constructive feedback on database design, normalization, and SQL queries.',
    technologies: ['PostgreSQL', 'Database Design', 'Normalization', 'SQL Queries']
  },
  {
    role: 'Project Manager (Game & Project Team)',
    company: 'UNSRAT IT Community (UNITY)',
    period: 'Sep 2025 - Nov 2025',
    type: 'Management',
    location: 'Manado, North Sulawesi · Hybrid',
    description: 'Managed planning, development timelines, and task delegation for project teams. Coordinated programming team members and ensured technical milestones were delivered efficiently.',
    technologies: ['Project Management', 'Unity Engine', 'Game Programming', 'Team Coordination']
  },
  {
    role: '1st Place Winner — LIDM (Digital Innovation Competition)',
    company: 'Universitas Sam Ratulangi',
    period: 'Aug 2025',
    type: 'Award & Achievement',
    location: 'Manado, North Sulawesi',
    description: 'Awarded 1st place in the 2025 Sam Ratulangi University Student Digital Innovation Competition (LIDM), specifically in the Digital Learning Innovation Division in Education.',
    technologies: ['Digital Innovation', 'Educational Tech', 'Product Design', 'Competition']
  },
  {
    role: 'Division Coordinator',
    company: 'UNSRAT IT Community (UNITY)',
    period: 'Jan 2025 - Dec 2025',
    type: 'Leadership',
    location: 'Manado, North Sulawesi · Hybrid',
    description: 'Assigned and delegated tasks to division members, monitored progress, acted as a liaison between divisions, and organized regular division meetings and timelines.',
    technologies: ['Team Leadership', 'Task Delegation', 'Public Speaking', 'Workflow Organization']
  },
  {
    role: 'Member National Ambassador Job Expo',
    company: 'Dealls – Jobs & Mentoring (YC W22)',
    period: 'Aug 2024 - Sep 2024',
    type: 'Ambassador',
    location: 'Indonesia · Remote',
    description: "Organizing team member for Indonesia's largest online career event. Created promotional content and connected university students with career opportunities and industry mentors.",
    technologies: ['Public Relations', 'Community Outreach', 'Content Creation', 'Networking']
  },
  {
    role: 'Member of Unity Engineer',
    company: 'UNSRAT IT Community (UNITY)',
    period: 'Feb 2024 - Dec 2024',
    type: 'Game Dev',
    location: 'Manado, North Sulawesi · Hybrid',
    description: 'Active contributor in Unity game development. Contributed to Grand Project (2024-2025) and Techoverse (Dec 2024). Designed and implemented gameplay mechanics, game UI, and interactive systems in Unity (C#).',
    technologies: ['Unity Engine', 'C#', 'Gameplay Mechanics', 'Techoverse']
  }
];

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
    type: 'Part-time',
    location: 'Manado, North Sulawesi, Indonesia · On-site',
    description: 'Assisting lecturers in teaching algorithm and programming courses, guiding students during practical sessions, helping explain programming concepts, and supporting the evaluation of assignments and coding exercises.',
    technologies: ['Algorithms', 'Programming Logic', 'Code Review', 'Mentoring']
  },
  {
    role: 'Chairperson',
    company: 'UNSRAT IT Community (UNITY)',
    period: 'Feb 2026 - Present',
    type: 'Leadership',
    location: 'Manado, North Sulawesi, Indonesia · Hybrid',
    description: "Elected as the Chairman of UNITY (UNSRAT IT Community) for the 2026 period. Responsible for leading the organization's strategic direction, fostering a collaborative environment for IT enthusiasts, and driving innovative technology programs.",
    technologies: ['Strategic Planning', 'Leadership', 'Time Management', 'Community Building']
  },
  {
    role: 'Engineer Intern',
    company: 'PT PLN (Persero)',
    period: 'Dec 2025 - Feb 2026',
    type: 'Apprenticeship',
    location: 'Wanea, North Sulawesi, Indonesia · On-site',
    description: 'Terlibat dalam rekayasa perangkat lunak dan teknologi informasi di PT PLN (Persero), berkontribusi dalam perancangan, pengembangan sistem, serta pengujian solusi software enterprise.',
    technologies: ['Software Development', 'System Engineering', 'Enterprise IT']
  },
  {
    role: 'Project Manager (Game Programmer)',
    company: 'UNSRAT IT Community (UNITY)',
    period: 'Oct 2025 - Jan 2026',
    type: 'Project Management',
    location: 'Manado, North Sulawesi, Indonesia · Hybrid',
    description: 'Overseeing the planning and development of game projects using Unity Engine. Managing project timelines, coordinating programming team members, and ensuring technical milestones are met efficiently.',
    technologies: ['Project Management', 'Unity Engine', 'Game Programming', 'Team Coordination']
  },
  {
    role: 'Teaching Assistant (Teknologi Basis Data)',
    company: 'Universitas Sam Ratulangi',
    period: 'Oct 2025 - Nov 2025',
    type: 'Part-time',
    location: 'Manado, Sulawesi Utara, Indonesia · On-site',
    description: 'Praktikum Teknologi Basis Data untuk memberikan pemahaman mendalam mengenai implementasi dan manajemen basis data relasional dengan standar industri Oracle Database 21c (DDL, DML, hingga PL/SQL).',
    technologies: ['MySQL', 'Oracle Database 21c', 'PL/SQL', 'Database Management']
  },
  {
    role: 'Game Programming Division Coordinator',
    company: 'UNSRAT IT Community (UNITY)',
    period: 'Jan 2025 - Dec 2025',
    type: 'Coordinator',
    location: 'Manado, North Sulawesi, Indonesia · Hybrid',
    description: 'Leading and organizing the game programming division in developing projects using Unity Engine. Coordinating task distribution, monitoring progress, and ensuring gameplay mechanics meet project goals.',
    technologies: ['Game Programming', 'Unity Engine', 'Public Speaking', 'Time Management']
  },
  {
    role: 'National Ambassador Job Expo',
    company: 'Dealls – Jobs & Mentoring (YC W22)',
    period: 'Aug 2024 - Nov 2024',
    type: 'Internship',
    location: 'Indonesia · Remote',
    description: 'Selected as a National Ambassador for Dealls Job Expo (YC W22), actively connecting university students and talents with professional career opportunities, mentorship sessions, and industry networks.',
    technologies: ['Public Relations', 'Community Outreach', 'Networking', 'Communication']
  },
  {
    role: 'Member of Unity Engineer',
    company: 'UNSRAT IT Community (UNITY)',
    period: 'Feb 2024 - Dec 2024',
    type: 'Technical Member',
    location: 'Manado, North Sulawesi, Indonesia · Hybrid',
    description: 'Focused on game development using Unity Engine. Designed and implemented gameplay mechanics, interactive systems, game UI, and managed player and environment systems in Unity (C#).',
    technologies: ['Unity Engine', 'C#', 'Gameplay Mechanics', 'Game UI']
  }
];

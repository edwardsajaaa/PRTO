export interface EducationItem {
  institution: string;
  program: string;
  period: string;
  detail?: string;
}

export const educationData: EducationItem[] = [
  {
    institution: 'Sam Ratulangi University',
    program: 'Bachelor of Informatics Engineering',
    period: '2024 - Present',
    detail: 'GPA 3.90 / 4.00 · Focus on Software Engineering, Database Systems, Algorithm & Interactive Technology'
  },
  {
    institution: 'SMA Negeri 1 Manado',
    program: 'Mathematics and Natural Sciences (MIPA)',
    period: '2020 - 2023',
    detail: 'Average Score: 92.50 / 100.00 · Participant in Regional-level Physics Olympiad (2022)'
  }
];

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
    period: '2023 - Present',
    detail: 'Faculty of Engineering · Focus on Software Engineering, Database Systems & Interactive Technology'
  },
  {
    institution: 'Senior High School 2 Manado',
    program: 'Natural Sciences (MIPA)',
    period: '2020 - 2023',
    detail: 'High School Diploma · Mathematics and Natural Science Track (SMA Negeri 2 Manado)'
  },
  {
    institution: 'Junior High School 2 Manado',
    program: 'General Education',
    period: '2017 - 2019',
    detail: 'Junior High School Diploma · Basic Sciences & General Studies (SMP Negeri 2 Manado)'
  }
];

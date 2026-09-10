export interface LanguageStat {
  name: string;
  percentage: number;
  color: string;
}

export const skillsData: LanguageStat[] = [
  { name: 'C#', percentage: 36.91, color: '#7B61FF' },
  { name: 'ShaderLab', percentage: 23.72, color: '#3A4B5C' },
  { name: 'CSS', percentage: 14.54, color: '#6B3BA6' },
  { name: 'Dart', percentage: 9.83, color: '#00B4AB' },
  { name: 'JavaScript', percentage: 8.69, color: '#F1E05A' },
  { name: 'Vue', percentage: 6.30, color: '#42B883' }
];

export interface ArsenalItem {
  name: string;
  category: string;
}

export const arsenalData: ArsenalItem[] = [
  // Game & 3D
  { name: 'Unity', category: 'Game Engine' },
  { name: 'C#', category: 'Language' },
  { name: 'C++', category: 'Language' },
  { name: 'ShaderLab', category: 'Graphics' },
  { name: 'Blender', category: '3D Art' },
  // Web & Frontend
  { name: 'HTML5', category: 'Web' },
  { name: 'CSS3', category: 'Web' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'PHP', category: 'Backend' },
  // Mobile
  { name: 'Flutter', category: 'Mobile' },
  { name: 'Dart', category: 'Language' },
  // Databases
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'SQLite', category: 'Database' },
  { name: 'MariaDB', category: 'Database' },
  // Tools & Version Control
  { name: 'Git', category: 'VCS' },
  { name: 'GitHub', category: 'Platform' },
  { name: 'Postman', category: 'API' },
  { name: 'Notion', category: 'Productivity' },
  { name: 'Markdown', category: 'Documentation' },
  { name: 'Terminal', category: 'CLI' },
  // Data Science & IoT
  { name: 'Python', category: 'Language' },
  { name: 'NumPy', category: 'Data Science' },
  { name: 'Pandas', category: 'Data Science' },
  { name: 'scikit-learn', category: 'Machine Learning' },
  { name: 'Arduino', category: 'IoT / Embedded' },
  { name: 'ESP32', category: 'IoT / Embedded' }
];

# Edward Benedict | Personal Portfolio

Personal portfolio website of Edward Benedict, designed to highlight project showcases, professional experience, leadership, and technical skills across Game Development, Software Engineering, and Interactive Digital Media.

## About

Edward Benedict is an Informatics Engineering student at Sam Ratulangi University (UNSRAT) with an academic focus on software engineering, database architectures, and interactive 3D computing.

* Chairperson, UNSRAT IT Community (UNITY) (2026 – Present)
* Software Engineer Intern, PT PLN (Persero) UPT Manado (Dec 2025 – Feb 2026)
* Teaching Assistant for Algorithms and Programming, Sam Ratulangi University (Mar 2026 – Present)
* Teaching Assistant for Database Technology, Sam Ratulangi University (Aug 2025 – Dec 2025)
* 1st Place Winner, Student Digital Innovation Competition (LIDM) 2025

## Key Highlights & Features

1. Interactive 3D Card
   Interactive mouse-tracking profile card with spring physics and ambient illumination built using Framer Motion and modern CSS.

2. Timeline and Experience
   Chronological timeline covering software engineering internships, academic teaching assistantships, competitive programming achievements, and community leadership roles.

3. Academic Background
   Detailed educational trajectory at Sam Ratulangi University (Informatics Engineering, GPA 3.90/4.00) and SMA Negeri 1 Manado (MIPA, Average Score 92.50/100.00).

4. Technical Arsenal and GitHub Statistics
   Language usage metrics derived from GitHub along with categorized tools covering Game Development, Web, Mobile, Databases, and Systems.

5. Direct Communication Channels
   Quick-access professional communication channels including direct email, LinkedIn, WhatsApp, and downloadable Curriculum Vitae (PDF).

## Project Architecture

The codebase follows a modular directory layout separating data models, isolated UI sections, and application routing:

```text
portofolio/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Global layout, fonts, and metadata
│   │   ├── page.tsx              # Root page composed of section modules
│   │   └── globals.css           # Global stylesheets and theme tokens
│   ├── components/
│   │   ├── navigation/
│   │   │   └── Navbar.tsx        # Responsive header with smooth navigation and CV download
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx       # Introduction hero section
│   │   │   ├── ProfileCard3D.tsx     # 3D interactive tilt profile card
│   │   │   ├── ExperienceSection.tsx # Career and academic background timeline
│   │   │   ├── SkillsSection.tsx     # Language metrics and categorized arsenal
│   │   │   ├── ContactSection.tsx    # Communication endpoints and social links
│   │   │   └── index.ts              # Section barrel export
│   │   └── ui/                   # Primitive design system components
│   ├── data/                     # Decoupled data layer
│   │   ├── experience.ts         # Career milestones and organizational records
│   │   ├── education.ts          # Academic background and credentials
│   │   ├── skills.ts              # Language statistics and technology tools
│   │   └── index.ts              # Data barrel export
│   └── lib/                      # Core utility functions
├── content/                      # MDX publications and project documentation
└── public/                       # Static public assets (images, CV document)
```

## Getting Started

### Prerequisites

Node.js (version 18 or higher) and npm installed on your system.

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/edwardsajaaa/PRTO.git
   cd portofolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

### Production Build

```bash
npm run build
npm run start
```

## Contact

* Email: edwardbene07@gmail.com
* LinkedIn: https://www.linkedin.com/in/edwardbenedict
* GitHub: https://github.com/edwardsajaaa
* Instagram: https://instagram.com/edwardsajaaa
* WhatsApp: https://wa.me/6289529175850

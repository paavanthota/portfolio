# 🚀 Thota Paavan Kumar — Developer Portfolio Website

A premium, recruiter-focused developer portfolio website built specifically for **Java Developer**, **Java Full Stack Developer**, and **Software Engineer** opportunities. Engineered from the ground up using **React 18**, **Vite**, **TypeScript**, and **Tailwind CSS**, with the candidate's authentic resume and academic records serving as the single source of truth.

---

## 📌 Executive Summary

- **Candidate**: Thota Paavan Kumar
- **Target Roles**: Java Developer | Java Full Stack Developer | Software Engineer
- **Academic Standing**: B.Tech in Computer Science & Engineering (Specializing in Data Science & Big Data Analytics) @ Koneru Lakshmaiah University (2022–2026) | **8.5 CGPA**
- **Secondary Education**: Sri Chaitanya Junior College (MPC) | **90%**
- **Industry Certifications (4x Multi-Cloud)**:
  1. AWS Certified Cloud Practitioner (CLF-C02)
  2. Oracle Cloud Infrastructure 2025 Certified Foundations Associate (1Z0-1085-25)
  3. Microsoft Certified: Azure Fundamentals (AZ-900)
  4. Robotic Process Automation (RPA) Certified — Automation Anywhere
- **Resume File**: Integrated authentic PDF download (`Resume_Paavan_Kumar.pdf`, ~68 KB)

---

## 🎯 Architecture & Design Highlights

1. **Recruiter-First UX (30–60 Second Evaluation)**:
   - Immediate visibility into core competencies, target roles, academic standing, and certifications on the first viewport.
   - Dedicated **"Recruiter 30s View"** modal providing a structured, concise summary for hiring managers.
   - Single-click action buttons for resume download, email copy, and direct interview requests.
2. **Technical Credibility & Honesty**:
   - Zero fabricated metrics, fake GitHub repositories, or arbitrary skill percentage bars.
   - Every skill, project, and certification is verified against the candidate's resume and codebase.
   - Features implemented in projects are clearly separated from architectural plans.
3. **Interactive Project Inspection Modal**:
   - Deep-dive into problem statements, architectural tradeoffs, database schemas, and performance benchmarks.
4. **Interactive Skill Filtering**:
   - Filter skills by category or live text search across Languages, Backend, Frontend, Databases, Multi-Cloud, Data Libraries, Tools, and Soft Skills.
5. **Verified Asset Integration**:
   - Includes actual resume PDF (`/Resume_Paavan_Kumar.pdf`), profile photo (`/paavan-profile.png`), and official certification credentials.

---

## 🛠️ Technology Stack

- **Framework**: React 18
- **Language**: TypeScript (Strict typing enabled)
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3 with custom dark SaaS palette
- **Icons**: Lucide Icons & Custom SVG Brand Icons
- **Deployment Ready**: Zero runtime backend required; static hosting compatible (Vercel, Netlify, Cloudflare Pages, GitHub Pages)

---

## 📂 Project Structure

```
paavan-portfolio/
├── public/
│   ├── Resume_Paavan_Kumar.pdf     # Authentic resume PDF
│   ├── paavan-profile.png           # Professional profile photo
│   └── certs/
│       ├── oracle-oci-cert.jpg      # Verified Oracle badge
│       ├── oracle-cert.pdf          # Official Oracle PDF
│       └── rpa-cert.pdf             # Official RPA PDF
├── src/
│   ├── components/
│   │   ├── Navbar.tsx               # Responsive nav with recruiter trigger
│   │   ├── Hero.tsx                 # Recruiter-optimized hero section
│   │   ├── RecruiterSnapshot.tsx    # 30-second candidate summary modal
│   │   ├── AboutSection.tsx         # Professional background & philosophy
│   │   ├── SkillsSection.tsx        # Filterable skills matrix
│   │   ├── ProjectsSection.tsx      # Production & academic project cards
│   │   ├── ProjectModal.tsx         # Detailed architectural inspection modal
│   │   ├── EducationSection.tsx     # Academic timeline & coursework
│   │   ├── CertificationsSection.tsx# 4x verified credentials & badge viewer
│   │   ├── ResumeSection.tsx        # Prominent resume download center
│   │   ├── ContactSection.tsx       # Functional interview & contact form
│   │   ├── Footer.tsx               # Navigation & copyright footer
│   │   └── SocialIcons.tsx          # Clean SVG GitHub & LinkedIn icons
│   ├── data/
│   │   └── portfolioData.ts         # Single source of truth data model
│   ├── types/
│   │   └── index.ts                 # TypeScript interfaces
│   ├── App.tsx                      # Root application layout
│   ├── index.css                    # Tailwind & glassmorphic utility styles
│   └── main.tsx                     # React DOM entrypoint
├── index.html                       # Semantic HTML5 with SEO & OG tags
├── package.json                     # Dependencies & scripts
├── tailwind.config.js               # Theme configuration
├── tsconfig.json                    # TypeScript compiler options
└── vite.config.ts                   # Vite build configuration
```

---

## 💻 How to Run Locally

### 1. Prerequisites
Ensure you have **Node.js** (v18+) and **npm** (v9+) installed.

### 2. Navigate to Project Directory
```bash
cd /Users/dineshthota/.gemini/antigravity/scratch/paavan-portfolio
```

### 3. Install Dependencies (if not already installed)
```bash
npm install
```

### 4. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Production Build
```bash
npm run build
```
Generates an optimized static bundle in the `dist/` directory ready for deployment.

### 6. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Option A: Deploy to Vercel (Recommended)
1. Install the Vercel CLI: `npm i -g vercel`
2. Run `vercel` inside the `paavan-portfolio` folder and follow prompts.
3. Or push this repository to GitHub and import it on [vercel.com](https://vercel.com).
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### Option B: Deploy to Netlify
1. Connect your GitHub repository on [netlify.com](https://netlify.com).
2. Set build command to `npm run build` and publish directory to `dist`.

### Option C: Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add `"homepage": "https://paavanthota.github.io/portfolio"` to `package.json`.
3. Add deploy scripts: `"deploy": "gh-pages -d dist"`
4. Run `npm run build && npm run deploy`.

---

## 📋 Resume Content Checklist & Placeholders

All information is directly verified from your attached resume:
- [x] Full Name: Thota Paavan Kumar
- [x] Email: `paavankumarthota@gmail.com`
- [x] Phone: `+91 6303732157`
- [x] LinkedIn: `https://linkedin.com/in/paavanthota`
- [x] GitHub: `https://github.com/paavanthota`
- [x] Degree: B.Tech in CSE (Data Science) @ KLU (8.5 CGPA)
- [x] Intermediate: Sri Chaitanya College (90%)
- [x] Certifications: AWS CLF-C02, Oracle OCI Foundations, Azure AZ-900, RPA Automation Anywhere
- [x] Verified Projects:
  - Library Management System (Java + MySQL)
  - LocalLens Civic Operations System (MERN Stack Capstone)
  - Crop Classification in Hyperspectral Images (Python + Deep Learning)
  - Covid-19 Health Tracer (Python + Scientific Stack)
- [x] Real resume file (`Resume_Paavan_Kumar.pdf`) placed in `public/` for instant download.

### Optional Details You Can Supply / Update
1. If you push the `LocalLens` repository to your public GitHub profile (`github.com/paavanthota/locallens`), you can link the exact repo URL inside `src/data/portfolioData.ts`.
2. Custom domain (e.g. `paavanthota.dev` or `paavankumar.com`) when deploying on Vercel/Netlify.

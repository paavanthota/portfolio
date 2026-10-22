import { Project, SkillCategory, Certification, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: "Thota Paavan Kumar",
  role: "Java Full Stack Developer | Software Engineer",
  tagline: "Building scalable enterprise backends in Java and high-performance full-stack applications with modern cloud architectures.",
  email: "paavankumarthota@gmail.com",
  phone: "+91 6303732157",
  location: "Guntur / Vijayawada, India",
  linkedin: "https://linkedin.com/in/paavanthota",
  github: "https://github.com/paavanthota",
  resumeUrl: "/Resume_Paavan_Kumar.pdf",
  summary: "B.Tech Computer Science graduate specializing in Data Science and Big Data Analytics. Proficient in Python, Java, Machine Learning, Deep Learning, Data Analysis, React, Node.js, MySQL, and AWS, Azure, Oracle Cloud. Seeking Software Developer or Data Scientist role to develop data-driven solutions and scalable applications."
};

export const RECRUITER_HIGHLIGHTS = [
  {
    label: "Target Roles",
    value: "Java Developer, Java Full Stack Developer, Software Engineer",
    badge: "Open for Opportunities"
  },
  {
    label: "Core Stack",
    value: "Java, Data Structures, SQL (PostgreSQL/MySQL), React, Node.js, Python",
    badge: "Verified Skills"
  },
  {
    label: "Academic Standing",
    value: "B.Tech CSE (Data Science) @ KLU • 8.5 CGPA (2022–2026)",
    badge: "Strong Academic Record"
  },
  {
    label: "Cloud Certifications",
    value: "4x Certified (AWS, Oracle OCI, Microsoft Azure, Automation Anywhere)",
    badge: "Multi-Cloud Literate"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used for systems programming, data structures, and enterprise logic",
    icon: "Code2",
    skills: [
      { name: "Java", level: "Primary", details: "Core Java, OOP, Collections Framework, Multithreading, Exception Handling", verifiedInResume: true },
      { name: "Data Structures (Java)", level: "Primary", details: "Arrays, LinkedLists, Stacks, Queues, Trees, HashMaps, Sorting & Searching", verifiedInResume: true },
      { name: "Python", level: "Primary", details: "Data analysis, ML scripting, automation, backend logic", verifiedInResume: true },
      { name: "SQL (PostgreSQL & MySQL)", level: "Proficient", details: "Relational modeling, indexing, joins, aggregate queries, ACID transactions", verifiedInResume: true },
      { name: "JavaScript", level: "Proficient", details: "Modern ES6+, async/await, DOM APIs, event-driven programming", verifiedInResume: true },
      { name: "C / C++", level: "Academic", details: "Pointers, memory management fundamentals, algorithmic logic", verifiedInResume: true },
      { name: "HTML5 / CSS3", level: "Proficient", details: "Semantic markup, modern flexbox/grid layouts, responsive UI styling", verifiedInResume: true },
    ]
  },
  {
    title: "Backend & Systems",
    description: "Server-side architectures, API design, and database integration",
    icon: "Server",
    skills: [
      { name: "Java Backend Architecture", level: "Primary", details: "Object-oriented services, modular design, JDBC/relational connectivity", verifiedInResume: true },
      { name: "Node.js", level: "Proficient", details: "Event loop, asynchronous server development, NPM module ecosystem", verifiedInResume: true },
      { name: "RESTful API Development", level: "Proficient", details: "HTTP methods, JSON serialization, status codes, endpoint versioning", verifiedInResume: true },
      { name: "Database Query Optimization", level: "Proficient", details: "Sub-second query response tuning, foreign key relationships, schema normalization", verifiedInResume: true },
    ]
  },
  {
    title: "Frontend Engineering",
    description: "Component-driven UI, state management, and user interaction",
    icon: "Layout",
    skills: [
      { name: "React", level: "Primary", details: "Functional components, Hooks (useState, useEffect, useMemo), props management", verifiedInResume: true },
      { name: "Component-Driven UI", level: "Proficient", details: "Modular design systems, accessible UI patterns, clean styling", verifiedInResume: true },
      { name: "Responsive Web Design", level: "Proficient", details: "Mobile-first layouts, cross-browser compatibility, flexbox/grid", verifiedInResume: true },
    ]
  },
  {
    title: "Databases & Storage",
    description: "Relational schemas, ACID compliance, and query performance",
    icon: "Database",
    skills: [
      { name: "MySQL", level: "Primary", details: "Schema design, relational constraints (PK/FK), data integrity, 4-table normalized schema", verifiedInResume: true },
      { name: "PostgreSQL", level: "Proficient", details: "Relational database operations, SQL queries, transactional reliability", verifiedInResume: true },
    ]
  },
  {
    title: "Cloud & Multi-Cloud Foundations",
    description: "Industry-standard cloud architectures backed by official certifications",
    icon: "Cloud",
    skills: [
      { name: "AWS Cloud", level: "Certified", details: "AWS Certified Cloud Practitioner (CLF-C02) - Compute, IAM, S3, VPC fundamentals", verifiedInResume: true },
      { name: "Oracle Cloud Infrastructure", level: "Certified", details: "OCI 2025 Certified Foundations Associate - Cloud concepts, security, tenancy", verifiedInResume: true },
      { name: "Microsoft Azure", level: "Certified", details: "Azure Fundamentals (AZ-900) - Cloud services, governance, security & compliance", verifiedInResume: true },
      { name: "RPA Automation Anywhere", level: "Certified", details: "Process automation bots, robotic workflow orchestration", verifiedInResume: true },
    ]
  },
  {
    title: "Data Science & Analytical Libraries",
    description: "Data manipulation, dimensional reduction, and visual tracking",
    icon: "BarChart3",
    skills: [
      { name: "Pandas", level: "Proficient", details: "Dataframe ingestion, 100k+ row cleaning, filtering, aggregation, missing value imputation", verifiedInResume: true },
      { name: "NumPy", level: "Proficient", details: "Vectorized operations, multi-dimensional array math, numerical linear algebra", verifiedInResume: true },
      { name: "Matplotlib", level: "Proficient", details: "Analytical charts, trend visualization, multi-subplot dashboards", verifiedInResume: true },
      { name: "PCA & Normalization", level: "Applied", details: "Principal Component Analysis, 40% dimensionality reduction on 10,000+ hyperspectral images", verifiedInResume: true },
    ]
  },
  {
    title: "Developer Tools & Practices",
    description: "Version control, IDEs, and professional engineering workflows",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: "Proficient", details: "Branching, commits, pull requests, collaborative version tracking", verifiedInResume: true },
      { name: "IntelliJ IDEA", level: "Daily Driver", details: "Java development, debugging, project configuration", verifiedInResume: true },
      { name: "VS Code", level: "Daily Driver", details: "Full-stack development, extensions, terminal integration", verifiedInResume: true },
      { name: "PyCharm", level: "Proficient", details: "Python debugging, virtual environments, ML exploration", verifiedInResume: true },
      { name: "Visual Studio", level: "Familiar", details: "C/C++ compilation, solution management", verifiedInResume: true },
    ]
  },
  {
    title: "Core Soft Skills & Work Ethic",
    description: "Professional qualities essential for software engineering teams",
    icon: "CheckCircle2",
    skills: [
      { name: "Problem Solving", level: "Strength", details: "Structured analytical thinking, algorithmic problem breakdown", verifiedInResume: true },
      { name: "Teamwork & Collaboration", level: "Strength", details: "Cross-functional group projects, code reviews, constructive coordination", verifiedInResume: true },
      { name: "Quick Learning", level: "Strength", details: "Rapidly mastering new frameworks, specifications, and cloud platforms", verifiedInResume: true },
      { name: "Time Management", level: "Strength", details: "Balancing academic excellence (8.5 CGPA) with 4 professional certifications", verifiedInResume: true },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "library-management-system",
    title: "Library Management System",
    subtitle: "Enterprise Java & Relational MySQL Inventory Application",
    timeline: "Jan 2025 – Apr 2025",
    category: "java",
    tags: ["Java", "MySQL", "HTML5", "CSS3", "Relational Database", "Backend Logic"],
    summary: "A robust Java-powered inventory management platform designed to automate book issues, returns, inventory updates, and member records with sub-second retrieval times.",
    problem: "Manual library records and spreadsheet-based tracking lead to data duplication, inconsistent borrowing states, untracked overdue returns, and high search latency across large catalogs.",
    solution: "Engineered a centralized desktop/web-based interface powered by Java application logic and an optimized relational MySQL database schema to handle transactional checkouts, returns, and inventory audits.",
    contributions: [
      "Built a Java and HTML/CSS interface to collect, catalog, and process library inventory efficiently.",
      "Optimized database queries for issue/return tracking, ensuring less than 1-second data retrieval times.",
      "Designed and implemented a normalized relational MySQL schema with 4 primary tables managing 500+ books and user records with referential integrity.",
      "Implemented validation logic for member eligibility, book availability checks, and issue period limits."
    ],
    technologies: ["Java", "MySQL", "JDBC / SQL", "HTML", "CSS"],
    decisions: [
      "Normalized the relational database schema into 4 distinct entities (Users, Books, Issues, Returns) to prevent insertion anomalies and reduce data redundancy.",
      "Indexed primary search keys (ISBN, UserID, TransactionID) to guarantee sub-second (< 1s) query response times during peak checkouts.",
      "Enforced foreign key constraints with ON UPDATE/DELETE rules to maintain referential integrity across active loans."
    ],
    metrics: [
      { label: "Query Retrieval Speed", value: "< 1.0s" },
      { label: "Managed Records", value: "500+ Books & Users" },
      { label: "Schema Structure", value: "4 Normalized Tables" }
    ],
    featured: true,
    githubUrl: "https://github.com/paavanthota",
    sourceNote: "Core Java & Relational Database Project from Resume",
    badge: "Core Java & SQL"
  },
  {
    id: "locallens-civic-management",
    title: "LocalLens: Community Civic Issue Reporting & Management",
    subtitle: "Full-Stack MERN Civic Operations Platform with Interactive GIS",
    timeline: "Academic / TalentSprint Capstone",
    category: "fullstack",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Leaflet Maps", "REST API", "JWT Auth"],
    summary: "A role-based civic grievance resolution system enabling citizens to report community infrastructure issues with GPS coordinates, while administrators verify and assign them to active volunteers.",
    problem: "Citizens lack transparent mechanisms to report civic hazards (damaged roads, garbage overflow, water pipe bursts, streetlight failures), while municipal teams struggle with duplicate complaints and uncoordinated field operations.",
    solution: "Developed an end-to-end full-stack web application featuring role-based dashboards for Citizens, Administrators, and Volunteers, complete with interactive Leaflet/OpenStreetMap GPS pin-dropping and chronological audit trails.",
    contributions: [
      "Built responsive React client interfaces for issue submission, real-time status tracking, and multi-role operations.",
      "Designed Express.js RESTful APIs with JWT authentication, role verification middleware, and structured route controllers.",
      "Integrated Leaflet OpenStreetMap with HTML5 Geolocation API, enabling citizens to drop precise issue markers with latitude/longitude coordinates.",
      "Engineered an administrative verification queue allowing admins to validate legitimate issues, filter spam, and assign tasks to available volunteers.",
      "Constructed a volunteer field operations portal with status toggles ('Assigned' -> 'In Progress' -> 'Resolved') and resolution note tracking."
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Leaflet / OpenStreetMap", "Tailwind CSS", "JWT"],
    decisions: [
      "Implemented role-based access control (RBAC) across three distinct actors (Citizen, Admin, Volunteer) to enforce operational separation of concerns.",
      "Stored GeoJSON coordinates in the database schema to enable accurate spatial queries and map rendering.",
      "Designed an append-only status history log for each report to maintain a tamper-evident audit trail of every status transition."
    ],
    metrics: [
      { label: "User Roles Supported", value: "3 Distinct Actors" },
      { label: "Geo-Pinning Precision", value: "Interactive GPS / Leaflet" },
      { label: "Architecture", value: "Modular Full-Stack MERN" }
    ],
    featured: true,
    githubUrl: "https://github.com/paavanthota",
    sourceNote: "Verified Full-Stack Capstone Project from Workspace",
    badge: "Full-Stack MERN Capstone"
  },
  {
    id: "crop-classification-hyperspectral",
    title: "Crop Classification in Hyperspectral Images",
    subtitle: "Deep Learning & High-Dimensional Remote Sensing Analysis",
    timeline: "Jan 2026 – Apr 2026",
    category: "ml",
    tags: ["Python", "Machine Learning", "Deep Learning", "PCA", "Image Processing", "Dimensionality Reduction"],
    summary: "A deep learning pipeline engineered to classify agricultural crops from high-dimensional hyperspectral imagery, overcoming spectral redundancy through PCA feature extraction.",
    problem: "Hyperspectral sensors capture hundreds of contiguous spectral bands per pixel, resulting in severe data dimensionality (Hughes phenomenon), slow training times, and memory bottlenecks in crop prediction.",
    solution: "Engineered a pre-processing and deep learning classification pipeline utilizing statistical normalization and Principal Component Analysis (PCA) to condense spectral bands while maximizing variance.",
    contributions: [
      "Preprocessed raw hyperspectral satellite/aerial datasets using standardization, min-max normalization, and spatial-spectral patch extraction.",
      "Engineered and trained deep learning models to generate high-resolution crop prediction maps, achieving an overall classification accuracy of 92%.",
      "Optimized 10,000+ hyperspectral images using PCA, successfully compressing data dimensionality by 40% while preserving essential spectral signatures."
    ],
    technologies: ["Python", "Deep Learning", "Machine Learning", "PCA", "Scikit-Learn", "NumPy", "Matplotlib"],
    decisions: [
      "Applied Principal Component Analysis (PCA) across spectral dimensions prior to neural network training, eliminating multicollinear bands and speeding up convergence.",
      "Utilized stratified cross-validation on ground-truth crop classes to prevent spatial autocorrelation bias.",
      "Rendered 2D color-coded prediction classification maps to visually contrast predicted crop distributions against ground-truth labels."
    ],
    metrics: [
      { label: "Classification Accuracy", value: "92%" },
      { label: "Dimensionality Reduction", value: "40% via PCA" },
      { label: "Dataset Scale", value: "10,000+ Images" }
    ],
    featured: true,
    githubUrl: "https://github.com/paavanthota",
    sourceNote: "Machine Learning & Remote Sensing Project from Resume",
    badge: "Deep Learning & Remote Sensing"
  },
  {
    id: "covid19-tracer",
    title: "Covid-19 Global Health Tracer & Analytics",
    subtitle: "Public Health Data Processing & Real-Time Visualization Dashboard",
    timeline: "Sep 2023 – Nov 2023",
    category: "ml",
    tags: ["Python", "Data Processing", "Pandas", "NumPy", "Matplotlib", "Trend Prediction"],
    summary: "A high-performance Python data analytics suite that cleans and aggregates multi-country epidemiological datasets to model infection trajectories and visualize real-time statistical curves.",
    problem: "Disparate public health reporting formats across international health agencies contained missing records, anomalous spikes, and non-standard timestamps, complicating comparative trajectory tracking.",
    solution: "Developed an automated data processing and analytical tracking workflow using Pandas and NumPy, outputting clean analytical trends through a lag-free multi-chart visualization interface.",
    contributions: [
      "Processed and cleaned raw public health datasets containing over 100,000+ data points spanning 50+ countries using Pandas and NumPy.",
      "Cleaned, filtered, and analyzed data using Python scientific libraries for accurate rate-of-spread prediction and tracking.",
      "Developed a zero-lag frontend displaying real-time trends via 3 distinct Matplotlib analytical charts (Daily Trajectories, Cumulative Spread, Recovery Ratios)."
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Set Processing"],
    decisions: [
      "Leveraged vectorized Pandas operations instead of iterative loops, reducing dataset ingestion and cleaning latency significantly.",
      "Implemented automated outlier detection and rolling 7-day average smoothing to mitigate irregular weekend reporting dips.",
      "Segmented visualizations into 3 distinct focused charts for clear interpretability by non-technical health observers."
    ],
    metrics: [
      { label: "Processed Data Points", value: "100,000+" },
      { label: "Geographic Coverage", value: "50+ Countries" },
      { label: "Analytical Visualizations", value: "3 Real-Time Charts" }
    ],
    featured: false,
    githubUrl: "https://github.com/paavanthota",
    sourceNote: "Data Science & Data Processing Project from Resume",
    badge: "Big Data & Python Analytics"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "aws-clf-c02",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    code: "CLF-C02",
    issueDate: "September 2025",
    verificationNote: "Official Amazon Web Services Cloud Credential validating fundamental knowledge of cloud concepts, security, compliance, compute, storage, and architectural principles.",
    skills: ["Cloud Architecture", "AWS EC2 / S3 / IAM / VPC", "Cloud Security", "Cost Management"]
  },
  {
    id: "oracle-oci-foundations",
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle Corporation",
    code: "1Z0-1085-25",
    issueDate: "August 2026",
    badgeUrl: "/certs/oracle-oci-cert.jpg",
    pdfUrl: "/certs/oracle-cert.pdf",
    verificationNote: "Official Oracle University certification validating foundational proficiency in OCI architecture, core infrastructure components, autonomous databases, security, and governance.",
    skills: ["Oracle Cloud Infrastructure (OCI)", "Cloud Networking", "Autonomous Database", "Security & IAM"]
  },
  {
    id: "rpa-automation-anywhere",
    title: "Robotic Process Automation (RPA) Certified",
    issuer: "Automation Anywhere",
    code: "AA-RPA-2026",
    issueDate: "July 2026",
    pdfUrl: "/certs/rpa-cert.pdf",
    verificationNote: "Certified proficiency in enterprise automation workflows, bot creation, task automation, and intelligent process engineering using the Automation Anywhere platform.",
    skills: ["Workflow Automation", "Bot Architecture", "Process Engineering", "Logic Orchestration"]
  },
  {
    id: "azure-az-900",
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    code: "AZ-900",
    issueDate: "June 2026",
    verificationNote: "Official Microsoft certification validating foundational cloud concepts, Azure core services, architecture solutions, management tools, and security/compliance controls.",
    skills: ["Azure Cloud Concepts", "Azure Virtual Machines & Storage", "Azure Active Directory / Entra", "Security & Governance"]
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    institution: "Koneru Lakshmaiah University (K L University)",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering (Specializing in Data Science & Big Data Analytics)",
    location: "Guntur, Andhra Pradesh",
    period: "Aug 2022 – May 2026",
    score: "8.5",
    scoreType: "CGPA",
    highlights: [
      "Rigorous coursework in Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management Systems (SQL), Operating Systems, and Computer Networks.",
      "Specialized study tracks in Machine Learning, Deep Learning, Big Data Analytics, and Cloud Computing platforms.",
      "Maintained consistent academic distinction (8.5 CGPA) while earning 4 industry-recognized cloud and technology certifications."
    ]
  },
  {
    institution: "Sri Chaitanya Junior College",
    degree: "Intermediate / Pre-University Education",
    field: "Mathematics, Physics, Chemistry (MPC)",
    location: "Vijayawada, Andhra Pradesh",
    period: "June 2019 – May 2022",
    score: "90%",
    scoreType: "Percentage",
    highlights: [
      "Solid mathematical foundation in Calculus, Linear Algebra, Coordinate Geometry, and Probability.",
      "Graduated with 90% distinction across competitive analytical examinations.",
      "Developed early foundational interest in logical programming and computational problem solving."
    ]
  }
];

# Personal Portfolio Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build an interactive personal portfolio website for Shelly Deng with 3D tab navigation, parallax effects, skill cloud filtering, and magnetic contact buttons.

**Architecture:** Next.js 14+ with App Router, shadcn/ui components, Tailwind CSS for styling. Single-page app with three main tabs (My Journey, My Work, Connect) using 3D card flip transitions.

**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion (for animations), Vercel (deployment)

---

### Task 1: Initialize Next.js project with TypeScript and Tailwind

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.js`, `tailwind.config.ts`
- Create: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`

**Step 1: Create Next.js project**

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*"
```

**Step 2: Install additional dependencies**

```bash
npm install framer-motion lucide-react
npm install -D @types/node
```

**Step 3: Initialize shadcn/ui**

```bash
npx shadcn-ui@latest init
```

**Step 4: Commit**

```bash
git add .
git commit -m "feat: initialize Next.js project with TypeScript and shadcn/ui"
```

---

### Task 2: Set up project structure and styling foundation

**Files:**
- Create: `app/components/Navigation.tsx`
- Create: `lib/utils.ts` (shadcn utilities)
- Create: `components/ui/` (shadcn components)
- Modify: `app/globals.css`

**Step 1: Create color theme in globals.css**

```css
@theme {
  --background: #0f0f1a;
  --foreground: #ffffff;
  --accent-purple: #8b5cf6;
  --accent-pink: #ec4899;
  --accent-cyan: #06b6d4;
  --glass-bg: rgba(255, 255, 255, 0.03);
  --glass-border: rgba(255, 255, 255, 0.08);
}
```

**Step 2: Create Navigation component with tab buttons**

```tsx
// app/components/Navigation.tsx
export function Navigation() {
  const tabs = ['My Journey', 'My Work', 'Connect'];
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      {tabs.map(tab => <button key={tab}>{tab}</button>)}
    </nav>
  );
}
```

**Step 3: Add shadcn Button component**

```bash
npx shadcn-ui@latest add button card
```

**Step 4: Commit**

```bash
git add app/components/ app/globals.css components/ui/
git commit -m "feat: add navigation and styling foundation"
```

---

### Task 3: Implement 3D tab flip transition system

**Files:**
- Create: `app/components/TabContainer.tsx`
- Modify: `app/page.tsx`

**Step 1: Create TabContainer with Framer Motion**

```tsx
// app/components/TabContainer.tsx
import { motion, AnimatePresence } from 'framer-motion';

export function TabContainer({ activeTab, children }: { activeTab: string, children: React.ReactNode }) {
  const variants = {
    enter: { rotateY: 0, opacity: 1 },
    exit: { rotateY: 90, opacity: 0.5 },
    center: { rotateY: 180, opacity: 0 }
  };

  return (
    <div className="perspective-container">
      <AnimatePresence mode="wait">
        <motion.div key={activeTab} variants={variants}>
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
```

**Step 2: Update main page to use TabContainer**

```tsx
// app/page.tsx
'use client';
import { useState } from 'react';
import { TabContainer } from '@/components/TabContainer';

export default function Home() {
  const [activeTab, setActiveTab] = useState('journey');
  return (
    <div>
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <TabContainer activeTab={activeTab}>
        {activeTab === 'journey' && <JourneyTab />}
        {activeTab === 'work' && <WorkTab />}
        {activeTab === 'connect' && <ConnectTab />}
      </TabContainer>
    </div>
  );
}
```

**Step 3: Commit**

```bash
git add app/components/TabContainer.tsx app/page.tsx
git commit -m "feat: implement 3D tab flip transition"
```

---

### Task 4: Build Hero section with parallax effect

**Files:**
- Create: `app/components/JourneyTab.tsx`
- Create: `app/components/Hero.tsx`

**Step 1: Create Hero component with mouse parallax**

```tsx
// app/components/Hero.tsx
'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) / 40;
      const y = (window.innerHeight / 2 - e.clientY) / 40;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero">
      <motion.div
        animate={{ x: mousePos.x, y: mousePos.y }}
        className="avatar-ring"
      >
        <div className="avatar">SD</div>
      </motion.div>
      <h1>Shelly Deng</h1>
      <TypingTaglines />
      <QuickStats />
    </section>
  );
}
```

**Step 2: Create TypingTaglines component**

```tsx
// app/components/TypingTaglines.tsx
'use client';
import { useState, useEffect } from 'react';

const taglines = [
  'Fullstack Engineer @ TikTok',
  'React/Next.js Specialist',
  'Frontend & Backend',
  'Building for millions'
];

export function TypingTaglines() {
  const [displayedText, setDisplayedText] = useState('');
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Type/delete animation logic
    const typeSpeed = isDeleting ? 30 : 80;
    const timeout = setTimeout(() => {
      const currentTagline = taglines[taglineIndex];
      // ... typing logic
    }, typeSpeed);
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, taglineIndex]);

  return <span className="typing-text">{displayedText}<span className="cursor">|</span></span>;
}
```

**Step 3: Commit**

```bash
git add app/components/Hero.tsx app/components/TypingTaglines.tsx
git commit -m "feat: add hero with parallax and typing animation"
```

---

### Task 5: Build About section

**Files:**
- Modify: `app/components/JourneyTab.tsx`
- Create: `app/components/About.tsx`

**Step 1: Create About card component**

```tsx
// app/components/About.tsx
export function About() {
  return (
    <div className="about-card">
      <p>I'm a Fullstack Engineer with over 5 years of experience building scalable web applications. Currently working at TikTok User Growth team, I specialize in creating high-performance, user-centric interfaces using React, Vue, and modern frontend frameworks.</p>
      <p>My passion lies in transforming complex requirements into elegant, intuitive experiences. I believe in writing clean, maintainable code and staying up-to-date with latest web technologies.</p>
      <p className="fun-fact">☕ Fun fact: I'm obsessed with brewing perfect pour-over coffee.</p>
    </div>
  );
}
```

**Step 2: Add About to JourneyTab**

```tsx
// app/components/JourneyTab.tsx
import { About } from './About';

export function JourneyTab() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
```

**Step 3: Commit**

```bash
git add app/components/About.tsx app/components/JourneyTab.tsx
git commit -m "feat: add about section with fun fact"
```

---

### Task 6: Build Experience timeline with metrics

**Files:**
- Create: `app/components/ExperienceTimeline.tsx`
- Modify: `app/components/JourneyTab.tsx`

**Step 1: Create Timeline component**

```tsx
// app/components/ExperienceTimeline.tsx
'use client';

const experiences = [
  {
    role: 'Frontend Development Engineer',
    company: 'TikTok User Growth Team',
    period: 'Mar 2025 – Present',
    achievements: [
      'Increased user engagement by <strong>25%</strong> with interactive features',
      'Improved page load time by <strong>40%</strong> through performance optimization',
      'Led cross-team collaboration for A/B testing framework'
    ],
    skills: ['React', 'TypeScript', 'Performance']
  },
  {
    role: 'Frontend Engineer',
    company: 'ByteDance',
    period: '2023 – 2025',
    achievements: [
      'Built enterprise-level web applications serving <strong>10M+ users</strong>',
      'Developed reusable component library reducing dev time by <strong>30%</strong>',
      'Implemented state management patterns for complex data flows'
    ],
    skills: ['Vue.js', 'Element Plus', 'Vite']
  },
  {
    role: 'Frontend Engineer Intern',
    company: '360 Digital Technology',
    period: '2022',
    achievements: [
      'Contributed to 3 production features in first 3 months',
      'Implemented responsive designs improving mobile UX'
    ],
    skills: ['JavaScript', 'Git']
  }
];

export function ExperienceTimeline() {
  return (
    <div className="timeline">
      {experiences.map((exp, index) => (
        <div key={index} className="timeline-item" data-skills={exp.skills.join(',')}>
          <div className="timeline-card">
            {/* Timeline content */}
          </div>
        </div>
      ))}
    </div>
  );
}
```

**Step 2: Add Timeline to JourneyTab**

```tsx
// app/components/JourneyTab.tsx
import { ExperienceTimeline } from './ExperienceTimeline';

export function JourneyTab() {
  return (
    <>
      <Hero />
      <About />
      <ExperienceTimeline />
    </>
  );
}
```

**Step 3: Commit**

```bash
git add app/components/ExperienceTimeline.tsx app/components/JourneyTab.tsx
git commit -m "feat: add experience timeline with metrics"
```

---

### Task 7: Build Skills Cloud component

**Files:**
- Create: `app/components/WorkTab.tsx`
- Create: `app/components/SkillsCloud.tsx`

**Step 1: Create SkillsCloud with floating animation**

```tsx
// app/components/SkillsCloud.tsx
'use client';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', category: 'frontend', size: 'large' },
  { name: 'Vue.js', category: 'frontend', size: 'large' },
  { name: 'Next.js', category: 'frontend', size: 'large' },
  { name: 'TypeScript', category: 'frontend', size: 'medium' },
  { name: 'JavaScript', category: 'frontend', size: 'medium' },
  { name: 'Tailwind CSS', category: 'frontend', size: 'medium' },
  { name: 'Node.js', category: 'backend', size: 'large' },
  { name: 'Express', category: 'backend', size: 'medium' },
  { name: 'Python', category: 'backend', size: 'medium' },
  { name: 'PostgreSQL', category: 'backend', size: 'small' },
  { name: 'MySQL', category: 'backend', size: 'small' },
  { name: 'Git', category: 'tools', size: 'medium' },
  { name: 'Vite', category: 'tools', size: 'medium' },
  { name: 'Webpack', category: 'tools', size: 'small' },
  { name: 'Docker', category: 'tools', size: 'small' },
  { name: 'Jest', category: 'tools', size: 'small' },
  { name: 'shadcn/ui', category: 'frontend', size: 'small' },
  { name: 'Element Plus', category: 'frontend', size: 'small' }
];

export function SkillsCloud({ onSkillClick }: { onSkillClick: (skill: string) => void }) {
  return (
    <div className="skills-cloud">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: skill.size === 'large' ? 1.2 : skill.size === 'medium' ? 1 : 0.85 }}
          transition={{
            duration: 0.5 + Math.random(),
            delay: index * 0.05
          }}
          className={`skill-item ${skill.category}`}
          onClick={() => onSkillClick(skill.name)}
          animate={{
            x: Math.sin(Date.now() / 5000 + index) * 20,
            y: Math.cos(Date.now() / 5000 + index) * 15
          }}
          transition={{ duration: 15 + Math.random() * 15, repeat: Infinity, repeatType: 'reverse' }}
        >
          {skill.name}
        </motion.div>
      ))}
    </div>
  );
}
```

**Step 2: Create WorkTab component**

```tsx
// app/components/WorkTab.tsx
'use client';
import { useState } from 'react';
import { SkillsCloud } from './SkillsCloud';
import { ProjectsGrid } from './ProjectsGrid';

export function WorkTab() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <div className="work-tab">
      <h2>Skills & Projects</h2>
      <p>Click a skill to see where I've used it</p>
      <SkillsCloud onSkillClick={setSelectedSkill} />
      <ExperiencePanel skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
      <h3>Featured Projects</h3>
      <ProjectsGrid />
    </div>
  );
}
```

**Step 3: Commit**

```bash
git add app/components/SkillsCloud.tsx app/components/WorkTab.tsx
git commit -m "feat: add skills cloud with floating animation"
```

---

### Task 8: Build Experience Panel for skill filtering

**Files:**
- Create: `app/components/ExperiencePanel.tsx`

**Step 1: Create slide-up panel component**

```tsx
// app/components/ExperiencePanel.tsx
'use client';
import { motion, AnimatePresence } from 'framer-motion';

const experienceData = {
  'React': [
    { company: 'TikTok', role: 'Frontend Dev', period: 'Mar 2025 – Present' },
    { company: 'ByteDance', role: 'Frontend Engineer', period: '2023 – 2025' }
  ],
  'Vue.js': [
    { company: 'ByteDance', role: 'Frontend Engineer', period: '2023 – 2025' }
  ],
  'TypeScript': [
    { company: 'TikTok', role: 'Frontend Dev', period: 'Mar 2025 – Present' }
  ],
  'Node.js': [
    { company: 'ByteDance', role: 'Backend Support', period: '2023 – 2025' }
  ],
  'Performance': [
    { company: 'TikTok', role: 'Optimization Lead', period: 'Mar 2025 – Present' }
  ]
};

export function ExperiencePanel({ skill, onClose }: { skill: string | null, onClose: () => void }) {
  const data = experienceData[skill as keyof typeof experienceData];

  return (
    <AnimatePresence>
      {skill && data && (
        <motion.div
          initial={{ y: 400 }}
          animate={{ y: 0 }}
          exit={{ y: 400 }}
          className="experience-panel"
        >
          <div className="panel-header">
            <span>{skill} Experience</span>
            <button onClick={onClose}>×</button>
          </div>
          <div className="experience-grid">
            {data.map((exp, index) => (
              <div key={index} className="mini-card">
                <h4>{exp.company} • {exp.role}</h4>
                <p>{exp.period}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

**Step 2: Commit**

```bash
git add app/components/ExperiencePanel.tsx
git commit -m "feat: add experience panel for skill filtering"
```

---

### Task 9: Build Projects Grid component

**Files:**
- Create: `app/components/ProjectsGrid.tsx`
- Modify: `app/components/WorkTab.tsx`

**Step 1: Create project cards**

```tsx
// app/components/ProjectsGrid.tsx
'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'AI Interview Assistant',
    description: 'Intelligent interview preparation platform with real-time feedback and personalized question generation powered by AI.',
    tech: ['React', 'Next.js', 'OpenAI API']
  },
  {
    name: 'SaaS Platform',
    description: 'Full-featured SaaS application with subscription management, analytics dashboard, and team collaboration tools.',
    tech: ['Vue.js', 'Node.js', 'PostgreSQL']
  },
  {
    name: 'Performance Dashboard',
    description: 'Real-time monitoring dashboard for application performance with customizable alerts and beautiful visualizations.',
    tech: ['React', 'TypeScript', 'D3.js']
  }
];

export function ProjectsGrid() {
  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <motion.div
          key={project.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="project-card"
          whileHover={{ y: -8 }}
        >
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="project-tech">
            {project.tech.map(t => <span key={t}>{t}</span>)}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
```

**Step 2: Add ProjectsGrid to WorkTab**

```tsx
// app/components/WorkTab.tsx
import { ProjectsGrid } from './ProjectsGrid';

export function WorkTab() {
  return (
    <div className="work-tab">
      <h2>Skills & Projects</h2>
      <p>Click a skill to see where I've used it</p>
      <SkillsCloud onSkillClick={setSelectedSkill} />
      <ExperiencePanel skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
      <h3>Featured Projects</h3>
      <ProjectsGrid />
    </div>
  );
}
```

**Step 3: Commit**

```bash
git add app/components/ProjectsGrid.tsx app/components/WorkTab.tsx
git commit -m "feat: add projects grid with hover effects"
```

---

### Task 10: Build Connect tab with magnetic buttons

**Files:**
- Create: `app/components/ConnectTab.tsx`
- Create: `app/components/MagneticButton.tsx`
- Create: `app/components/AvailabilityCard.tsx`

**Step 1: Create MagneticButton component**

```tsx
// app/components/MagneticButton.tsx
'use client';
import { useRef, useEffect } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  color: string;
  onClick?: () => void;
}

export function MagneticButton({ children, icon, color, onClick }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    buttonRef.current.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
  };

  const handleMouseLeave = () => {
    buttonRef.current!.style.transform = 'translate(0, 0)';
  };

  const handleClick = (e: React.MouseEvent) => {
    onClick?.();
    createParticleBurst(e.clientX, e.clientY, color);
  };

  return (
    <div
      ref={buttonRef}
      className="magnetic-btn"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ borderColor: color }}
    >
      {icon}
      <span>{children}</span>
    </div>
  );
}
```

**Step 2: Create AvailabilityCard component**

```tsx
// app/components/AvailabilityCard.tsx
'use client';
import { useState } from 'react';

export function AvailabilityCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="availability-card" onClick={() => setIsOpen(!isOpen)}>
      <div className="status">🟢 Open to Opportunities</div>
      <div className="sub">Click to see availability details</div>
      {isOpen && (
        <div className="details">
          <div className="detail-item">
            <span>Preferred Contact</span>
            <strong>Email</strong>
          </div>
          <div className="detail-item">
            <span>Response Time</span>
            <strong>Usually within 24h</strong>
          </div>
          <div className="detail-item">
            <span>Timezone</span>
            <strong>CST (China Standard Time)</strong>
          </div>
        </div>
      )}
    </div>
  );
}
```

**Step 3: Create ConnectTab component**

```tsx
// app/components/ConnectTab.tsx
'use client';
import { MagneticButton } from './MagneticButton';
import { AvailabilityCard } from './AvailabilityCard';
import { Mail, Linkedin, Github } from 'lucide-react';

export function ConnectTab() {
  return (
    <div className="connect-tab">
      <AvailabilityCard />
      <div className="magnetic-buttons">
        <MagneticButton color="#8b5cf6" icon={<Mail />}>Email</MagneticButton>
        <MagneticButton color="#ec4899" icon={<Linkedin />}>LinkedIn</MagneticButton>
        <MagneticButton color="#06b6d4" icon={<Github />}>GitHub</MagneticButton>
      </div>
    </div>
  );
}
```

**Step 4: Commit**

```bash
git add app/components/ConnectTab.tsx app/components/MagneticButton.tsx app/components/AvailabilityCard.tsx
git commit -m "feat: add connect tab with magnetic buttons"
```

---

### Task 11: Add particle burst effect

**Files:**
- Create: `app/components/ParticleBurst.tsx`
- Modify: `app/components/MagneticButton.tsx`

**Step 1: Create particle burst component**

```tsx
// app/components/ParticleBurst.tsx
'use client';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ParticleBurst({ x, y, color, onComplete }: { x: number, y: number, color: string, onComplete: () => void }) {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    angle: (i / 12) * Math.PI * 2,
    distance: 50 + Math.random() * 50
  }));

  useEffect(() => {
    const timer = setTimeout(onComplete, 600);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className="particles-container"
        style={{ left: x, top: y }}
      >
        {particles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, scale: 1 }}
            animate={{
              x: Math.cos(p.angle) * p.distance,
              y: Math.sin(p.angle) * p.distance,
              scale: 0
            }}
            transition={{ duration: 0.6 }}
            className="particle"
            style={{ background: color }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
```

**Step 2: Update MagneticButton to use ParticleBurst**

```tsx
// app/components/MagneticButton.tsx
import { ParticleBurst } from './ParticleBurst';

export function MagneticButton({ children, icon, color, onClick }: MagneticButtonProps) {
  const [burst, setBurst] = useState<{ x: number, y: number } | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    onClick?.();
    setBurst({ x: e.clientX, y: e.clientY });
    setTimeout(() => setBurst(null), 600);
  };

  return (
    <>
      <div /* ...magnetic logic */ />
      {burst && (
        <ParticleBurst
          x={burst.x}
          y={burst.y}
          color={color}
          onComplete={() => {}}
        />
      )}
    </>
  );
}
```

**Step 3: Commit**

```bash
git add app/components/ParticleBurst.tsx app/components/MagneticButton.tsx
git commit -m "feat: add particle burst effect on button click"
```

---

### Task 12: Add skill-to-timeline highlighting

**Files:**
- Modify: `app/components/ExperienceTimeline.tsx`
- Modify: `app/components/WorkTab.tsx`

**Step 1: Update ExperienceTimeline to accept highlighted skill**

```tsx
// app/components/ExperienceTimeline.tsx
export function ExperienceTimeline({ highlightedSkill }: { highlightedSkill: string | null }) {
  return (
    <div className="timeline">
      {experiences.map((exp, index) => {
        const isHighlighted = highlightedSkill ? exp.skills.includes(highlightedSkill) : true;
        const isDimmed = highlightedSkill && !isHighlighted;

        return (
          <div
            key={index}
            className={`timeline-item ${isHighlighted ? 'highlighted' : ''} ${isDimmed ? 'dimmed' : ''}`}
            data-skills={exp.skills.join(',')}
          >
            {/* ... card content */}
          </div>
        );
      })}
    </div>
  );
}
```

**Step 2: Pass highlighted skill to timeline from WorkTab**

```tsx
// app/components/WorkTab.tsx
export function WorkTab() {
  return (
    <>
      <SkillsCloud onSkillClick={setSelectedSkill} />
      <ExperiencePanel skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
      {/* Highlight timeline when skill selected */}
      {selectedSkill && <ExperienceTimeline highlightedSkill={selectedSkill} />}
      <h3>Featured Projects</h3>
      <ProjectsGrid />
    </>
  );
}
```

**Step 3: Commit**

```bash
git add app/components/ExperienceTimeline.tsx app/components/WorkTab.tsx
git commit -m "feat: add skill-to-timeline highlighting"
```

---

### Task 13: Add responsive design

**Files:**
- Modify: `app/globals.css`
- Modify: All component files

**Step 1: Add responsive breakpoints**

```css
/* app/globals.css */
@media (max-width: 768px) {
  .tab-nav { width: calc(100% - 2rem); justify-content: center; }
  .hero h1 { font-size: 2.5rem; }
  .timeline-header { flex-direction: column; }
  .skills-cloud { height: 300px; }
  .magnetic-buttons { flex-direction: column; align-items: center; }
}
```

**Step 2: Add mobile navigation menu**

```tsx
// app/components/Navigation.tsx
'use client';
import { useState } from 'react';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden md:flex">...</nav>

      {/* Mobile menu button */}
      <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        ☰
      </button>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {tabs.map(tab => <button key={tab}>{tab}</button>)}
        </div>
      )}
    </>
  );
}
```

**Step 3: Commit**

```bash
git add app/components/Navigation.tsx app/globals.css
git commit -m "feat: add responsive design and mobile navigation"
```

---

### Task 14: Add metadata and SEO

**Files:**
- Modify: `app/layout.tsx`
- Create: `app/metadata.ts`

**Step 1: Create metadata file**

```tsx
// app/metadata.ts
export const metadata = {
  title: 'Shelly Deng - Fullstack Engineer',
  description: 'Fullstack Engineer specializing in React, Vue.js, Next.js. Building high-performance web applications at TikTok User Growth team.',
  keywords: ['Fullstack Engineer', 'React', 'Vue.js', 'Next.js', 'TypeScript', 'TikTok'],
  authors: [{ name: 'Shelly Deng' }],
  openGraph: {
    title: 'Shelly Deng - Fullstack Engineer',
    description: 'Fullstack Engineer specializing in React, Vue.js, Next.js',
    type: 'website',
  },
};

export default metadata;
```

**Step 2: Update layout**

```tsx
// app/layout.tsx
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
```

**Step 3: Commit**

```bash
git add app/layout.tsx app/metadata.ts
git commit -m "feat: add metadata and SEO"
```

---

### Task 15: Add animations and polish

**Files:**
- Modify: `app/globals.css`
- Create: `app/components/AnimatedBackground.tsx`

**Step 1: Create animated background component**

```tsx
// app/components/AnimatedBackground.tsx
'use client';
import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="orb orb-1"
        animate={{
          x: [0, 30, -20, 20, -10, 0],
          y: [0, -30, 20, 30, -20, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb orb-2"
        animate={{
          x: [0, -30, 20, -20, 30, 0],
          y: [0, 30, -20, 30, -20, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
```

**Step 2: Add smooth scroll and cursor**

```css
/* app/globals.css */
html { scroll-behavior: smooth; }

/* Custom scrollbar */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: var(--background); }
::-webkit-scrollbar-thumb { background: var(--accent-purple); border-radius: 4px; }

/* Focus styles */
*:focus-visible { outline: 2px solid var(--accent-cyan); outline-offset: 2px; }
```

**Step 3: Commit**

```bash
git add app/components/AnimatedBackground.tsx app/globals.css
git commit -m "feat: add animated background and polish"
```

---

### Task 16: Test locally

**Files:**
- Test: All components

**Step 1: Start development server**

```bash
npm run dev
```

**Step 2: Test all interactions**

Manual testing checklist:
- [ ] Tab navigation with 3D flip works
- [ ] Parallax effect on avatar responds to mouse
- [ ] Typing animation cycles through taglines
- [ ] Timeline cards hover and lift
- [ ] Clicking skills in timeline highlights them
- [ ] Skills cloud floating animation works
- [ ] Clicking skill shows experience panel
- [ ] Project cards hover effects
- [ ] Magnetic buttons attract to cursor
- [ ] Particle burst effect on button click
- [ ] Availability card expands on click
- [ ] Responsive on mobile (768px breakpoint)

**Step 3: Fix any bugs found**

```bash
# Test and fix as needed
npm run dev
```

**Step 4: Commit**

```bash
git commit -m "test: local testing complete"
```

---

### Task 17: Deploy to Vercel

**Files:**
- Create: `vercel.json`
- Test: Deployment

**Step 1: Initialize git repository**

```bash
git init
git add .
git commit -m "Initial commit"
```

**Step 2: Create Vercel config**

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

**Step 3: Deploy using Vercel CLI**

```bash
npm install -g vercel
vercel
```

**Step 4: Verify deployment**

```bash
# Open the deployed URL and test all interactions
```

**Step 5: Commit**

```bash
git add vercel.json
git commit -m "deploy: deploy to Vercel"
```

---

### Task 18: Configure custom domain (optional)

**Files:**
- Test: Domain configuration

**Step 1: Add domain in Vercel dashboard**

Navigate to Vercel project settings → Domains → Add your custom domain

**Step 2: Update DNS records**

Follow Vercel instructions for your domain provider

**Step 3: Verify SSL and accessibility**

```bash
# Test domain loads, SSL is valid, all links work
```

**Step 4: Commit**

```bash
git commit -m "config: set up custom domain"
```

---

## Summary

This plan builds a complete interactive portfolio website with:

1. **3D tab flip navigation** - Three main sections with smooth transitions
2. **My Journey** - Parallax hero, typing taglines, about with fun fact, timeline with metrics
3. **My Work** - Floating skills cloud, skill filtering to experience, project cards
4. **Connect** - Magnetic buttons, particle effects, expandable availability card
5. **Responsive design** - Mobile-first approach with breakpoints
6. **Deployment** - Vercel for free hosting

**Total estimated tasks:** 18
**Total estimated time:** 2-3 hours for implementation, 30 min for deployment

---

**IMPORTANT: Use superpowers:subagent-driven-development or start a new session with superpowers:executing-plans to implement this plan.**

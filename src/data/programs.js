import productivityEnhancer from '../assets/courses/productivity-enhancer.png';
import superLeaders from '../assets/courses/super-leaders.png';
import confidentOrator from '../assets/courses/confident-orator.png';
import smartExecutor from '../assets/courses/smart-executor.png';

export const MINI_COURSES = [{
  type: "course",
  name: 'Productivity Enhancer',
  link: 'productivity-enhancer',
  description: "This course exposes students to various time management techniques and methods that are a proven success. The goal is to equip them with the skill set and tools they need to reflect on their current time management habits, understand the areas that need improving, and apply everything they learnt to enable them to better manage their time.",
  image: productivityEnhancer,
  catchPhrase: "Encouraging productive habits",
  ageGroup: '8 - 14 years',
  benefits: [
    "Manage interruptions, overcome distractions and boost productivity",
    "Lower anxiety and stress",
    "Achieve a healthy balance between academic and social life",
    "Higher degree of focus, commitment, and concentration"
  ],
  curriculum: [
      "Concept of time management and its benefits",
      "Self reflection on current time management",
      "Prioritization and tools for it",
      "Avoiding procrastination and hacks for it",
      "Pomodoro technique",
      "Time blocking",
    ]
}, {
  type: "course",
  name: 'Confident Orator',
  link: 'confident-orator',
  description: "Our most popular course, this one focuses on imparting practical tips for effective public speaking and confidence building. The goal is to have significant enhancement of the students’ skills in these two areas, with plenty of engaging activities and individualized feedback on one recorded speech per student",
  image: confidentOrator,
  catchPhrase: "Creating confident orators",
  ageGroup: '8 - 14 years',
  benefits: [
    "Improve interpersonal and formal communication",
    "Speak confidently in varied academic and extra-curricular settings",
    "Deliver effective classroom presentations",
    "Feeling accomplished and overpower nervousness",
  ],
  curriculum: [
    "Public speaking",
    "Concept of public speaking and its benefits",
    "Tips on public speaking",
    "How to practice public speaking",
    "Feedback on one speech video recording per student"
  ]
}, {
  type: "course",
  name: 'S.M.A.R.T. Executor',
  link: 'smart-executor',
  description: "This 2 session course focuses on teaching children the power and importance of goal setting. Students are taught specific techniques for identifying and converting their goals into S.M.A.R.T. goals. We then work through breaking them into smaller actionable items and teach them meaningful practical techniques that facilitate accomplishment.",
  image: smartExecutor,
  catchPhrase: "Discovering untapped potential",
  ageGroup: "8 - 14 years",
  benefits: [
    "S.M.A.R.T. goal setting becomes a long lasting positive habit",
    "Boost productivity, decision making and long-term vision",
    "Acknowledge irrational beliefs about failures",
    "Effectively maneuver life’s challenges"
  ],
  curriculum: [
    "Self-reflection on current goal-setting habits",
    "What are S.M.A.R.T. goals",
    "How to create S.M.A.R.T. goals",
    "How to achieve S.M.A.R.T. goals",
    "Retrospective analysis of own goals"
  ]
}];

export const LONG_TERM_PROGRAMS = [{
  type: "program",
  name: 'Super Leaders Program',
  link: 'super-leaders',
  image: superLeaders,
  catchPhrase: 'Creating leaders of tomorrow',
  ctaText: 'Request a free demo',
  ageGroup: '8 - 14 years',
  description: "Super leaders program offered by Life ki ABC is one of its kind life skills program for teens and pre-teens that builds leadership and ownership skills in students. Through our engaging curriculum, we aim to ignite young minds to learn about what leadership means and we teach them specific techniques that they can implement to become a leader in their own lives. We believe in inculcating long lasting positive habits and to promote the holistic development of students by equipping them with the skills and tools they need for success - empowering them to achieve their full potential in life.",
  benefits: [
    "Higher degree of focus, commitment, and concentration",
    "Enhance self-awareness and emotional intelligence",
    "Build a positive mindset and develop long-lasting positive habits",
    "Cope with stress in a more mindful manner",
    "Improve interpersonal and formal communication",
    "Speak confidently in varied academic and extra-curricular settings",
    "Build self-confidence and overpower nervousness",
    "Enhance leadership skills, critical thinking and collaboration",
    "Boost productivity, decision making and long-term vision",
    "Acknowledge irrational beliefs about failures",
    "Improve conflict resolution, negotiation and listening skills"
  ],
  curriculum: [{
    title: "Time Management",
    list: [
      "Concept of time management and its benefits",
      "Self reflection on current time management",
      "Prioritization and tools for it",
      "Goal setting",
      "Avoiding procrastination and hacks for it",
      "Pomodoro technique",
      "Time blocking"
    ]
  }, {
  title: "Public speaking",
  list: [
    "Concept of public speaking and its benefits",
    "Tips on public speaking",
    "How to practice public speaking",
    "Feedback on one speech video recording per student"
    ]
  }, {
  title: "Confidence building",
  list: [
    "Building positivity",
    "How to combat self-doubt",
    "Power of visualization"
    ]
  }, {
  title: "Communication skills",
  list: [
    "Active listening",
    "Conveying ideas clearly",
    "Non-verbal communication",
    "Teamwork and collaboration",
    "Respecting others’ opinions",
    "Negotiation"
    ]
  }, {
  title: "Stress management",
  list: [
    "How to manage nervousness",
    "Failing forward",
    "Techniques for stress reduction"
  ]
  }]
}];
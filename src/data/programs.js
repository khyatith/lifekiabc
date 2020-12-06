import timeManagement from '../assets/courses/time-management.png';
import communicationSkills from '../assets/communicationSkills.png';
import leadershipSkills from '../assets/leadershipSkills.png';
import publicSpeaking from '../assets/publicSpeaking.jpg';
import stressManagement from '../assets/stressManagement.jpg';
import superAchievers from '../assets/superAchievers.jpeg';

export const INDIVIDUAL_COURSES = [{
  name: 'Time Management',
  link: 'time-management',
  description: "This one of a kind time management course will help students to think about time in a new way. It will teach them how to prioritize time in their day equally between their studies and hobbies. It will also take them over some easy to implement techniques for avoiding procrastination like pomodoro technique. Our interactive curriculum will help students reflect on how they can improve upon their time management skills and what is most important to them in their day.",
  image: timeManagement,
}, {
  name: 'Communication Skills',
  link: 'communication-skills',
  image: communicationSkills
}, {
  name: 'Public Speaking & Confidence Building',
  link: 'public-speaking',
  image: publicSpeaking
}, {
  name: 'Stress Management',
  link: 'stress-management',
  image: stressManagement
}, {
  name: 'Super Leaders Program',
  link: 'super-leaders',
  image: leadershipSkills,
  catchPhrase: 'Creating leaders of tomorrow',
  ctaText: 'Request a free demo',
  ageGroup: '10 - 18 years',
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
}, {
  name: 'Super Achievers Program',
  link: 'super-achievers',
  image: superAchievers
}];
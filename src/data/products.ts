// Product copy: the bento tiles, the Autofill section and the learning products.
import type { IconName } from '../components/icons';
import { links } from './site';

export interface Shot {
  src: string;
  width: number;
  height: number;
  alt: string;
}

const shots = {
  autofillFilled: { src: '/assets/shots/autofill-filled.webp', width: 1600, height: 1093 },
  sleuthbox: { src: '/assets/shots/sleuthbox-case.webp', width: 1600, height: 1093 },
  numberDuel: { src: '/assets/shots/numberduel-home.webp', width: 1600, height: 1093 },
  academy: { src: '/assets/shots/academy-lesson.webp', width: 1280, height: 631 },
};

export const heroShot = {
  url: 'elearning.example.ac.ke/mod/quiz/attempt.php',
  before: { src: '/assets/shots/autofill-widget.webp', width: 1600, height: 1093, alt: 'The LaceFi Autofill panel open beside a Moodle quiz, ready to fill 8 questions' },
  after: { src: shots.autofillFilled.src, width: 1600, height: 1093, alt: '' },
};

export interface Tile {
  id: string;
  variant: 'autofill' | 'sleuth' | 'academy' | 'duel';
  icon: IconName;
  title: string;
  text: string;
  linkText?: string;
  shot?: Shot;
}

export const tiles: Tile[] = [
  {
    id: 'autofill', variant: 'autofill', icon: 'checklist', title: 'Autofill',
    text: 'A Chrome extension that fills in Moodle and Google Forms quizzes.',
    linkText: 'How it works',
    shot: { ...shots.autofillFilled, alt: 'Moodle questions filled by Autofill, each with its answer shown above the question' },
  },
  {
    id: 'sleuthbox', variant: 'sleuth', icon: 'magnifier', title: 'Sleuthbox',
    text: 'Solve crime cases by writing SQL.',
    shot: { ...shots.sleuthbox, alt: 'A Sleuthbox case with its briefing, the SQL console and the evidence tables' },
  },
  { id: 'academy', variant: 'academy', icon: 'brackets', title: 'Academy', text: '91 lessons on building websites, HTML to JavaScript.' },
  { id: 'numberduel', variant: 'duel', icon: 'duel', title: 'Number Duel', text: 'A two-player guessing game.' },
];

export const autofill = {
  title: 'Autofill answers the quiz you have open.',
  lede: 'Autofill reads every question on the page, gets an answer from Claude, Gemini or GPT, and fills it in. Each answer appears above its question so you can see it, ask why, and change it before you submit.',
  shot: {
    url: heroShot.url,
    ...shots.autofillFilled,
    alt: 'Filled Moodle questions: Paris selected for question 1 and 2, 7 and 11 ticked for question 2',
  },
  questionTypes: [
    { icon: 'radio', label: 'Multiple choice' },
    { icon: 'checkbox', label: 'Select all that apply' },
    { icon: 'toggle', label: 'True or false' },
    { icon: 'text', label: 'Short answer' },
    { icon: 'hash', label: 'Numerical' },
    { icon: 'swap', label: 'Matching' },
    { icon: 'updown', label: 'Drop-down gaps' },
    { icon: 'pen', label: 'Essays' },
    { icon: 'code', label: 'CodeRunner code' },
    { icon: 'sigma', label: 'STACK maths' },
    { icon: 'form', label: 'Google Forms' },
  ] satisfies { icon: IconName; label: string }[],
  features: [
    { icon: 'code', title: 'Code goes into the editor', text: "CodeRunner answers are typed into Moodle's code editor, starting from the code the question already gives you." },
    { icon: 'book', title: 'Answers from your notes', text: "Upload your course notes in the Notes tab. Questions that depend on your lecturer's material are answered from them." },
    { icon: 'wallet', title: 'Pay per question', text: 'One credit per question in Basic mode, two in Pro for harder questions. Buy credits with Paystack or PayPal.' },
    { icon: 'flag', title: "Tell us when it's wrong", text: 'Press Bad on a wrong answer and we receive the question to fix it.' },
  ] satisfies { icon: IconName; title: string; text: string }[],
};

export interface Feature {
  id: string;
  title: string;
  icon: IconName;
  body: string;
  facts: string[];
  cta: { href: string; label: string; icon: IconName };
  frame: Shot & { url: string; night?: boolean };
  flip?: boolean;
}

export const learning: Feature[] = [
  {
    id: 'academy', title: 'LaceFi Academy', icon: 'brackets',
    body: 'A beginner course in building websites, from your first HTML tag to JavaScript. Each lesson explains one idea with a real example, then you answer a short quiz and build it yourself. Assignments are checked automatically as you go.',
    facts: ['91 lessons: HTML, CSS and JavaScript', 'A quiz and an assignment in every lesson', 'Ends with a portfolio site, graded by a teacher'],
    cta: { href: links.academy, label: 'Open Academy', icon: 'cap' },
    frame: { url: 'edu.lacefi.co.ke/webdev/courses/what-is-css', ...shots.academy, alt: 'The What is CSS? lesson in LaceFi Academy, with an explanation and a code example' },
  },
  {
    id: 'sleuthbox', title: 'Sleuthbox', icon: 'magnifier', flip: true,
    body: 'There has been a crime and the database knows who did it. Read the briefing, then query the evidence tables one SELECT at a time until the trail points to a name. More than 22 original cases, from a blackout at an observatory to who broke the living-room TV.',
    facts: ['Real SQL in the browser', 'Easy, medium and hard cases', 'Walkthrough for first-timers'],
    cta: { href: links.sleuthbox, label: 'Play Sleuthbox', icon: 'database' },
    frame: { url: 'lacefi-sleuthbox.vercel.app', night: true, ...shots.sleuthbox, alt: 'The Blackout at the Observatory case: briefing, SQL console and table list' },
  },
  {
    id: 'numberduel', title: 'Number Duel', icon: 'duel',
    body: "Two players, one room. Each of you locks in a secret number from 0 to 100, then you take turns guessing the other's. Every miss gets a higher or lower hint and costs 10 of your 100 points, so the fewer guesses you need, the more you keep.",
    facts: ['Play a friend with a room ID', 'No sign-up', 'A hint after every guess'],
    cta: { href: links.numberDuel, label: 'Start a duel', icon: 'play' },
    frame: { url: 'numberduel.lacefi.co.ke', night: true, ...shots.numberDuel, alt: 'The Number Duel start screen asking for your name and a room ID' },
  },
];

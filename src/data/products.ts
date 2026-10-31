// Product copy: the bento tiles and the learning products.
import type { IconName } from '../components/icons';
import { links } from './site';

export interface Shot {
  src: string;
  width: number;
  height: number;
  alt: string;
}

const shots = {
  sleuthbox: { src: '/assets/shots/sleuthbox-case.webp', width: 1600, height: 1093 },
  numberDuel: { src: '/assets/shots/numberduel-home.webp', width: 1600, height: 1093 },
  academy: { src: '/assets/shots/academy-lesson.webp', width: 1280, height: 631 },
};

export const heroShot = {
  url: 'edu.lacefi.co.ke/webdev/courses/what-is-css',
  ...shots.academy,
  alt: 'The What is CSS? lesson in LaceFi Academy, with an explanation and a code example',
};

export interface Tile {
  id: string;
  variant: 'sleuth' | 'academy' | 'duel';
  icon: IconName;
  title: string;
  text: string;
  linkText?: string;
  shot?: Shot;
}

export const tiles: Tile[] = [
  {
    id: 'sleuthbox', variant: 'sleuth', icon: 'magnifier', title: 'Sleuthbox',
    text: 'Solve crime cases by writing SQL.',
    shot: { ...shots.sleuthbox, alt: 'A Sleuthbox case with its briefing, the SQL console and the evidence tables' },
  },
  { id: 'academy', variant: 'academy', icon: 'brackets', title: 'Academy', text: '91 lessons on building websites, HTML to JavaScript.' },
  { id: 'numberduel', variant: 'duel', icon: 'duel', title: 'Number Duel', text: 'A two-player guessing game.' },
];

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

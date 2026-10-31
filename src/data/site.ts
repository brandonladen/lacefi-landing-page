// Links and page-level text used in more than one place.

export const links = {
  academy: 'https://edu.lacefi.co.ke/',
  sleuthbox: 'https://lacefi-sleuthbox.vercel.app/',
  numberDuel: 'https://numberduel.lacefi.co.ke/',
  email: 'support@lacefi.co.ke',
} as const;

export const site = {
  url: 'https://lacefi-landing-page.onrender.com/',
  title: "LaceFi: software you'll actually open",
  ogDescription: 'LaceFi Academy, Sleuthbox and Number Duel.',
  ogImage: 'https://lacefi-landing-page.onrender.com/assets/shots/academy-lesson.webp',
  googleVerification: '0caBqUpGTrCRnl18_9s6ijyTphaZDAA6n0xJyyWCiLU',
} as const;

export const nav = [
  { href: '#academy', label: 'Academy' },
  { href: '#sleuthbox', label: 'Sleuthbox' },
  { href: '#numberduel', label: 'Number Duel' },
] as const;

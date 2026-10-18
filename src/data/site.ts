// Links and page-level text used in more than one place.

export const links = {
  chromeStore: 'https://chromewebstore.google.com/detail/kmjifemkagjedmdmondefpdblpppdihj',
  guide: 'https://guide.lacefi.co.ke/',
  whatsapp: 'https://wa.me/254770329788',
  releaseNotes: 'https://autofill.lacefi.co.ke/release-notes.html',
  privacy: 'https://autofill.lacefi.co.ke/privacy.html',
  academy: 'https://edu.lacefi.co.ke/',
  sleuthbox: 'https://lacefi-sleuthbox.vercel.app/',
  numberDuel: 'https://numberduel.lacefi.co.ke/',
  email: 'support@lacefi.co.ke',
} as const;

export const site = {
  url: 'https://lacefi.co.ke/',
  title: "LaceFi: software you'll actually open",
  ogDescription: 'Autofill for Moodle and Google Forms, LaceFi Academy, Sleuthbox and Number Duel.',
  ogImage: 'https://lacefi.co.ke/assets/shots/autofill-widget.webp',
  googleVerification: '0caBqUpGTrCRnl18_9s6ijyTphaZDAA6n0xJyyWCiLU',
  storeRating: '5.0',
} as const;

export const nav = [
  { href: '#autofill', label: 'Autofill' },
  { href: '#academy', label: 'Academy' },
  { href: '#sleuthbox', label: 'Sleuthbox' },
  { href: '#numberduel', label: 'Number Duel' },
  { href: '#schools', label: 'Schools' },
  { href: '#contact', label: 'Contact' },
] as const;

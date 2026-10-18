// One line-icon set for the whole site (24x24, drawn with stroke unless `fill` is set).
// Render with <Icon name="..." />.

interface IconDef {
  body: string;
  /** Solid shape filled with currentColor instead of a stroked line. */
  fill?: boolean;
}

export const icons = {
  chrome: { body: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M21.17 8H12"/><path d="M3.95 6.06 8.54 14"/><path d="M10.88 21.94 15.46 14"/>' },
  arrow: { body: '<path d="m9 6 6 6-6 6"/>' },
  menu: { body: '<path d="M4 7h16M4 12h16M4 17h16"/>' },
  star: { body: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>', fill: true },
  users: { body: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' },
  cap: { body: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>' },
  globe: { body: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/>' },
  checklist: { body: '<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>' },
  pin: { body: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>' },
  magnifier: { body: '<circle cx="11" cy="11" r="6"/><path d="m20 20-4.5-4.5"/>' },
  brackets: { body: '<path d="m8 9-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12"/>' },
  duel: { body: '<path d="M5 19 19 5M14 5h5v5M5 5l5 5M14 14l5 5M19 14v5h-5"/>' },
  layers: { body: '<path d="m12 2 10 5-10 5L2 7Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>' },
  radio: { body: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/>' },
  checkbox: { body: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/>' },
  toggle: { body: '<rect width="20" height="12" x="2" y="6" rx="6"/><circle cx="8" cy="12" r="2"/>' },
  text: { body: '<path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/>' },
  hash: { body: '<path d="M4 9h16"/><path d="M4 15h16"/><path d="M10 3 8 21"/><path d="M16 3l-2 18"/>' },
  swap: { body: '<path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/>' },
  updown: { body: '<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>' },
  pen: { body: '<path d="M12 20h9"/><path d="M16.4 3.6a2.1 2.1 0 0 1 3 3L7.4 18.6a2 2 0 0 1-.9.5l-2.9.9.9-2.9a2 2 0 0 1 .5-.9Z"/>' },
  code: { body: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>' },
  sigma: { body: '<path d="M18 7V4H6l6 8-6 8h12v-3"/>' },
  form: { body: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>' },
  book: { body: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2Z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7Z"/>' },
  wallet: { body: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>' },
  flag: { body: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1Z"/><path d="M4 22v-7"/>' },
  check: { body: '<path d="M20 6 9 17l-5-5"/>' },
  done: { body: '<path d="m6 12 4 4 8-8"/>' },
  database: { body: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>' },
  play: { body: '<polygon points="6 3 20 12 6 21 6 3"/>' },
  mail: { body: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>' },
  whatsapp: {
    body: '<path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.3.5-.4.5c-.2.2-.3.3-.1.6.2.3.8 1.4 1.8 2.2 1.2 1.1 2.2 1.4 2.5 1.6.3.1.5.1.7-.1l.9-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.3.1.2.1.7-.1 1.3Z"/>',
    fill: true,
  },
} satisfies Record<string, IconDef>;

export type IconName = keyof typeof icons;

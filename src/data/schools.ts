// Schools with students registered on Autofill, grouped by country.
// To add a school, add its name to its country (or add the country).
// Every count on the site ("46 schools in 22 countries") is computed from this list.

export interface Country {
  name: string;
  schools: string[];
  /** Highlighted as the home country. */
  home?: boolean;
}

const list: Country[] = [
  {
    name: 'Kenya',
    home: true,
    schools: [
      'Maseno University',
      'University of Eastern Africa, Baraton',
      'Technical University of Mombasa',
      'Karatina University',
      'Egerton University',
      'Mount Kenya University',
      'Open University of Kenya',
      'Masinde Muliro University of Science and Technology',
      'Dedan Kimathi University of Technology',
      'Kibabii University',
      "Kiriri Women's University of Science and Technology",
      'The Nairobi National Polytechnic',
    ],
  },
  {
    name: 'India',
    schools: [
      'Saveetha Engineering College',
      'IIIT Nagpur',
      'Kalinga Institute of Industrial Technology',
      'Coimbatore Institute of Technology',
      'Anudip Foundation',
    ],
  },
  {
    name: 'Indonesia',
    schools: ['Gunadarma University', 'Telkom Schools', 'BPK Penabur Jakarta', 'SMP Sains Miftahul Huda'],
  },
  { name: 'Australia', schools: ['Monash University', 'NCA Learner Hub'] },
  { name: 'Italy', schools: ['University of Genoa', "Ca' Foscari University of Venice"] },
  { name: 'Portugal', schools: ['Instituto Superior Técnico, University of Lisbon', 'Polytechnic University of Setúbal'] },
  { name: 'Spain', schools: ['International University of La Rioja', 'Educastur Aulas Virtuales'] },
  { name: 'Russia', schools: ['Voronezh State University', 'Kemerovo State Medical University'] },
  { name: 'Israel', schools: ['Bar-Ilan University', 'Medical Doctor International Academy'] },
  { name: 'Kazakhstan', schools: ['Nazarbayev University'] },
  { name: 'Austria', schools: ['Johannes Kepler University Linz'] },
  { name: 'Germany', schools: ['Stuttgart University of Applied Sciences (HFT)'] },
  { name: 'Hungary', schools: ['John von Neumann University'] },
  { name: 'France', schools: ['Université de Reims Champagne-Ardenne'] },
  { name: 'Lithuania', schools: ['SMK College of Applied Sciences'] },
  { name: 'Iraq', schools: ['American University of Iraq, Sulaimani'] },
  { name: 'Palestine', schools: ['Islamic University of Gaza'] },
  { name: 'Taiwan', schools: ['The Primacy Collegiate Academy'] },
  { name: 'Brazil', schools: ['Instituto Federal do Rio Grande do Sul'] },
  { name: 'Argentina', schools: ['Universidad Nacional de San Luis'] },
  { name: 'Ecuador', schools: ['Universidad Iberoamericana del Ecuador'] },
  { name: 'Canada', schools: ['Futures Group'] },
];

/** Countries with the most schools first; ties keep the order above. */
export const countries: Country[] = [...list].sort((a, b) => b.schools.length - a.schools.length);

export const schoolCount = list.reduce((n, c) => n + c.schools.length, 0);
export const countryCount = list.length;
export const reach = `${schoolCount} schools in ${countryCount} countries`;

/** The schools shown on the strip before it starts rotating through the rest. */
const wallNames = [
  'Maseno University',
  'Monash University',
  'University of Eastern Africa, Baraton',
  'IIIT Nagpur',
  'Technical University of Mombasa',
  'Nazarbayev University',
  'Egerton University',
  'University of Genoa',
];

export const wall = wallNames.map((name) => {
  const country = list.find((c) => c.schools.includes(name));
  if (!country) throw new Error(`School wall: "${name}" is not in the schools list`);
  return { name, country: country.name };
});

const seen = new Set<string>();
for (const c of list) {
  if (!c.schools.length) throw new Error(`Schools: ${c.name} has no schools`);
  for (const s of c.schools) {
    if (seen.has(s)) throw new Error(`Schools: "${s}" is listed twice`);
    seen.add(s);
  }
}

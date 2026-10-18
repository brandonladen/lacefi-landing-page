// Usage figures shown under the hero. Update them together with `asOf`.
import { countryCount, schoolCount } from './schools';
import type { IconName } from '../components/icons';

export const asOf = '17 October 2026';

export interface Stat {
  icon: IconName;
  label: string;
  value: string;
}

export const stats: Stat[] = [
  { icon: 'users', label: 'Students registered', value: (887).toLocaleString('en-US') },
  { icon: 'cap', label: 'Schools', value: String(schoolCount) },
  { icon: 'globe', label: 'Countries', value: String(countryCount) },
  { icon: 'checklist', label: 'Questions answered in 2026', value: '204,000+' },
];

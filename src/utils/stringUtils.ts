import { capitalize } from 'lodash';

export const toCapital = (s: string, symbol?: string) => {
  const splitted = s.split('-');
  if (splitted.length === 1) {
    return capitalize(s);
  }
  return splitted.map((ss) => capitalize(ss)).join(symbol || '-');
};

export const formatNumberToPokedex = (num: number): string => {
  const formatted = new Intl.NumberFormat('en-US', {
    minimumIntegerDigits: 4,
    useGrouping: false,
  }).format(num);

  return `#${formatted}`;
};

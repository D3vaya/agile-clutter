export interface AvatarProps {
  color?: ColorsExadecimals;
  size?: 'sm' | 'md' | 'xl';
}
export interface CardProps {
  color?: Colors;
  className?: string;
  //variant?: 'voting' | 'voted' | 'voting-user' | 'default';
  children?: React.ReactElement | React.ReactElement[];
}

export enum ColorsExadecimals {
  sky = '#38bdf8',
  red = '#f87171',
  gray = '#9ca3af',
  zinc = '#a1a1aa',
  cyan = '#22d3ee',
  blue = '#60a5fa',
  lime = '#a3e635',
  pink = '#f472b6',
  teal = '#2dd4bf',
  slate = '#94a3b8',
  stone = '#a8a29e',
  amber = '#fbbf24',
  green = '#4ade80',
  white = '#ffffff',
  purple = '#c084fc',
  orange = '#fb923c',
  yellow = '#facc15',
  indigo = '#818cf8',
  violet = '#a78bfa',
  fuchsia = '#e879f9',
  emerald = '#34d399',
}

export enum Colors {
  sky = 'sky',
  red = 'red',
  gray = 'gray',
  zinc = 'zinc',
  cyan = 'cyan',
  blue = 'blue',
  lime = 'lime',
  pink = 'pink',
  teal = 'teal',
  slate = 'slate',
  stone = 'stone',
  amber = 'amber',
  green = 'green',
  white = 'white',
  purple = 'purple',
  orange = 'orange',
  yellow = 'yellow',
  indigo = 'indigo',
  violet = 'violet',
  fuchsia = 'fuchsia',
  emerald = 'emerald',
}

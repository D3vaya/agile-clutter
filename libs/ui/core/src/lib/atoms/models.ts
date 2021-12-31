import { Colors } from '../commons';

export interface AvatarProps {
  color?: Colors;
  size?: 'sm' | 'md' | 'xl';
}

export interface CardProps {
  className?: string;
  size?: 'sm' | 'md';
  color?: Colors | string;
  children?: React.ReactElement | React.ReactElement[];
}

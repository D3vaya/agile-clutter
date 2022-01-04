import { TextProps } from '../models';

const Text: React.FC<TextProps> = ({
  children,
  size = 'base',
  className = '',
}) => {
  const tailwind = `text-${size}`;
  return <p className={`${tailwind} ${className}`}>{children}</p>;
};

export default Text;

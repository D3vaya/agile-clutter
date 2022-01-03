import { Colors } from '../../commons';
import { BoxProps } from '../models';

const Box: React.FC<BoxProps> = ({
  children,
  shadow = 'md',
  className = '',
  color = Colors.white,
}) => {
  const shadowSelected = shadow === 'none' ? '' : 'shadow-' + shadow;
  const tailwind = `min-w-min  ${shadowSelected}  rounded-md p-3 bg-${color} bg-${color}-400`;
  return <div className={`${tailwind} ${className}`}>{children}</div>;
};

export default Box;

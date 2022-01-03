import { CardProps } from '../models';
import { Colors } from '../../commons';

export const Card: React.FC<CardProps> = ({
  children,
  size = 'md',
  className = '',
  color = Colors.white,
}) => {
  const mapSize = {
    sm: 'text-base w-14 h-16',
    md: 'text-xl w-16 h-20',
    xl: 'text-2xl w-20 h-24',
  };

  const tailwind = `m-1 truncate bg-${color} bg-${color}-400 shadow-md rounded-md font-bold text-2xl border-2 border-black p-3 flex justify-center items-center`;
  const sizeSelected = mapSize[size];

  return (
    <div className="inline-block">
      <div className={`${tailwind} ${sizeSelected} ${className}`}>
        {children}
      </div>
    </div>
  );
};

import { CardProps, Colors } from '../commons';

export const Card: React.FC<CardProps> = ({
  children,
  color = Colors.blue,
  className,
}) => {
  const base = `truncate bg-${color} bg-${color}-400 shadow-md rounded-md font-bold text-xl border border-black p-3 w-14 h-16 flex justify-center items-center`;

  return <div className={`${base} ${className || ''}`}>{children}</div>;
};

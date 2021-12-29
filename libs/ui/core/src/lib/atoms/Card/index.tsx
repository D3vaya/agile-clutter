import { CardProps } from '../commons';

export const Card: React.FC<CardProps> = ({
  cardNumber = '?',
  variant = 'white',
}) => {
  const base =
    'shadow-md rounded-md  border-2 border-black p-3 w-14 h-16 flex justify-center items-center';
  const red = {
    red: 'red',
  };
  const map = new Map<string, string>();
  map.set('red', 'red');
  return (
    <div
      className={`${base} bg-${map.get(variant)} bg-${map.get(variant)}-600`}
    >
      <span className="font-bold text-xl">{cardNumber}</span>
    </div>
  );
};

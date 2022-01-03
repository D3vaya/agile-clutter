import { Colors } from '../../commons';
import { AvaregaBarProps } from '../models';

const AvaregaBar: React.FC<AvaregaBarProps> = ({
  percent = 10,
  color = Colors.teal,
}) => {
  const tailwind = `bg-gray bg-gray-200 h-3 rounded-full relative w-full`;
  const percentTailwind = `bg-teal bg-teal-400 h-3 left-0 rounded-full absolute`;
  return (
    <div className={`${tailwind}`}>
      <span
        className={`${percentTailwind}`}
        style={{ width: `${percent}%` }}
      ></span>
    </div>
  );
};

export default AvaregaBar;

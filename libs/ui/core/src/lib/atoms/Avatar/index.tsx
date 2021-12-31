import { Colors } from '../../commons';
import { AvatarProps } from '../models';

import { getColorHEX } from '../../utils/colors';

export const Avatar: React.FC<AvatarProps> = ({
  color = Colors.teal,
  size = 'md',
}) => {
  let currentSize = 46;
  if (size === 'sm') {
    currentSize = 30;
  }
  if (size === 'xl') {
    currentSize = 56;
  }
  const colorSelected = getColorHEX(color);
  return (
    <div className="inline-block">
      <Svg size={currentSize} fill={colorSelected} />
    </div>
  );
};

interface SvgProps {
  fill?: string;
  size: number;
}
const Svg: React.FC<SvgProps> = ({ fill = 'white', size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_36_795)">
        <circle cx="23" cy="19" r="18.5" fill={fill} stroke="black" />
        <circle cx="16.0635" cy="10.8571" r="1.20635" fill="black" />
        <circle cx="30.5397" cy="10.8571" r="1.20635" fill="black" />
        <path
          d="M14.8571 22.9206V22.9206C20.7224 25.9479 27.6903 25.9479 33.5556 22.9206V22.9206"
          stroke="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_36_795"
          x="0"
          y="0"
          width="46"
          height="46"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_36_795"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_36_795"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

import { ColorsExadecimals } from '../commons';

export const getColorHEX = (option: string) => {
  const arrayColors = Object.entries(ColorsExadecimals);
  const colorSelected = arrayColors.find(
    ([nameColor, _]) => nameColor === option
  );
  if (colorSelected) {
    const [, color] = colorSelected;
    return color;
  }
  return '#ffffff';
};

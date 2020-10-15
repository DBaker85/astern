export const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) => ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

export const celciusToFarenheight = (celsius: number) => (celsius * 9) / 5 + 32;

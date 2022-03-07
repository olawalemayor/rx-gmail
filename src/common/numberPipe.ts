export default function toNumberString(x: number) {
  const numberString = x.toString();
  let firstPart, secondPart;
  const count = numberString.length - 3;

  if (numberString.length > 3) {
    firstPart = numberString.slice(0, count);
    secondPart = numberString.slice(count);
    return `${firstPart},${secondPart}`;
  } else {
    return x.toString();
  }
}

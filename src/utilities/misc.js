export function parseAndValidateInt(numAsStr) {
  const numAsInt = parseInt(numAsStr, 10);
  return numAsInt.toString() === numAsStr
    ? numAsInt
    : undefined;
}

export const formatPounds = num => `£${num.toFixed(2)}`;

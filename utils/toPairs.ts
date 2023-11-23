export const toPairs = (obj: any) => {
  const pairs = [];
  for (const key in obj) {
    pairs.push([key, obj[key]]);
  }
  return pairs;
};
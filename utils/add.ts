export const add = (...arr: number[]) => {
  return arr.reduce((a, b) => a + b, 0)
};

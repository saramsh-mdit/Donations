// [1,0,1,0,1] [1,1,1,0,0]
export const CosineCalculator = (one, two) => {
  let dotProduct = 0;
  let oneSq = 0;
  let twoSq = 0;
  for (let a = 0; a < one.length; a++) {
    dotProduct += one[a] * two[a];
    oneSq += one[a] ** 2;
    twoSq += two[a] ** 2;
  }
  const result = dotProduct / (Math.sqrt(oneSq) * Math.sqrt(twoSq));
  return result;
};

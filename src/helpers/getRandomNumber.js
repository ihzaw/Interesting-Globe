export const getRandomNumbers = (maxNumber, amount) => {
  let arr = [];

  for (let i = 0; i < amount; i++) {
    arr.push(Math.floor(Math.random() * maxNumber));
  }

  return arr;
}
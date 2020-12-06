import dayjs from "dayjs";

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomElementOfArray = (arr) => {
  const randomIndex = getRandomInteger(0, arr.length - 1);

  return arr[randomIndex];
};

export const getRandomElementsOfArray = (maxAmount, arr) => {
  const elements = arr.slice();
  const randomAmount = getRandomInteger(1, maxAmount);
  return new Array(randomAmount)
    .fill(undefined)
    .map(() => {
      const randomIndex = getRandomInteger(0, elements.length - 1);
      const [item] = elements.splice(randomIndex, 1);

      return item;
    });
};

export const getRandomDateTime = (from) => {
  const unixFrom = dayjs(from).unix();
  const unixTo = new Date().getTime();

  return getRandomInteger(unixFrom, unixTo);
};

import dayjs from 'dayjs';

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomElementOfArray = (arr) => {
  const randomIndex = getRandomInteger(0, arr.length - 1);

  return arr[randomIndex];
};

const getRandomElementsOfArray = (maxAmount, arr) => {
  const elements = arr.slice();
  const randomAmount = getRandomInteger(1, maxAmount);
  const result = new Array(randomAmount)
    .fill(undefined)
    .map(function () {
      const randomIndex = getRandomInteger(0, elements.length - 1);
      const [item] = elements.splice(randomIndex, 1);

      return item;
    });

  return result;
};

const getRandomDateTime = (from) => {
  const unixFrom = dayjs(from).unix();
  const unixTo = new Date().getTime();

  return getRandomInteger(unixFrom, unixTo);
};

const getMonthName = (monthIndex) => {
  const months = [
    `January`, `February`, `March`, `April`, `May`,
    `June`, `July`, `August`, `September`, `October`,
    `November`, `December`
  ];
  return months[monthIndex];
};

const getFilmDuration = (duration) => {
  const minutes = duration % 60;
  const hours = (duration - minutes) / 60;
  return `${hours}h ${minutes}m`;
};

export {
  getRandomInteger,
  getRandomElementOfArray,
  getRandomElementsOfArray,
  getRandomDateTime,
  getMonthName,
  getFilmDuration
};

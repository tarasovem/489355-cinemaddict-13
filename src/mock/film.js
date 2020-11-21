const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const generateTitle = () => {
  const titles = [
    `The Dance of Life`,
    `Sagebrush Trail`,
    `The Man with the Golden Arm`,
    `Santa Claus Conquers the Martians`,
    `Popeye the Sailor Meets Sindbad the Sailor`
  ];

  const randomIndex = getRandomInteger(0, titles.length - 1);

  return titles[randomIndex];
};

const generatePosterURL = () => {
  const postersName = [
    `made-for-each-other.png`,
    `popeye-meets-sinbad.png`,
    `sagebrush-trail.jpg`,
    `santa-claus-conquers-the-martians.jpg`,
    `the-dance-of-life.jpg`,
    `the-great-flamarion.jpg`,
    `the-man-with-the-golden-arm.jpg`
  ];

  const randomIndex = getRandomInteger(0, postersName.length - 1);

  return `./images/posters/${postersName[randomIndex]}`;
};

export const generateFilm = () => {
  return {
    title: generateTitle(),
    titleOriginal: `The Great Flamarion`,
    posterURL: generatePosterURL(),
    director: `Anthony Mann`,
    writers: [
      `Anne Wigton`,
      `Heinz Herald`,
      `Richard Weil`
    ],
    actors: [
      `Erich von Stroheim`,
      `Mary Beth Hughes`,
      `Dan Duryea`
    ],
    created: {
      day: 30,
      month: `March`,
      year: `1945`
    },
    country: `USA`,
    duration: `1h 59m`,
    genres: [
      `Drama`,
      `Film-Noir`,
      `Mystery`
    ],
    rating: `9.0`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.`,
    comments: [
      {
        id: 1,
        author: `Tim Macoveev`,
        date: `2019/12/31`,
        time: `23:59`,
        message: `Interesting setting and a good cast`,
        emoji: `smile`
      },
      {
        id: 2,
        author: `John Doe`,
        date: `2019/12/29`,
        time: `14:08`,
        message: `Booooooooooring`,
        emoji: `sleeping`
      },
      {
        id: 3,
        author: `John Doe`,
        date: `2019/12/29`,
        time: `14:20`,
        message: `Very very old. Meh`,
        emoji: `puke`
      },
      {
        id: 4,
        author: `John Doe`,
        date: `2019/12/31`,
        time: `09:32`,
        message: `Almost two hours? Seriously?`,
        emoji: `angry`
      }
    ],
    isAddedToWatchlist: false,
    isWatched: true,
    isFavorite: false,
    age: `18+`
  };
};

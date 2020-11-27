const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const TITLES = [
  `The Dance of Life`,
  `Sagebrush Trail`,
  `The Man with the Golden Arm`,
  `Santa Claus Conquers the Martians`,
  `Popeye the Sailor Meets Sindbad the Sailor`
];

const getRandomElementOfArray = (arr) => {
  const randomIndex = getRandomInteger(0, arr.length - 1);

  return arr[randomIndex];
};

const getRandomElementsOfArray = (maxAmount, arr) => {
  if (maxAmount > arr.length) {
    throw 'Максимальная величина превышает длину списка!'
  }
  const elements = arr.slice();
  const randomAmount = getRandomInteger(1, maxAmount);
  const result = new Array(randomAmount)
    .fill(undefined)
    .map(function () {
      const randomIndex = getRandomInteger(0, elements.length -1);
      const [item] = elements.splice(randomIndex, 1);

      return item;
    });

  return result;
};

const generateTitle = () => {
  const titles = ;

  const randomIndex = getRandomInteger(0, titles.length - 1);

  return titles[randomIndex];
};

const generateOriginTitle = () => {
  const originTitles = [
    `The Dance of Life`,
    `Sagebrush Trail`,
    `The Man with the Golden Arm`,
    `Santa Claus Conquers the Martians`,
    `Popeye the Sailor Meets Sindbad the Sailor`
  ];

  const randomIndex = getRandomInteger(0, originTitles.length - 1);

  return originTitles[randomIndex];
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

const generateNames = (amount = 1) => {
  const names = [
    `Anthony Mann`,
    `Danna Kolleen`,
    `Sheridan Edison`,
    `Bryant Graham`,
    `Leroi Karson`,
    `Carlisle Sonnie`,
    `Arlene Bryant`,
    `Aubrie Warrick`,
    `Sonya Audra`,
    `Christian Imogene`,
    `Nash Nova`,
    `Rosalynne Sukie`,
    `Emil Debby`,
    `Laverne Melody`,
    `Nic Calla`,
    `Donald Roy`,
    `Derby Jenni`,
    `Shelagh Kacie`,
    `Mackenzie Shanae`,
    `Gillian Chuck`,
    `Elfreda Breanne`,
    `Abby Kelda`,
    `Pam Warner`,
    `Piper Gordon`,
    `Lawrence Flick`,
    `Annmarie Benson`,
    `Miranda Emelia`,
    `Bernard Ridge`,
    `Bettie Nigella`,
    `Orville Emily`,
    `Jayme Jaiden`,
    `Leigh Cyprian`,
    `Yolanda Ollie`,
    `Julianna Watson`,
    `Mort Grosvenor`,
    `Dena Joisse`,
    `Hercules Seale`,
    `Valry Harder`,
    `Rabi Fraumeni`,
    `Ellette De costa`,
    `Cristian Biscay`,
    `Shel Hiney`,
    `Gerhardt Rakkhita`,
    `Truda Hernandez`,
    `Damian Hickson`
  ];

  const resultLength = getRandomInteger(1, amount);

  let result = [];

  for (let i = 0; result.length > resultLength; i++) {
    let randomIndex = getRandomInteger(0, amount.length - 1);
    let item = names.splice(randomIndex, 1);
    result = [...result, ...item];
  }

  return result;
};

const generateCreationDate = () => {
  const date = new Map();

  const getRandomYear = () => {
    const MIN_YEAR = 1895;
    const MAX_YEAR = new Date().getFullYear();
    return getRandomInteger(MIN_YEAR, MAX_YEAR);
  };

  date.set(`year`, getRandomYear());

  const getRandomMonth = () => {
    const MIN_MONTH = 0;
    let MAX_MONTH;

    if (date.year !== new Date().getFullYear()) {
      MAX_MONTH = 11;
    } else {
      MAX_MONTH = new Date().getMonth();
    }

    return getRandomInteger(MIN_MONTH, MAX_MONTH);
  };

  date.set(`month`, getRandomMonth());

  const getMonthName = (index) => {
    const months = [
      `January`,
      `February`,
      `March`,
      `April`,
      `May`,
      `June`,
      `July`,
      `August`,
      `September`,
      `October`,
      `November`,
      `December`];

    return months[index];
  };

  const getRandomDay = () => {
    const year = date.get(`year`);
    const month = date.get(`month`);

    const MIN_DAY = 0;
    let MAX_DAY;

    switch (month) {
      case month === 1 && year % 4 === 0:
        MAX_DAY = 29;
        break;
      case month === 1:
        MAX_DAY = 28;
        break;
      case month === 3:
      case month === 5:
      case month === 8:
      case month === 10:
        MAX_DAY = 30;
        break;
      default:
        MAX_DAY = 31;
    }

    return getRandomInteger(MIN_DAY, MAX_DAY);
  };

  date.set(`day`, getRandomDay());
  date.set(`month`, getMonthName(date.get(`month`)));

  date.forEach(function (value, key, map) {
    map.set(key, String(value));
  });

  return date;
};

const generateCountry = () => {
  const counties = [
    `Albania`,
    `Bahamas`,
    `Cambodia`,
    `Denmark`,
    `Ecuador`,
    `France`,
    `Germany`,
    `Hungary`,
    `India`,
    `Japan`,
    `Kazakhstan`,
    `Latvia`,
    `Malaysia`,
    `USA`,
    `Poland`,
    `Russian Federation`,
    `Uganda`
  ];

  const randomIndex = getRandomInteger(0, counties.length - 1);

  return counties[randomIndex];
};

const generateDuration = () => {
  const MIN_HOUR = 1;
  const MAX_HOUR = 5;
  const MIN_MINUTE = 0;
  const MAX_MINUTE = 59;
  const hour = getRandomInteger(MIN_HOUR, MAX_HOUR);
  let minute = getRandomInteger(MIN_MINUTE, MAX_MINUTE);

  if (minute < 10) {
    minute = `0${minute}`;
  }

  return `${hour}h ${minute}m`;
};

const generateGenres = () => {
  const genres = [
    `Musicals`,
    `Horror`,
    `Crime`,
    `Romantic Comedy`,
    `Drama`,
    `Fantasy`,
    `Animation`,
    `Historical`,
    `Science fiction`,
    `Action Adventure`
  ];

  const MIN_GENRES_NUMBER = 1;
  const MAX_GENRES_NUMBER = 3;
  const genresNumber = getRandomInteger(MIN_GENRES_NUMBER, MAX_GENRES_NUMBER);

  const genresList = new Set();

  for (let i = 0; genresNumber > genresList.size; i++) {
    const randomIndex = getRandomInteger(0, genres.length - 1);
    genresList.add(genres[randomIndex]);
  }

  return genresList;
};

const generateRating = () => {
  const MIN_RATING = 10;
  const MAX_RATING = 100;

  const randomRating = getRandomInteger(MIN_RATING, MAX_RATING) / 10;

  return String(randomRating.toFixed(1));
};

const generateDescription = () => {
  const sentences = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat.`,
    `Nunc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`
  ];

  const MIN_SENTENCES_COUNT = 1;
  const MAX_SENTENCES_COUNT = 5;
  const sentencesCount = getRandomInteger(MIN_SENTENCES_COUNT, MAX_SENTENCES_COUNT);

  let description = new Set();

  for (let i = 0; sentencesCount > description.size; i++) {
    const randomIndex = getRandomInteger(0, sentences.length - 1);

    description.add(sentences[randomIndex]);
  }

  description = Array.from(description);

  return description.join(` `);
};

const generateComments = () => {
  const MIN_COMMENTS_COUNT = 0;
  const MAX_COMMENTS_COUNT = 5;
  const commentsCount = getRandomInteger(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT);

  const generateComment = () => {
    const getRandomMessage = () => {
      const messages = [
        `Interesting setting and a good cast`,
        `Booooooooooring`,
        `Very very old. Meh`,
        `Almost two hours? Seriously?`,
        `The beauty of the sunset was obscured by the industrial cranes.`,
        `Green should have smelled more tranquil, but somehow it just tasted rotten.`,
        `The ants enjoyed the barbecue more than the family.`,
        `Behind the window was a reflection that only instilled fear.`,
        `The irony of the situation wasn't lost on anyone in the room.`,
        `The sign said there was road work ahead so he decided to speed up.`,
        `The book is in front of the table.`
      ];

      const randomIndex = getRandomInteger(0, messages.length - 1);

      return messages[randomIndex];
    };

    const getRandomEmoji = () => {
      const emojis = [
        `smile`,
        `sleeping`,
        `puke`,
        `angry`
      ];

      const randomIndex = getRandomInteger(0, emojis.length - 1);

      return emojis[randomIndex];
    };

    return {
      id: null,
      author: generateNames(),
      date: ``,
      time: ``,
      message: getRandomMessage(),
      emoji: getRandomEmoji()
    };
  };

  if (commentsCount === 0) {
    return [];
  }

  let resultCommentList = [];

  for (let i = 0; commentsCount > resultCommentList.length; i++) {
    resultCommentList.push(generateComment());
    resultCommentList[i].id = i + 1;
  }

  return resultCommentList;
};

const generateAgeRating = () => {
  const ageRatings = [
    `0+`,
    `6+`,
    `12+`,
    `16+`,
    `18+`
  ];

  const randomIndex = getRandomInteger(0, ageRatings.length - 1);

  return ageRatings[randomIndex];
};

export const generateFilm = () => {
  return {
    title: generateTitle(),
    titleOriginal: generateOriginTitle(),
    posterURL: generatePosterURL(),
    director: generateNames(),
    writers: generateNames(3),
    actors: generateNames(3),
    createDate: generateCreationDate(),
    country: generateCountry(),
    duration: generateDuration(),
    genres: generateGenres(),
    rating: generateRating(),
    description: generateDescription(),
    comments: generateComments(),
    isAddedToWatchlist: getRandomInteger(),
    isWatched: getRandomInteger(),
    isFavorite: getRandomInteger(),
    ageRating: generateAgeRating()
  };
};

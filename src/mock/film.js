import {
  TITLES,
  ORIGIN_TITLES,
  POSTER_FOLDER,
  POSTER_FILE_NAMES,
  NAMES,
  MAX_WRITERS_COUNT,
  MAX_ACTORS_COUNT,
  FIRST_FILM_DATE,
  COUNTRIES,
  MIN_DURATION,
  MAX_DURATION,
  GENRES,
  MAX_GENRES_COUNT,
  MIN_RATING,
  MAX_RATING,
  SENTENCES,
  MAX_SENTENCES,
  AGE_RATINGS
} from '../view/constants.js';
import {
  getRandomInteger,
  getRandomElementOfArray,
  getRandomElementsOfArray,
  getRandomDateTime
} from './utils.js';


const getRandomDuration = (min, max) => {
  return getRandomInteger(min, max);
};

const getRandomRating = () => getRandomInteger(MIN_RATING * 10, MAX_RATING * 10) / 10;

const getRandomDescription = () => {
  const sentencesList = getRandomElementsOfArray(MAX_SENTENCES, SENTENCES);

  return sentencesList.join(` `);
};

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
    message: getRandomMessage(),
    emoji: getRandomEmoji()
  };
};

const generateComments = () => {
  const MIN_COMMENTS_COUNT = 0;
  const MAX_COMMENTS_COUNT = 5;
  const commentsCount = getRandomInteger(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT);


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

export const generateFilm = () => {
  return {
    title: getRandomElementOfArray(TITLES),
    titleOriginal: getRandomElementOfArray(ORIGIN_TITLES),
    posterURL: `${POSTER_FOLDER}${getRandomElementOfArray(POSTER_FILE_NAMES)}`,
    director: getRandomElementOfArray(NAMES),
    writers: getRandomElementsOfArray(MAX_WRITERS_COUNT, NAMES),
    actors: getRandomElementsOfArray(MAX_ACTORS_COUNT, NAMES),
    createDate: getRandomDateTime(FIRST_FILM_DATE),
    country: getRandomElementOfArray(COUNTRIES),
    duration: getRandomDuration(MIN_DURATION, MAX_DURATION),
    genres: getRandomElementsOfArray(MAX_GENRES_COUNT, GENRES),
    rating: getRandomRating(),
    description: getRandomDescription(),
    comments: generateComments(),
    isAddedToWatchlist: Boolean(getRandomInteger()),
    isWatched: Boolean(getRandomInteger()),
    isFavorite: Boolean(getRandomInteger()),
    ageRating: getRandomElementOfArray(AGE_RATINGS)
  };
};

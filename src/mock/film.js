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
  AGE_RATINGS,
  MESSAGES,
  EMOJIS,
  MIN_COMMENTS_COUNT,
  MAX_COMMENTS_COUNT
} from '../view/constants.js';
import {
  getRandomInteger,
  getRandomElementOfArray,
  getRandomElementsOfArray,
  getRandomDateTime
} from './utils.js';
import {nanoid} from 'nanoid';


const getRandomDuration = (min, max) => {
  return getRandomInteger(min, max);
};

const getRandomRating = () => (getRandomInteger(MIN_RATING * 10, MAX_RATING * 10) / 10).toFixed(1);

const getRandomDescription = () => {
  const sentencesList = getRandomElementsOfArray(MAX_SENTENCES, SENTENCES);

  return sentencesList.join(` `);
};

const getRandomComment = () => {
  return {
    id: nanoid(),
    author: getRandomElementOfArray(NAMES),
    dateTime: getRandomDateTime(FIRST_FILM_DATE),
    message: getRandomElementOfArray(MESSAGES),
    emoji: getRandomElementOfArray(EMOJIS)
  };
};

const getRandomComments = (min, max) => {
  const randomAmount = getRandomInteger(min, max);
  const result = new Array(randomAmount)
    .fill(undefined)
    .map(function () {
      return getRandomComment();
    });
  return result;
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
    comments: getRandomComments(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT),
    isAddedToWatchlist: Boolean(getRandomInteger()),
    isWatched: Boolean(getRandomInteger()),
    isFavorite: Boolean(getRandomInteger()),
    ageRating: getRandomElementOfArray(AGE_RATINGS)
  };
};

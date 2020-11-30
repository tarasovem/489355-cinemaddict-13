import dayjs from "dayjs";
import {getFilmDuration} from '../mock/utils';

export const filmCardTemplate = (film) => {
  const {title, rating, creationDateTime, duration, genres, posterFileName, description, comments, isAddedToWatchlist, isWatched, isFavorite} = film;

  const yearOfCreation = dayjs(creationDateTime).year();

  const activeClass = `film-card__controls-item--active`;

  const addedToWatchListClassName = isAddedToWatchlist ? activeClass : ``;

  const watchedClassName = isWatched ? activeClass : ``;

  const favoriteClassName = isFavorite ? activeClass : ``;

  return `<article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${yearOfCreation}</span>
      <span class="film-card__duration">${getFilmDuration(duration)}</span>
      <span class="film-card__genre">${genres[0] ? genres[0] : ``}</span>
    </p>
    <img src="./images/posters/${posterFileName}" alt="" class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <a class="film-card__comments">${comments.length} comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${addedToWatchListClassName}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${watchedClassName}" type="button">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite ${favoriteClassName}" type="button">Mark as favorite</button>
    </div>
  </article>`;
};

import dayjs from "dayjs";
import {createElement, getFilmDuration} from '../utils';

const ACTIVE_CLASS = `film-card__controls-item--active`;

const getYearOfCreation = (date) => {
  return dayjs(date).format(`YYYY`);
};

const createFilmCardTemplate = (film) => {
  const {title, rating, creationDateTime, duration, genres, posterFileName, description, comments, isAddedToWatchlist, isWatched, isFavorite} = film;

  return `<article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${getYearOfCreation(creationDateTime)}</span>
      <span class="film-card__duration">${getFilmDuration(duration)}</span>
      <span class="film-card__genre">${genres[0] ? genres[0] : ``}</span>
    </p>
    <img src="./images/posters/${posterFileName}" alt="" class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <a class="film-card__comments">${comments.length} comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isAddedToWatchlist ? ACTIVE_CLASS : ``}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isWatched ? ACTIVE_CLASS : ``}" type="button">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite ${isFavorite ? ACTIVE_CLASS : ``}" type="button">Mark as favorite</button>
    </div>
  </article>`;
};

export default class FilmCardView {
  constructor(film) {
    this._element = null;
    this._film = film;
  }

  getTemplate() {
    return createFilmCardTemplate(this._film);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

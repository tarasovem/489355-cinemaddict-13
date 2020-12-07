import AbstractView from "./abstract-view.js";
import dayjs from "dayjs";
import {getFilmDuration} from '../utils/film.js';

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

export default class FilmCard extends AbstractView {
  constructor(film) {
    super();
    this._film = film;

    this._openClickHandler = this._openClickHandler.bind(this);
  }

  getTemplate() {
    return createFilmCardTemplate(this._film);
  }

  _openClickHandler(evt) {
    evt.preventDefault();
    this._callbacks.openClick();
  }

  setClickHandler(callback) {
    this._callbacks.openClick = callback;
    this.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, this._openClickHandler);
    this.getElement().querySelector(`.film-card__title`).addEventListener(`click`, this._openClickHandler);
    this.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, this._openClickHandler);
  }
}

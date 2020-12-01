import {profileRatingTemplate} from "./view/profile-rating";
import {menuTemplate} from "./view/menu";
import {films} from "./view/films";
import {commonFilmsListTemplate} from "./view/common-films-list";
import {filmCardTemplate} from "./view/film-card";
import {showMoreButtonTemplate} from "./view/show-more-button";
import {topRatedFilmsListTemplate} from "./view/top-rated-films-list";
import {mostCommentedFilmsListTemplate} from "./view/most-commented-films-list";
import {filmDetailsTemplate} from "./view/film-details";
import {footerStatsTemplate} from "./view/footer-stats";
import {generateFilm} from "./mock/film";

const FILM_COUNT = 20;
const FILM_COUNT_PER_STEP = 5;
const EXTRA_FILM_COUNT = 2;

const filmsList = new Array(FILM_COUNT).fill(undefined).map(generateFilm);
const topRatedFilmsList = new Array(EXTRA_FILM_COUNT).fill(undefined).map(generateFilm);
const mostCommentedFilmsList = new Array(EXTRA_FILM_COUNT).fill(undefined).map(generateFilm);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const mainHeaderElement = document.querySelector(`.header`);
render(mainHeaderElement, profileRatingTemplate(), `beforeend`);

const mainElement = document.querySelector(`.main`);
render(mainElement, menuTemplate(filmsList), `beforeend`);
render(mainElement, films(), `beforeend`);

const filmsElement = document.querySelector(`.films`);
render(filmsElement, commonFilmsListTemplate(), `beforeend`);

const filmsListContainerElement = document.querySelector(`.films-list__container`);
for (let i = 0; i < Math.min(filmsList.length, FILM_COUNT_PER_STEP); i++) {
  render(filmsListContainerElement, filmCardTemplate(filmsList[i]), `beforeend`);
}

const filmsListElement = document.querySelector(`.films-list`);
if (filmsList.length > FILM_COUNT_PER_STEP) {
  let renderFilmCount = FILM_COUNT_PER_STEP;

  render(filmsListElement, showMoreButtonTemplate(), `beforeend`);

  const showMoreButton = filmsListElement.querySelector(`.films-list__show-more`);

  showMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    filmsList
      .slice(renderFilmCount, renderFilmCount + FILM_COUNT_PER_STEP)
      .forEach((film) => render(filmsListContainerElement, filmCardTemplate(film), `beforeend`));

    renderFilmCount += FILM_COUNT_PER_STEP;

    if (renderFilmCount >= filmsList.length) {
      showMoreButton.remove();
    }
  });
}
render(filmsElement, topRatedFilmsListTemplate(), `beforeend`);

const topRatedFilmsContainerElement = document.querySelector(`.films-list--extra .films-list__container`);
for (let i = 0; i < EXTRA_FILM_COUNT; i++) {
  render(topRatedFilmsContainerElement, filmCardTemplate(topRatedFilmsList[i]), `beforeend`);
}
render(filmsElement, mostCommentedFilmsListTemplate(), `beforeend`);

const mostCommentedFilmsContainerElement = document.querySelector(`.films-list--extra:last-of-type .films-list__container`);
for (let i = 0; i < EXTRA_FILM_COUNT; i++) {
  render(mostCommentedFilmsContainerElement, filmCardTemplate(mostCommentedFilmsList[i]), `beforeend`);
}

const mainFooterElement = document.querySelector(`.footer`);
render(mainFooterElement, filmDetailsTemplate(filmsList[0]), `afterend`);

const footerStatistics = mainFooterElement.querySelector(`.footer__statistics`);
render(footerStatistics, footerStatsTemplate(FILM_COUNT), `beforeend`);

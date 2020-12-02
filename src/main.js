import {profileRatingTemplate} from "./view/profile-rating";
import {menuTemplate} from "./view/menu";
import {films} from "./view/films";
import {commonFilmsListTemplate} from "./view/common-films-list";
import {filmCardTemplate} from "./view/film-card";
import {showMoreButtonTemplate} from "./view/show-more-button";
import {topRatedFilmsListTemplate} from "./view/top-rated-films-list";
import {mostCommentedFilmsListTemplate} from "./view/most-commented-films-list";
import {filmDetailsTemplate} from "./view/film-details";
import {footerStatsTotal} from "./view/footer-stats";
import {generateFilm} from "./mock/film";
import {renderTemplate} from "./utils";

const FILM_COUNT = 25;
const FILM_COUNT_PER_STEP = 5;
const EXTRA_FILM_COUNT = 2;

const filmsList = new Array(FILM_COUNT).fill(undefined).map(generateFilm);
const topRatedFilmsList = new Array(EXTRA_FILM_COUNT).fill(undefined).map(generateFilm);
const mostCommentedFilmsList = new Array(EXTRA_FILM_COUNT).fill(undefined).map(generateFilm);

const mainHeaderElement = document.querySelector(`.header`);
renderTemplate(mainHeaderElement, profileRatingTemplate(), `beforeend`);

const mainElement = document.querySelector(`.main`);
renderTemplate(mainElement, menuTemplate(filmsList), `beforeend`);
renderTemplate(mainElement, films(), `beforeend`);

const filmsElement = document.querySelector(`.films`);
renderTemplate(filmsElement, commonFilmsListTemplate(), `beforeend`);

const filmsListContainerElement = document.querySelector(`.films-list__container`);
for (let i = 0; i < Math.min(filmsList.length, FILM_COUNT_PER_STEP); i++) {
  renderTemplate(filmsListContainerElement, filmCardTemplate(filmsList[i]), `beforeend`);
}

const filmsListElement = document.querySelector(`.films-list`);
if (filmsList.length > FILM_COUNT_PER_STEP) {
  let renderFilmCount = FILM_COUNT_PER_STEP;

  renderTemplate(filmsListElement, showMoreButtonTemplate(), `beforeend`);

  const showMoreButton = filmsListElement.querySelector(`.films-list__show-more`);

  showMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    filmsList
      .slice(renderFilmCount, renderFilmCount + FILM_COUNT_PER_STEP)
      .forEach((film) => renderTemplate(filmsListContainerElement, filmCardTemplate(film), `beforeend`));

    renderFilmCount += FILM_COUNT_PER_STEP;

    if (renderFilmCount >= filmsList.length) {
      showMoreButton.remove();
    }
  });
}
renderTemplate(filmsElement, topRatedFilmsListTemplate(), `beforeend`);

const topRatedFilmsContainerElement = document.querySelector(`.films-list--extra .films-list__container`);
for (let i = 0; i < EXTRA_FILM_COUNT; i++) {
  renderTemplate(topRatedFilmsContainerElement, filmCardTemplate(topRatedFilmsList[i]), `beforeend`);
}
renderTemplate(filmsElement, mostCommentedFilmsListTemplate(), `beforeend`);

const mostCommentedFilmsContainerElement = document.querySelector(`.films-list--extra:last-of-type .films-list__container`);
for (let i = 0; i < EXTRA_FILM_COUNT; i++) {
  renderTemplate(mostCommentedFilmsContainerElement, filmCardTemplate(mostCommentedFilmsList[i]), `beforeend`);
}

const mainFooterElement = document.querySelector(`.footer`);
renderTemplate(mainFooterElement, filmDetailsTemplate(filmsList[0]), `afterend`);

const footerStatistics = mainFooterElement.querySelector(`.footer__statistics`);
renderTemplate(footerStatistics, footerStatsTotal(FILM_COUNT), `beforeend`);

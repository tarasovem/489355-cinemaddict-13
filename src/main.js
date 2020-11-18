import {profileRatingTemplate} from "./view/profile-rating";
import {menuTemplate} from "./view/menu";
import {films} from "./view/films";
import {commonFilmsListTemplate} from "./view/common-films-list";
import {filmCardTemplate} from "./view/film-card";
import {showMoreButtonTemplate} from "./view/show-more-button";
import {topRatedFilmsListTemplate} from "./view/top-rated-films-list";
import {mostCommentedFilmsListTemplate} from "./view/most-commented-films-list";
import {filmDetailsTemplate} from "./view/film-details";

const FILM_COUNT = 5;
const EXTRA_FILM_COUNT = 2;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const mainHeaderElement = document.querySelector(`.header`);

render(mainHeaderElement, profileRatingTemplate(), `beforeend`);

const mainElement = document.querySelector(`.main`);

render(mainElement, menuTemplate(), `beforeend`);
render(mainElement, films(), `beforeend`);

const filmsElement = document.querySelector(`.films`);

render(filmsElement, commonFilmsListTemplate(), `beforeend`);

const filmsListContainerElement = document.querySelector(`.films-list__container`);

for (let i = 0; i < FILM_COUNT; i++) {
  render(filmsListContainerElement, filmCardTemplate(), `beforeend`);
}

const filmsListElement = document.querySelector(`.films-list`);

render(filmsListElement, showMoreButtonTemplate(), `beforeend`);

render(filmsElement, topRatedFilmsListTemplate(), `beforeend`);

const topRatedFilmsContainerElement = document.querySelector(`.films-list--extra .films-list__container`);

for (let i = 0; i < EXTRA_FILM_COUNT; i++) {
  render(topRatedFilmsContainerElement, filmCardTemplate(), `beforeend`);
}

render(filmsElement, mostCommentedFilmsListTemplate(), `beforeend`);

const mostCommentedFilmsContainerElement = document.querySelector(`.films-list--extra:last-of-type .films-list__container`);


for (let i = 0; i < EXTRA_FILM_COUNT; i++) {
  render(mostCommentedFilmsContainerElement, filmCardTemplate(), `beforeend`);
}

const mainFooterElement = document.querySelector(`.footer`);

render(mainFooterElement, filmDetailsTemplate(), `afterend`);

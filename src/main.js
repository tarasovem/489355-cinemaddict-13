import ProfileRatingView from "./view/profile-rating";
import FilmsView from "./view/films";
import FilmsListView from "./view/common-films-list";
import FilmCardView from "./view/film-card";
import ShowMoreButtonView from "./view/show-more-button";
import TopRatedFilmsListView from "./view/top-rated-films-list";
import MostCommentedFilmsListView from "./view/most-commented-films-list";
import FooterStatsTotalView from "./view/footer-stats";
import {generateFilm} from "./mock/film";
import {renderElement, renderPosition} from "./utils";
import SiteMenuView from "./view/menu";
import FilmDetailsView from "./view/film-details";

const FILM_COUNT = 25;
const FILM_COUNT_PER_STEP = 5;
const EXTRA_FILM_COUNT = 2;

const films = new Array(FILM_COUNT).fill(undefined).map(generateFilm);
const topRatedFilmsList = new Array(EXTRA_FILM_COUNT).fill(undefined).map(generateFilm);
const mostCommentedFilmsList = new Array(EXTRA_FILM_COUNT).fill(undefined).map(generateFilm);

const mainHeaderElement = document.querySelector(`.header`);
renderElement(mainHeaderElement, new ProfileRatingView().getElement(), renderPosition.BEFOREEND);

const mainElement = document.querySelector(`.main`);
renderElement(mainElement, new SiteMenuView(films).getElement(), renderPosition.BEFOREEND);
renderElement(mainElement, new FilmsView().getElement(), renderPosition.BEFOREEND);

const filmsElement = document.querySelector(`.films`);
renderElement(filmsElement, new FilmsListView().getElement(), renderPosition.BEFOREEND);

const BODY = document.body;
const openFilmDetails = () => {
  BODY.classList.add(`hide-overflow`);
  BODY.appendChild(filmDetailsComponent.getElement());
};
const closeFilmDetails = () => {
  BODY.removeChild(filmDetailsComponent.getElement());
  BODY.classList.remove(`hide-overflow`);
};

const filmsListContainerElement = document.querySelector(`.films-list__container`);
for (let i = 0; i < Math.min(films.length, FILM_COUNT_PER_STEP); i++) {
  const filmCardComponent = new FilmCardView(films[i]);
  renderElement(filmsListContainerElement, filmCardComponent.getElement(), renderPosition.BEFOREEND);
  filmCardComponent.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, () => {
    openFilmDetails();
  });
  filmCardComponent.getElement().querySelector(`.film-card__title`).addEventListener(`click`, () => {
    openFilmDetails();
  });
  filmCardComponent.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, () => {
    openFilmDetails();
  });
}

const filmDetailsComponent = new FilmDetailsView(films[0]);
filmDetailsComponent.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, ()=> {
  closeFilmDetails();
});

const filmsListElement = document.querySelector(`.films-list`);
if (films.length > FILM_COUNT_PER_STEP) {
  let renderFilmCount = FILM_COUNT_PER_STEP;

  renderElement(filmsListElement, new ShowMoreButtonView().getElement(), renderPosition.BEFOREEND);

  const showMoreButton = filmsListElement.querySelector(`.films-list__show-more`);

  showMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    films
      .slice(renderFilmCount, renderFilmCount + FILM_COUNT_PER_STEP)
      .forEach((film) => renderElement(filmsListContainerElement, new FilmCardView().getElement(film), renderPosition.BEFOREEND));

    renderFilmCount += FILM_COUNT_PER_STEP;

    if (renderFilmCount >= films.length) {
      showMoreButton.remove();
    }
  });
}
renderElement(filmsElement, new TopRatedFilmsListView().getElement(), renderPosition.BEFOREEND);

const topRatedFilmsContainerElement = document.querySelector(`.films-list--extra .films-list__container`);
for (let i = 0; i < EXTRA_FILM_COUNT; i++) {
  renderElement(topRatedFilmsContainerElement, new FilmCardView(topRatedFilmsList[i]).getElement(), renderPosition.BEFOREEND);
}
renderElement(filmsElement, new MostCommentedFilmsListView().getElement(), renderPosition.BEFOREEND);

const mostCommentedFilmsContainerElement = document.querySelector(`.films-list--extra:last-of-type .films-list__container`);
for (let i = 0; i < EXTRA_FILM_COUNT; i++) {
  renderElement(mostCommentedFilmsContainerElement, new FilmCardView(mostCommentedFilmsList[i]).getElement(), renderPosition.BEFOREEND);
}

const footerStatistics = document.querySelector(`.footer__statistics`);
renderElement(footerStatistics, new FooterStatsTotalView(FILM_COUNT).getElement(), renderPosition.BEFOREEND);

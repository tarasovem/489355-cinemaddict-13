import AbstractView from "../view/abstract-view";

export const renderPosition = {
  BEFOREEND: `beforeend`,
  AFTEREND: `afterend`
};

export const renderElement = (container, child, place) => {
  if (container instanceof AbstractView) {
    container = container.getElement();
  }

  if (child instanceof AbstractView) {
    child = child.getElement();
  }

  switch (place) {
    case renderPosition.BEFOREEND:
      container.append(child);
      break;
    case renderPosition.AFTEREND:
      container.after(child);
      break;
  }
};

export const renderTemplate = (container, template, place) => {
  if (container instanceof AbstractView) {
    container = container.getElement();
  }

  container.insertAdjacentHTML(place, template);
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

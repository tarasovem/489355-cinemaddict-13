import {createElement} from "../utils";

export const createFooterStatsTotalTemplate = (amount) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ` `);
};

export default class FooterStatsTotalView {
  constructor(amount) {
    this._element = null;
    this._amount = amount;
  }

  getTemplate() {
    return createFooterStatsTotalTemplate(this._amount);
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

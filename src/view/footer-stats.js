import AbstractView from "./abstract.js";

export const createFooterStatsTotalTemplate = (amount) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ` `);
};

export default class FooterStatsTotal extends AbstractView {
  constructor(amount) {
    super();
    this._amount = amount;
  }

  getTemplate() {
    return createFooterStatsTotalTemplate(this._amount);
  }
}

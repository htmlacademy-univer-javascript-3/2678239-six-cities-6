import {Locator, Page} from '@playwright/test';
import {AbstractTestPage} from './AbstractTestPage.ts';

export class MainPage extends AbstractTestPage {
  constructor(page: Page, url = '/') {
    super(page, url);
    this.username = this.page.getByTestId('header-username');
    this.sortButton = this.page.getByTestId('sort-button');
    this.sortTypesList = this.page.getByTestId('sort-types-list');
    this.prices = this.page.getByTestId('offer-price');
    this.ratings = this.page.getByTestId('rating');
    this.offers = this.page.getByTestId('offer-card');
    this.noOffersContainer = this.page.getByTestId('no-offers-container');
  }

  public readonly offers: Locator;

  public readonly sortButton: Locator;

  public readonly prices: Locator;

  public readonly ratings: Locator;

  public readonly sortTypesList: Locator;

  public readonly username: Locator;

  public readonly noOffersContainer: Locator;

}

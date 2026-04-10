import {AbstractTestPage} from './AbstractTestPage.ts';
import {Locator, Page} from '@playwright/test';

export class OfferPage extends AbstractTestPage {
  constructor(page: Page, url = '/') {
    super(page, url);
    this.title = this.page.getByTestId('offer-page-title');
  }

  public readonly title: Locator;
}

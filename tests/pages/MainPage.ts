import {Locator, Page} from '@playwright/test';
import {AbstractTestPage} from './AbstractTestPage.ts';
import {SortTypeShortNames} from '../../src/const.ts';
import {SortTypes} from '../../src/types/sort.ts';

export class MainPage extends AbstractTestPage {
  constructor(page: Page, url = '/') {
    super(page, url);
    this.username = this.page.getByTestId('header-username');
    this.sortingTypesList = this.page.getByTestId('sorting-type-list');
  }

  public readonly sortingTypesList: Locator;

  public readonly username: Locator;
}

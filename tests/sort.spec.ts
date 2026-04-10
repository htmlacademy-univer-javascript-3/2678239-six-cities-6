import {expect, test} from '@playwright/test';
import {MainPage} from './pages/MainPage.ts';
import {SortTypeNames} from '../src/const.ts';
import {SortTypes} from '../src/types/sort.ts';

test.describe('sorting of offers is working', () => {
  let mainPage: MainPage;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.load();
    await mainPage.sortButton.click();
  });

  test('sort high to low price working', async () => {
    const sortOption = mainPage.sortTypesList.getByText(SortTypeNames.get(SortTypes.PriceHighToLow)!);
    await sortOption.click();

    const priceTexts = await mainPage.prices.allTextContents();

    const prices = priceTexts.map((text) =>
      Number(text.replace(/\D/g, ''))
    );

    const sorted = [...prices].sort((a, b) => b - a);

    expect(prices).toEqual(sorted);
  });

  test('sort low to high price working', async () => {
    const sortOption = mainPage.sortTypesList.getByText(SortTypeNames.get(SortTypes.PriceLowToHigh)!);
    await sortOption.click();

    const priceTexts = await mainPage.prices.allTextContents();

    const prices = priceTexts.map((text) =>
      Number(text.replace(/\D/g, ''))
    );

    const sorted = [...prices].sort((a, b) => a - b);

    expect(prices).toEqual(sorted);
  });

  test('sort top rating working', async () => {
    const sortOption = mainPage.sortTypesList.getByText(SortTypeNames.get(SortTypes.TopRated)!);
    await sortOption.click();

    const ratings = await mainPage.ratings.evaluateAll((elements) =>
      elements.map((elem) => +elem.style.width.replace(/\D/g, '')));

    const sorted = [...ratings].sort((a, b) => b - a);
    expect(ratings).toEqual(sorted);
  });
});

import {expect, test} from '@playwright/test';
import {MainPage} from './pages/MainPage.ts';
import {OfferPage} from './pages/OfferPage.ts';

test('offers list working', async ({page}) => {
  const mainPage = new MainPage(page);
  await mainPage.load();

  const offerPage = new OfferPage(page);

  if (await mainPage.offers.count() !== 0) {
    const offers = await mainPage.offers.all();
    const randIdx = Math.ceil(Math.random() * offers.length);
    const randOffer = offers[randIdx];
    const title = await randOffer.getByTestId('offer-title').textContent() ?? '';

    await offers[randIdx].click();

    await expect(offerPage.title).toContainText(title);
  } else {
    await mainPage.noOffersContainer.isVisible();
  }
});

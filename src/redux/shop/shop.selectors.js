import memoize from 'lodash.memoize';
import { createSelector } from 'reselect';

/*const  COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};*/
const selectShop = (state) => state.shop;

const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

const selectShopCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

const selectShopCollection = memoize((collectionUrlParam) => {
   return createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam]
  );
});

export  {selectShopCollections, selectShopCollection, selectShopCollectionsForPreview};
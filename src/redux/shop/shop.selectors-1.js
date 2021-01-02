/*import { StaticRouter } from 'react-router-dom';
import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    cards: 1,
    prints: 2,
    postcards: 3,
    womens: 4,
    mens: 5
}
;
const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    )*/

    // import { createSelector } from 'reselect';
    

    // const selectShop = state => state.shop;
    
    // export const selectCollections = createSelector(
    //   [selectShop],
    //   shop => shop.collections
    // );
    
    // export const selectCollectionsForPreview = createSelector(
    //   [selectCollections],
    //   collections =>
    //   collections ? Object.keys(collections).map(key => collections[key]): []
    // );
    
    // export const selectCollection = collectionUrlParam =>
    //   createSelector(
    //     [selectCollections],
    //     collections => (collections ? collections[collectionUrlParam] : null)
    //   );

    // export const selectIsCollectionFetching = createSelector(
    //   [selectShop],
    //   shop => shop.isFetching
    // );

    import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);
// import React from 'react';
// import { Route } from 'react-router-dom';
// import { connect } from 'react-redux';

// import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
// import CollectionPage from '../collection/collection.component';
// import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase-utils.js';

// import { updateCollections } from '../../redux/shop/shop.actions';
// import WithSpinner from  '../../components/with-spinner/with-spinner.component';

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// class ShopPage extends React.Component {

//   state = {
//     loading: true
//   };

//   unsubcribeFromSnapshot = null;

//   comnponentDidMount() {
//     const { updateCollections } = this.props;
//     const collectionRef = firestore.collection('collections');

//     this.unsubcribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
//       const collectionsMap = convertCollectionSnapshotToMap(snapshot);
//       updateCollections(collectionsMap);
//       this.setState({ loading: false });

//     });

//   }

//   render() {

//     const { match } = this.props;
//     const { loading } = this.state;
//     return (
//       <div className='shop-page'>
//      <Route
//           exact
//           path={`${match.path}`}
//           render={props => (
//             <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
//           )}
//         />
//         <Route
//           path={`${match.path}/:collectionId`}
//           render={props => (
//             <CollectionPageWithSpinner isLoading={loading} {...props} />
//           )}
//         />
//       </div>
//     )
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   updateCollections: collectionsMap =>
//   dispatch(updateCollections(collectionsMap))
// });

// export default connect(null, mapDispatchToProps)(ShopPage);


// import React from 'react';
// import { Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
// import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

// import WithSpinner from '../../components/with-spinner/with-spinner.component';

// import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
// import CollectionPage from '../collection/collection.component';

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// class ShopPage extends React.Component {


//   componentDidMount() {
//     const { fetchCollectionsStartAsync } = this.props;
//     fetchCollectionsStartAsync();
//   }


//   render() {
//     const { match, isCollectionFetching } = this.props;
//     return (
//       <div className='shop-page'>
//         <Route
//           exact
//           path={`${match.path}`}
//           render={props => (
//             <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
//           )}
//         />
//         <Route
//           path={`${match.path}/:collectionId`}
//           render={props => (
//             <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />
//           )}
//         />
//       </div>
//     );
//   }
// }

// const mapStateToProps = createStructuredSelector({
//   isCollectionFetching: selectIsCollectionFetching
// });

// const mapDispatchToProps = dispatch => ({
//   fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
// });

// export default connect(
//   null,
//   mapDispatchToProps
// )(ShopPage);
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection-container';

class ShopPage extends React.Component {


  componentDidMount() {
    const { fetchCollectionsStart } = this.props;

    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
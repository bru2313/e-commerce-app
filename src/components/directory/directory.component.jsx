import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';
import Layout from '../../components/layout';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

const Directory = ({ sections }) => (
  <Layout>
    <div className='directory-menu'>
        {
          sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps}/>
            ))
        }
    </div>
  </Layout>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
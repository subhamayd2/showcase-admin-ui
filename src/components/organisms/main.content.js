import React from 'react';
import withStyles, { useStyles } from '../utils/withStyles';
import { withStore } from '../../services/nav.store';
import AddItemTab from '../molecules/tab-panes/AddItemTab';
import ManageItemsTab from '../molecules/tab-panes/ManageItemsTab';

const MainContent = ({ store: { tab }, classes: { layout } }) => {
  switch (tab) {
    case '0':
      return <AddItemTab />;
    case '1':
      return <ManageItemsTab />;
    default:
      return null;
  }
};

const styles = useStyles({
  layout: {
    minHeight: '100vh'
  }
});

export default withStyles(styles)(withStore(MainContent));

import React from 'react';
import AddItem from '../../organisms/addItem';
import withStyles, { useStyles } from '../../utils/withStyles';

const AddItemTab = ({ classes: { wrapper } }) => {
  return (
    <div className={wrapper}>
      <AddItem />
    </div>
  );
};

const styles = useStyles({
  wrapper: {
    padding: 10
  }
});

export default withStyles(styles)(AddItemTab);

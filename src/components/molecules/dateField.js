import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import withStyles, { useStyles } from '../utils/withStyles';

const DateField = ({ classes: { inputBox }, value, onChange, ...rest }) => {
  const dateFormat = 'DD/MM/YYYY';
  const onChangeHandler = (_, dateString) => {
    onChange(dateString);
  };
  return (
    <DatePicker
      className={inputBox}
      value={moment(value, dateFormat)}
      onChange={onChangeHandler}
      format={dateFormat}
      {...rest}
    />
  );
};

DateField.defaultProps = {
  value: '01/01/2019'
};

const styles = useStyles({
  inputBox: {
    width: '100%'
  }
});
export default withStyles(styles)(DateField);

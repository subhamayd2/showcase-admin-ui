import React, { useState } from 'react';
import { PageHeader, Tabs, Typography } from 'antd';
import withStyles, { useStyles } from '../utils/withStyles';
import { withStore } from '../../services/nav.store';

const { Title } = Typography;
const { TabPane } = Tabs;

const Header = ({ store: { tab, changeTab }, classes: { appbar, title } }) => {
  return (
    <PageHeader
      className={appbar}
      title={
        <Title className={title} level={3}>
          {process.env.REACT_APP_NAME}
        </Title>
      }
      footer={
        <Tabs activeKey={tab} onChange={key => changeTab(key)}>
          <TabPane tab="Add Item" key="0" />
          <TabPane tab="Manage Items" key="1" />
        </Tabs>
      }
    />
  );
};

const styles = useStyles({
  appbar: {
    background: '#fff'
    // borderBottom: '10px solid #03A9F4'
  },
  title: {
    color: ['#03A9F4', '!important']
  }
});

export default withStyles(styles)(withStore(Header));

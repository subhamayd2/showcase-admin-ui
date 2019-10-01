import React from 'react';
import { Layout } from 'antd';
import Header from '../molecules/header';
import withStyles, { useStyles } from '../utils/withStyles';
import MainContent from '../organisms/main.content';

const { Content } = Layout;

const MainLayout = ({ classes: { layout } }) => {
  return (
    <Layout className={layout}>
      <Header />
      <Content>
        <MainContent />
      </Content>
    </Layout>
  );
};

const styles = useStyles({
  layout: {
    minHeight: '100vh'
  }
});

export default withStyles(styles)(MainLayout);

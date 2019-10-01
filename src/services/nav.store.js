import React from 'react';
import { decorate, observable } from 'mobx';
import { observer } from 'mobx-react';

class NavStore {
  tab = '0';
  changeTab = newTab => {
    this.tab = newTab;
  };
}

decorate(NavStore, {
  tab: observable
});

const NavStoreInstance = new NavStore();
export default NavStoreInstance;

const withStore = Component => props => {
  const ObservableComponent = observer(Component);
  return <ObservableComponent store={NavStoreInstance} {...props} />;
};

export { withStore };

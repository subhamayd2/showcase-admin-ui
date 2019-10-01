import React from 'react';
import { decorate, observable } from 'mobx';
import { observer } from 'mobx-react';
import { remove } from 'lodash';

class DummyStore {
  items = [];
  colors = [];
  tags = [];

  addItem = item => {
    this.items.push(item);
  };

  removeItem = itemId => {
    remove(this.items, ({ _id }) => _id === itemId);
  };

  updateItem = newItem => {
    const newItems = [];
    this.items.forEach(item => {
      if (item._id !== newItem._id) {
        newItems.push(item);
      } else {
        const { _id, ...rest } = newItem;
        newItems.push({
          ...item,
          ...rest
        });
      }
    });
    this.items = newItems;
  };

  addColor = color => {
    this.colors.push(color);
  };
  removeColor = color => {
    remove(this.colors, _color => _color === color);
  };

  addTag = tag => {
    this.tags.push(tag);
  };
  removeTag = tag => {
    remove(this.tags, _tag => _tag === tag);
  };
}

decorate(DummyStore, {
  items: observable,
  colors: observable,
  tags: observable
});

const DummyStoreInstance = new DummyStore();
export default DummyStoreInstance;

const withStore = Component => props => {
  const ObservableComponent = observer(Component);
  return <ObservableComponent store={DummyStoreInstance} {...props} />;
};

export { withStore };

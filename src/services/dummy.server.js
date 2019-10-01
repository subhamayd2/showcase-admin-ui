import DummyStoreInstance from './dummy.store';
import { isEmpty, every, keys } from 'lodash';

export const _getItems = (query = '') => {
  if (isEmpty(query)) {
    return new Promise(resolve => resolve(DummyStoreInstance.items));
  }
  return new Promise(resolve =>
    resolve(
      DummyStoreInstance.items.filter(
        ({ name }) => name.toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    )
  );
};

export const _addItem = item => {
  return new Promise((resolve, reject) => {
    const isValid = every(keys(item), key => !isEmpty(item[key]));
    if (!isValid) {
      reject({ message: 'Provide all data for an Item' });
    }
    DummyStoreInstance.addItem(item);
    resolve(true);
  });
};

export const _removeItem = itemId => {
  return new Promise((resolve, reject) => {
    const isValid = !isEmpty(itemId);
    if (!isValid) {
      reject({ message: 'Provide an Item Id' });
    }
    DummyStoreInstance.removeItem(itemId);
    resolve(true);
  });
};

export const _updateItem = newItem => {
  return new Promise((resolve, reject) => {
    const isValid = every(keys(newItem), key => !isEmpty(newItem[key]));
    if (!isValid) {
      reject({ message: 'Provide all data for an Item' });
    }
    DummyStoreInstance.updateItem(newItem);
    resolve(true);
  });
};

export const _addColor = color => {
  return new Promise((resolve, reject) => {
    const isValid = !isEmpty(color);
    if (!isValid) {
      reject({ message: 'Provide a valid color' });
    }
    DummyStoreInstance.addColor(color);
    resolve(true);
  });
};

export const _removeColor = color => {
  return new Promise((resolve, reject) => {
    const isValid = !isEmpty(color);
    if (!isValid) {
      reject({ message: 'Provide a valid color' });
    }
    DummyStoreInstance.removeColor(color);
    resolve(true);
  });
};

export const _addTag = tag => {
  return new Promise((resolve, reject) => {
    const isValid = !isEmpty(tag);
    if (!isValid) {
      reject({ message: 'Provide a valid tag' });
    }
    DummyStoreInstance.addTag(tag);
    resolve(true);
  });
};

export const _removeTag = tag => {
  return new Promise((resolve, reject) => {
    const isValid = !isEmpty(tag);
    if (!isValid) {
      reject({ message: 'Provide a valid tag' });
    }
    DummyStoreInstance.removeTag(tag);
    resolve(true);
  });
};

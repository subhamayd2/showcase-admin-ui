// import * as axios from 'axios';
import { _getItems } from './dummy.server';

export const getItems = (query = '') => {
  return _getItems(query);
};

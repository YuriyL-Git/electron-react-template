import firstApi from './first-api';
import secondApi from './second-api';
import { settings } from './settings';

export const nodeApi = {
  firstApi,
  secondApi,
  settings,
};

export type NodeApi = typeof nodeApi;

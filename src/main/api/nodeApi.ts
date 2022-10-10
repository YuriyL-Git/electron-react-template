import firstApi from './first-api';
import { settings } from './settings';

export const nodeApi = {
  firstApi,
  settings,
};

export type NodeApi = typeof nodeApi;

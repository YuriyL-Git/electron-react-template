import firstApi from './first-api';
import { settings } from './settings';
import { generate } from './generate';

export const nodeApi = {
  firstApi,
  settings,
  generate,
};

export type NodeApi = typeof nodeApi;

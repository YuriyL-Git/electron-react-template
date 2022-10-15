import firstApi from './first-api';
import { settings } from './settings';
import { generate } from './generate';
import { server } from './server';

export const nodeApi = {
  firstApi,
  settings,
  generate,
  server,
};

export type NodeApi = typeof nodeApi;

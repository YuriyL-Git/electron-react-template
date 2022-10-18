import firstApi from './first-api';
import { settings } from './settings';
import { generate } from './generate';
import { server } from './server';
import { transform } from './transform';

export const nodeApi = {
  firstApi,
  settings,
  generate,
  server,
  transform,
};

export type NodeApi = typeof nodeApi;

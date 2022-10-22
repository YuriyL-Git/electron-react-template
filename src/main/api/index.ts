import firstApi from './first-api';
import { settings } from './settings';
import { generate } from './generate';
import { server } from './server';
import { tsmorph } from './tsmorph';

export const nodeApi = {
  firstApi,
  settings,
  generate,
  server,
  tsmorph,
};

export type NodeApi = typeof nodeApi;

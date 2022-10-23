import firstApi from './first-api';
import { settings } from './settings';
import { generate } from './generate';
import { ideClient } from './ide-client';
import { tsmorph } from './tsmorph';

export const nodeApi = {
  firstApi,
  settings,
  generate,
  ideClient,
  tsmorph,
};

export type NodeApi = typeof nodeApi;

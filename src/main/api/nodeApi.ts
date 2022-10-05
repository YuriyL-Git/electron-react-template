import firstApi from './first-api';
import secondApi from './second-api';

export const nodeApi = {
  firstApi,
  secondApi,
};

export type NodeApi = typeof nodeApi;

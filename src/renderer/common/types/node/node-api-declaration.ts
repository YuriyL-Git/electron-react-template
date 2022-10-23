import { NodeApi } from '../../../../main/api';

declare global {
  interface Window {
    nodeApi: NodeApi;
  }
}

export const { nodeApi } = window;

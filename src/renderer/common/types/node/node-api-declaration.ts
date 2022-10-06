import { NodeApi } from '../../../../main/api/nodeApi';

declare global {
  interface Window {
    nodeApi: NodeApi;
  }
}
export const { nodeApi } = window;

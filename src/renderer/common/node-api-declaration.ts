import { NodeApi } from '../../main/api/nodeApi';

declare global {
  interface Window {
    nodeApi: NodeApi;
  }
}
console.log(window);
export const { nodeApi } = window;

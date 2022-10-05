import { NodeApi } from '../../main/api/nodeApi';

declare global {
  interface Window {
    nodeApi: NodeApi;
  }
}

const { nodeApi } = window;

export default nodeApi;

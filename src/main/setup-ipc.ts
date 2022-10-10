import { onFileRequest } from './ipc-listeners/on-file-request';

export function setupIpc() {
  onFileRequest();
}

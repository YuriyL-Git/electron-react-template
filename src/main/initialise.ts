import { onFileRequest } from './ipc-listeners/on-file-request';

export function initialise() {
  onFileRequest();
}

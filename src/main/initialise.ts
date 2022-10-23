import { onFileRequest } from './ipc-listeners/on-file-request';
import { app } from './server/server';

export function initialise() {
  onFileRequest();
  app.listen(3131, () => {
    console.log('Server is started on port 3131');
  });
}

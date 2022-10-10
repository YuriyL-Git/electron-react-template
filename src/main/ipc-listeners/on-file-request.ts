import path from 'path';

const { dialog, ipcMain } = require('electron');

export function onFileRequest() {
  ipcMain.on('file-request', (event) => {
    // If the platform is 'win32' or 'Linux'
    if (process.platform !== 'darwin') {
      // Resolves to a Promise<Object>
      dialog
        .showOpenDialog({
          title: 'Select the File to be uploaded',
          defaultPath: path.join(__dirname, '../assets/'),
          buttonLabel: 'Open',
          // Restricting the user to only Text Files.
          // Specifying the File Selector Property
          properties: ['openDirectory'],
        })
        .then((file) => {
          // Stating whether dialog operation was
          // cancelled or not.
          if (!file.canceled) {
            const filepath = file.filePaths[0].toString();
            console.log(filepath);
            event.reply('file-request', filepath);
          }

          return null;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // If the platform is 'darwin' (macOS)
      dialog
        .showOpenDialog({
          title: 'Open Folder',
          defaultPath: path.join(__dirname, '../assets/'),
          buttonLabel: 'Open',
          // Specifying the File Selector and Directory
          // Selector Property In macOS
          properties: ['openDirectory'],
        })
        .then((file) => {
          // eslint-disable-next-line promise/always-return
          if (!file.canceled) {
            const filepath = file.filePaths[0].toString();
            event.reply('file-request', filepath);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
}

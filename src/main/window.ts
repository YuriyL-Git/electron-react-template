import { BrowserWindow, ipcMain } from 'electron';

export function setupWindow(window: BrowserWindow) {
  ipcMain.on('reload', async (event, arg) => {
    window.webContents.reload();
    //  event.reply('ipc-example', msgTemplate('pong'));
  });
}

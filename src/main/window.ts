import { BrowserWindow, ipcMain } from 'electron';

export function setupWindow(window: BrowserWindow) {
  ipcMain.on('reload', async () => {
    window.webContents.reload();
  });
}

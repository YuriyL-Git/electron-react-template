import { exec } from 'child_process';
import { ipcMain } from 'electron';

const firstApi = {
  async execute() {
    return new Promise((resolve, reject) => {
      exec(
        `cd d:\\Projects\\my-redwood-project\\ && yarn redwood generate page firstPage /firstpage`,
        (error, stdout, stderr) => {
          if (error) {
            console.log(`error: ${error.message}`);
            reject(error.message);
          }
          if (stderr) {
            console.log(`stderr: ${stderr}`);
            reject(stderr);
          }

          resolve(stdout);
          console.log(`stdout: ${stdout}`);
        }
      );
    });
  },
};

export default firstApi;

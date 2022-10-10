import fs from 'fs';
import util from 'util';
import settingsFile from '../../../settings.json';

type SettingsType = typeof settingsFile;

let isFileBusy = false;

async function saveSettingsFile(file: SettingsType) {
  if (isFileBusy) {
    await new Promise<void>((resolve) => {
      setInterval(() => {
        if (!isFileBusy) {
          resolve();
        }
      }, 50);
    });
  }

  isFileBusy = true;
  fs.writeFile(
    `${process.env.PWD}/settings.json`,
    JSON.stringify(file, null, 4),
    (err) => {
      if (err) {
        console.log(err);
      }
      isFileBusy = false;
    }
  );
}

function findIndex<T>(array: Array<T>, value: T): number {
  return array.findIndex((currVal) => {
    if (typeof value === 'object') {
      return util.isDeepStrictEqual(currVal, value);
    }

    return value === currVal;
  });
}

export const settings = {
  get<T extends keyof SettingsType>(key: T): typeof settingsFile[T] {
    return settingsFile[key];
  },

  set<T extends keyof SettingsType>(
    key: T,
    value: typeof settingsFile[T] extends Record<string, any>
      ? never
      : typeof settingsFile[T]
  ) {
    settingsFile[key] = value;
    saveSettingsFile(settingsFile);
  },

  // array values can be as simple types so objects
  addToList<T extends keyof SettingsType>(
    key: typeof settingsFile[T] extends Array<any> ? T : never,
    value: typeof settingsFile[T] extends Array<any>
      ? typeof settingsFile[T][number]
      : never,
    isUnique = true
  ) {
    const array = settingsFile[key];
    if (Array.isArray(array) && (!isUnique || findIndex(array, value) === -1)) {
      array.push(value);
      settingsFile[key] = array;
      saveSettingsFile(settingsFile);
    }
  },

  removeFromList<T extends keyof SettingsType>(
    key: typeof settingsFile[T] extends Array<any> ? T : never,
    value: typeof settingsFile[T] extends Array<any>
      ? typeof settingsFile[T][number]
      : never
  ) {
    const array = settingsFile[key];
    if (Array.isArray(array)) {
      const index = findIndex(array, value);
      if (index > -1) {
        array.splice(index, 1);
        settingsFile[key] = array;
        saveSettingsFile(settingsFile);
      }
    }
  },
};

import fs from 'fs';
import settingsFile from '../../../settings.json';

type SettingsType = typeof settingsFile;

export const settings = {
  get(key: keyof SettingsType) {
    return settingsFile[key];
  },

  set<T extends keyof SettingsType>(key: T, value: typeof settingsFile[T]) {
    settingsFile[key] = value;
    fs.writeFileSync(
      `${process.env.PWD}/settings.json`,
      JSON.stringify(settingsFile, null, 4)
    );
  },
};

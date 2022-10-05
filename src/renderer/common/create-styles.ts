import { SxProps } from '@mui/system';

export function createStyles<T extends { [name: string]: SxProps }>(
  stylesObject: T
) {
  return stylesObject;
}

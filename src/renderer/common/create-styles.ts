import { SxProps } from '@mui/material';

export function createStyles<T extends { [name: string]: SxProps }>(
  stylesObject: T
) {
  return stylesObject;
}

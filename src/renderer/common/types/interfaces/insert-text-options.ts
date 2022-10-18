import { SourceFile } from 'ts-morph';
import { IdeData } from './ide-data';

export interface InsertTextOpts {
  source: SourceFile;
  text: string;
  ideData: IdeData;
}

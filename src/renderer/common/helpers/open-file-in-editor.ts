import { nodeApi } from '../types/node/node-api-declaration';
import { moveCaret } from './move-caret';

interface OpenFileProps {
  file: string;
  line: number;
  column: number;
}

export async function openFileInEditor({ file, column, line }: OpenFileProps) {
  await nodeApi.server.sendMessage(`openFile::${file}`);
  await moveCaret({
    line,
    column,
  });
}

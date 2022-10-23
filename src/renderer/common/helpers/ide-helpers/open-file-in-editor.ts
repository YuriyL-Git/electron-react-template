import { moveCaret } from './move-caret';
import { NodeApi } from '../../../../main/api';

interface OpenFileProps {
  file: string | null;
  line: number;
  column: number;
}

export async function openFileInEditor(
  nodeApi: NodeApi,
  { file, column, line }: OpenFileProps
) {
  if (!file) {
    return;
  }

  await nodeApi.ideClient.sendMessage(`openFile::${file}`);
  await moveCaret(nodeApi, {
    line,
    column,
  });
}

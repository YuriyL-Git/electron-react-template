import { moveCaret } from './move-caret';
import { NodeApi } from '../../../../main/api';

interface OpenFileProps {
  file: string | null;
  line: number | null;
  column: number | null;
}

export async function openFileInEditor(
  nodeApi: NodeApi,
  { file, column, line }: OpenFileProps
) {
  if (!file || column === null || line === null) {
    return;
  }

  await nodeApi.ideClient.sendMessage(`openFile::${file}`);
  await moveCaret(nodeApi, {
    line,
    column,
  });
}

// eslint-disable-next-line import/no-cycle
import { nodeApi } from '../../types/node/node-api-declaration';
import { IdeData } from '../../types/interfaces/ide-data';

export async function getIdeData(): Promise<IdeData> {
  const editorCode = await nodeApi.server.sendMessage('editorText');
  const caretLine = Number(await nodeApi.server.sendMessage('caretLine'));
  const caretColumn = Number(await nodeApi.server.sendMessage('caretColumn'));
  const filePath = (await nodeApi.server.sendMessage('filePath')).replace(
    '\r\n',
    ''
  );
  const fileName = (await nodeApi.server.sendMessage('fileName')).replace(
    '\r\n',
    ''
  );

  return {
    editorCode,
    caretLine,
    caretColumn,
    filePath,
    fileName,
  };
}

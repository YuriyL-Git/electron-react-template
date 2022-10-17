import { nodeApi } from '../types/node/node-api-declaration';

export interface IdeData {
  editorCode: string;
  caretLine: number;
  caretColumn: number;
}

export async function getIdeData(): Promise<IdeData> {
  const editorCode = await nodeApi.server.sendMessage('editorText');
  const caretLine = Number(await nodeApi.server.sendMessage('caretLine'));
  const caretColumn = Number(await nodeApi.server.sendMessage('caretColumn'));

  return {
    editorCode,
    caretLine,
    caretColumn,
  };
}

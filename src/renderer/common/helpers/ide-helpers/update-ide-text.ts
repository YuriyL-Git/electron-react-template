import { nodeApi } from '../../types/node/node-api-declaration';
import { IdeData } from '../../types/interfaces/ide-data';
import { moveCaret } from './move-caret';

export async function updateIdeText(text: string, ideData: IdeData) {
  await nodeApi.server.sendMessage(`code::${text.replaceAll('\n', '*&*')}`);

  await moveCaret({
    line: ideData.caretLine,
    column: ideData.caretColumn,
  });
}

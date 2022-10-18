import { nodeApi } from '../types/node/node-api-declaration';
import { IdeData } from '../types/interfaces/ide-data';

export async function updateIdeText(text: string, ideData: IdeData) {
  await nodeApi.server.sendMessage(`code::${text.replaceAll('\n', '*&*')}`);
  await nodeApi.server.sendMessage(
    `moveCaret::${ideData.caretLine} ${ideData.caretColumn}`
  );
}

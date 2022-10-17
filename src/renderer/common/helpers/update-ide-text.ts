import { nodeApi } from '../types/node/node-api-declaration';

export async function updateIdeText(text: string) {
  await nodeApi.server.sendMessage(`code::${text.replaceAll('\n', '*&*')}`);
}

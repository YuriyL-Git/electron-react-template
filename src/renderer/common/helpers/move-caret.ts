import { nodeApi } from '../types/node/node-api-declaration';

export async function moveCaret({
  line,
  column,
}: {
  line: number;
  column: number;
}) {
  return nodeApi.server.sendMessage(`moveCaret::${line} ${column}`);
}

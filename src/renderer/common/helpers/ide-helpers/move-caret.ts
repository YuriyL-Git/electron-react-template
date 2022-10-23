import { NodeApi } from '../../../../main/api';

export async function moveCaret(
  nodeApi: NodeApi,
  {
    line,
    column,
  }: {
    line: number;
    column: number;
  }
) {
  return nodeApi.ideClient.sendMessage(`moveCaret::${line} ${column}`);
}

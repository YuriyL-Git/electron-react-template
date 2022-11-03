import { IdeData } from '../../types/interfaces/ide-data';
import { moveCaret } from './move-caret';
import { NodeApi } from '../../../../main/api';

interface UpdateIdeTextProps {
  nodeApi: NodeApi;
  editorText: string;
  ideData: IdeData;
}

export async function updateIdeText({
  editorText,
  ideData,
  nodeApi,
}: UpdateIdeTextProps) {
  await nodeApi.ideClient.sendMessage(
    `code::${editorText.replaceAll('\n', '*&*')}`
  );

  await moveCaret(nodeApi, {
    line: ideData.caretLine,
    column: ideData.caretColumn,
  });
}

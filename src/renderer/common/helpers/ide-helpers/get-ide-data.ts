// eslint-disable-next-line import/no-cycle
import { NodeApi } from '../../../../main/api';
import { IdeData } from '../../types/interfaces/ide-data';

export async function getIdeData(nodeApi: NodeApi): Promise<IdeData> {
  const editorCode = await nodeApi.ideClient.sendMessage('editorText');
  const selectedText = (
    await nodeApi.ideClient.sendMessage('selectedText')
  ).trim();

  let selectionStart = null;
  let selectionEnd = null;

  if (selectedText !== 'null') {
    selectionStart = Number(
      await nodeApi.ideClient.sendMessage('selectionStart')
    );
    selectionEnd = Number(await nodeApi.ideClient.sendMessage('selectionEnd'));
  }

  const caretLine = Number(await nodeApi.ideClient.sendMessage('caretLine'));
  const caretColumn = Number(
    await nodeApi.ideClient.sendMessage('caretColumn')
  );
  const filePath = (await nodeApi.ideClient.sendMessage('filePath')).replace(
    '\r\n',
    ''
  );
  const fileName = (await nodeApi.ideClient.sendMessage('fileName')).replace(
    '\r\n',
    ''
  );

  return {
    editorCode,
    caretLine,
    caretColumn,
    filePath,
    fileName,
    selectionStart,
    selectionEnd,
    selectedText:
      selectedText !== 'Wrong command' && selectedText !== 'null'
        ? selectedText
        : '',
  };
}

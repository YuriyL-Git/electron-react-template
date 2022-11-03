import express from 'express';
import { getIdeData } from '../../renderer/common/helpers/ide-helpers/get-ide-data';
import { nodeApi } from '../api';
import { openFileInEditor } from '../../renderer/common/helpers/ide-helpers/open-file-in-editor';
import { updateIdeText } from '../../renderer/common/helpers/ide-helpers/update-ide-text';

export const app = express();

app.get('/move-to-class', async (req, res) => {
  const ideData = await getIdeData(nodeApi);
  const openFileData = await nodeApi.tsmorph.getCssClassImplementation(ideData);
  await openFileInEditor(nodeApi, openFileData);

  res.send({ message: `success` });
});

app.get('/console-selected-variable', async (req, res) => {
  const ideData = await getIdeData(nodeApi);
  const editorText = nodeApi.tsmorph.addConsoleLog(ideData);
  if (editorText) {
    updateIdeText({
      nodeApi,
      ideData,
      editorText,
    });
  }

  res.send({ message: `success` });
});

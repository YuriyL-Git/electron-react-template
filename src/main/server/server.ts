import express from 'express';
import { getIdeData } from '../../renderer/common/helpers/ide-helpers/get-ide-data';
import { nodeApi } from '../api';
import { openFileInEditor } from '../../renderer/common/helpers/ide-helpers/open-file-in-editor';

export const app = express();

app.get('/move-to-class', async (req, res) => {
  const ideData = await getIdeData(nodeApi);
  const openFileData = await nodeApi.tsmorph.getCssClassImplementation(ideData);
  await openFileInEditor(nodeApi, openFileData);

  res.send({ message: ideData.editorCode });
});

app.get('/console-selected-variable', async (req, res) => {
  const ideData = await getIdeData(nodeApi);
  console.log('selected text =', ideData.selectedText);

  res.send({ message: ideData.editorCode });
});

import { Project, SourceFile } from 'ts-morph';
import { IdeData } from '../../renderer/common/types/interfaces/ide-data';

export function transformCode(
  ideData: IdeData,
  transformFunc: (sourceFile: SourceFile, ideData: IdeData) => SourceFile
) {
  const project = new Project();
  const sourceFile = project.createSourceFile('code.ts', ideData.editorCode, {
    overwrite: true,
  });

  return transformFunc(sourceFile, ideData);
}

import { Project, SourceFile } from 'ts-morph';
import { IdeData } from '../../renderer/common/types/interfaces/ide-data';

export function getSource(ideData: IdeData): SourceFile {
  const project = new Project();
  return project.createSourceFile('code.ts', ideData.editorCode, {
    overwrite: true,
  });
}

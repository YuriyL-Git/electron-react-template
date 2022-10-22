// eslint-disable-next-line import/no-cycle
import path from 'path';
import { getSource } from '../tsmorph-helpers/get-source';
import { IdeData } from '../../renderer/common/types/interfaces/ide-data';
import { addImport } from '../tsmorph-helpers/add-import';
import { insertTextToIde } from '../tsmorph-helpers/insert-text-to-ide';
import fs from 'fs';

export const tsmorph = {
  addUseState(ideData: IdeData) {
    const source = getSource(ideData);

    addImport(source, {
      moduleName: './slices/leaderBoard',
      namedImport: 'initialLeaderBoardState',
      defaultImport: 'leaderBoard',
    });

    insertTextToIde({ source, ideData, text: 'const [] = useState()' });

    return source.getText();
  },

  async getClassDeclarationData(ideData: IdeData) {
    const source = getSource(ideData);
    const caretPosition = source.compilerNode.getPositionOfLineAndCharacter(
      ideData.caretLine,
      ideData.caretColumn
    );

    const getClassesObjectName = () => {
      let isFound = false;
      let node = source.getDescendantAtPos(caretPosition);

      while (!isFound) {
        node = node?.getFirstAncestor();
        if (node == null || node?.getText().includes('{')) {
          isFound = true;
        }
      }
      const result = node
        ?.getText()
        .replace('{', '')
        .replace('}', '')
        .trim()
        .split('.')[0];

      return result && /^[a-z0-9]+$/i.test(result) ? result : null;
    };

    const getHookName = (className: string | null) => {
      if (!className) {
        return null;
      }

      const declaration = source
        .getDescendantStatements()
        .find((st) => st.getText().trim().startsWith(`const ${className}`))
        ?.getText();

      if (!declaration) {
        return null;
      }

      return declaration
        .split('=')[1]
        .replace('()', '')
        .replace(';', '')
        .trim();
    };

    const getImportPath = (hookName: string | null) => {
      if (!hookName) {
        return null;
      }

      const hookImport = source
        .getImportDeclarations()
        .find((decl) =>
          decl.getNamedImports().some((imp) => imp.getText() === hookName)
        );

      return (
        hookImport
          ?.getText()
          ?.split('from')[1]
          ?.replace(';', '')
          ?.replaceAll("'", '')
          ?.replaceAll('"', '')
          ?.trim() || null
      );
    };

    const className = getClassesObjectName();
    const hookName = getHookName(className);
    const importPath = getImportPath(hookName);
    const folderPath = ideData.filePath.replace(ideData.fileName, '');

    let file = importPath
      ? path.normalize(path.join(folderPath, importPath))
      : null;

    if (fs.existsSync(`${file}.ts`)) {
      file = `${file}.ts`;
    } else if (fs.existsSync(`${file}.tsx`)) {
      file = `${file}.tsx`;
    } else if (!fs.existsSync(`${file}`)) {
      file = null;
    }

    return {
      file,
      column: 1,
      line: 4,
    };
  },
};

// eslint-disable-next-line import/no-cycle
import path from 'path';
import fs from 'fs';
import { Project } from 'ts-morph';
import { getSource } from '../tsmorph-helpers/get-source';
import { IdeData } from '../../renderer/common/types/interfaces/ide-data';
import { addImport } from '../tsmorph-helpers/add-import';
import { insertTextToIde } from '../tsmorph-helpers/insert-text-to-ide';

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

  async getCssClassImplementation(ideData: IdeData) {
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
      const names = node
        ?.getText()
        .replace('{', '')
        .replace('}', '')
        .trim()
        .split('.');

      const className =
        names && /^[a-z0-9-_]+$/i.test(names[0]) ? names[0] : null;

      const classPropertyName =
        names && /^[a-z0-9-_]+$/i.test(names[1]) ? names[1] : null;

      return {
        className,
        classPropertyName,
      };
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

      return declaration.split('=')[1].split('(')[0].trim();
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

    const getClassFilePath = (importPath: string | null) => {
      const folderPath = ideData.filePath.replace(ideData.fileName, '');

      let file: string | null = importPath
        ? path.normalize(path.join(folderPath, importPath))
        : ideData.filePath; // in case if implementation is on the same file

      if (fs.existsSync(`${file}.ts`)) {
        file = `${file}.ts`;
      } else if (fs.existsSync(`${file}.tsx`)) {
        file = `${file}.tsx`;
      } else if (!fs.existsSync(`${file}`)) {
        file = null;
      }
      return file;
    };

    const getClassLine = (
      file: string | null,
      hookName: string | null,
      classPropertyName: string | null
    ) => {
      if (!file || !hookName || !classPropertyName) {
        return null;
      }

      let result: { line: number | null; column: number | null } = {
        line: null,
        column: null,
      };

      const project = new Project();

      const classSource = project.addSourceFileAtPath(file);
      const hookDeclaration = classSource
        ?.getVariableDeclarations()
        .find((decl) => decl.getName() === hookName);

      hookDeclaration
        ?.getDescendants()
        .filter((st) => st.getKindName() === 'PropertyAssignment')
        .forEach((st) => console.log(st.getText()));

      const classImplement = hookDeclaration
        ?.getDescendants()
        .find(
          (st) =>
            st.getKindName() === 'PropertyAssignment' &&
            (st.getText().trim().startsWith(`${classPropertyName}:`) ||
              st.getText().trim().startsWith(`${classPropertyName} :`))
        );

      console.log('pos', classImplement?.getPos());

      if (classImplement) {
        result = classSource.getLineAndColumnAtPos(classImplement?.getPos());
      }
      console.log('result', result);

      return result.line;
    };

    const classNamings = getClassesObjectName();
    const hookName = getHookName(classNamings.className);
    const importPath = getImportPath(hookName);
    const file = getClassFilePath(importPath);
    const line = getClassLine(file, hookName, classNamings.classPropertyName);

    return {
      file,
      column: 0,
      line,
    };
  },
};

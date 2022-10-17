import { SourceFile } from 'ts-morph';
import { IdeData } from '../../renderer/common/types/interfaces/ide-data';
import { includesWithQuotes } from '../utils/includes-wiht-quotes';

export function addUseState(sourceFile: SourceFile, ideData: IdeData) {
  const isReactImported = sourceFile
    .getImportDeclarations()
    .some((decl) => includesWithQuotes(decl.getText(), 'react'));

  if (!isReactImported) {
    sourceFile.addImportDeclaration({
      moduleSpecifier: 'react',
      defaultImport: 'React',
    });
  }

  sourceFile
    .getImportDeclarations()
    .find(
      (decl) =>
        includesWithQuotes(decl.getText(), 'react') &&
        !decl.getText().includes('useState')
    )
    ?.addNamedImport('useState');
  console.log(
    'ideData.caretLine',
    (ideData.caretLine + 1) * (ideData.caretColumn + 1)
  );

  //  TODO calculate correct text position
  sourceFile.insertText(
    ideData.caretLine,
    'const [test, setTest] = useState();'
  );

  return sourceFile;
}

import { SourceFile } from 'ts-morph';
import { includesWithQuotes } from '../utils/includes-wiht-quotes';
import { ImportOptions } from '../../renderer/common/types/interfaces/import-options';

export function addImport(
  sourceFile: SourceFile,
  { namedImport, defaultImport, moduleName }: ImportOptions
) {
  const isModuleImported = sourceFile.getImportDeclarations().some((decl) => {
    return (
      decl.getModuleSpecifier().getText().replace(/['"]/g, '') === moduleName
    );
  });

  if (!isModuleImported) {
    sourceFile.addImportDeclaration({
      moduleSpecifier: moduleName,
      defaultImport,
    });
  }

  const importDeclaration = sourceFile
    .getImportDeclarations()
    .find((decl) => includesWithQuotes(decl.getText(), moduleName));

  if (namedImport) {
    const isImportPresent = importDeclaration?.getNamedImports().some((imp) => {
      return imp.getText() === namedImport;
    });
    if (!isImportPresent) {
      importDeclaration?.addNamedImport(namedImport);
    }
  }

  if (defaultImport && !importDeclaration?.getDefaultImport()?.getText()) {
    importDeclaration?.setDefaultImport(defaultImport);
  }
}

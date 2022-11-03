import { InsertTextOpts } from '../../renderer/common/types/interfaces/insert-text-options';

export function insertTextToSource({ text, source, ideData }: InsertTextOpts) {
  const position = source.compilerNode.getPositionOfLineAndCharacter(
    ideData.caretLine,
    ideData.caretColumn
  );
  source.insertText(position, text);
}

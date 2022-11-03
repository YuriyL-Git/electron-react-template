export interface IdeData {
  editorCode: string;
  filePath: string;
  fileName: string;
  caretLine: number;
  caretColumn: number;
  selectedText: string;
  selectionStart: number | null;
  selectionEnd: number | null;
}

import { SourceFile } from 'ts-morph';

interface GetNodeProps {
  source: SourceFile;
  searchText: string;
  pos: number;
}

export function getNodeThatContains({ pos, searchText, source }: GetNodeProps) {
  let isFound = false;
  let node = source.getDescendantAtPos(pos);

  while (!isFound && node) {
    node = node?.getFirstAncestor();
    if (node == null || node?.getText().includes(searchText)) {
      isFound = true;
    }
  }

  return node;
}

export interface fileStructureType {
  id: string;
  name: string;
  isFolder: boolean;
  isExpanded?: boolean;
  isRoot?: boolean;
  childrens: Array<fileStructureType>;
}

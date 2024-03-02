import React, { FC, useState } from "react";
import { fileStructureType } from "../../Types/common";
import "./FileExplorer.css";
import FileItem from "./Folder";
import Folder from "./Folder";

type fileExplorerPropsType = {
  fileStructure: fileStructureType;
};

const FileExplorer: FC<fileExplorerPropsType> = ({ fileStructure }) => {
  const [folderStructureData, setFolderStructure] = useState(fileStructure);

  // const filesRenderer = (
  //   files: Array<fileStructureType>
  // ): JSX.Element | JSX.Element[] => {
  //   return files?.map((file, i: number) => {
  //     return <FileItem file={file} />;
  //   });
  // };

  return <Folder file={folderStructureData} />;
};

export default FileExplorer;

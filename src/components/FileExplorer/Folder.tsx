import React, { FC, useState } from "react";
import FileExplorer from "./FileExplorer";

const Folder: FC<any> = ({ file }): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showNewFolderField, setShowNewFolderField] = useState(false);
  const [inputValue, setInputValue] = useState({ input: "", isFolder: false });

  const createFolderHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    isFolder: boolean
  ) => {
    console.log("e", e.target.name);
    const name = e.target.value;
    setInputValue({ input: name, isFolder });
  };

  const enterEventHandler = () => {
    // setShowNewFolderField((prevVal) => !prevVal);
    // const childrens = file.childrens;
    // if (childrens && childrens?.length > 0) {
    //   const newChildFolder = {
    //     id: new Date(),
    //     name: folderName,
    //     childrens: [],
    //     isFolder: true,
    //   };
    //   childrens.unshift(newChildFolder);
    // }
  };

  return (
    <>
      {file.isFolder ? (
        <div>
          <div
            onClick={() => setIsExpanded((prevVal) => !prevVal)}
            className="fileName"
          >
            <span>📂 {file.name}</span>
            <div>
              <button onClick={() => setShowNewFolderField(true)}>
                Folder +
              </button>
              <button>File +</button>
            </div>
          </div>
          {/* <div>
            {showNewFolderField && (
              <input
                type="text"
                value={folderName}
                placeholder="folder name"
                onChange={(e) => createFolderHandler(e)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") enterEventHandler();
                }}
              />
            )}
          </div> */}
        </div>
      ) : (
        <div> 📁{file.name}</div>
      )}
      <div style={{ marginLeft: "12px" }}>
        {isExpanded && <FileExplorer fileStructure={file.childrens} />}
      </div>
    </>
  );
};

export default Folder;

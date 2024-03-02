import { fileStructureType } from "../../../Types/common";

const fileStructre: fileStructureType = {
  name: "rootFolder",
  isFolder: true,
  id: "001",
  childrens: [
    {
      id: "01",
      name: "root",
      isFolder: true,
      childrens: [
        {
          id: "101",
          name: "public",
          isFolder: true,
          childrens: [
            {
              id: "1001",
              name: "index.html",
              isFolder: false,
              childrens: [],
            },
            {
              id: "1002",
              name: "hello.html",
              isFolder: false,
              childrens: [],
            },
          ],
        },
      ],
    },
    {
      id: "02",
      name: "src",
      isFolder: true,
      childrens: [
        {
          id: "102",
          name: "components",
          isFolder: true,
          childrens: [
            {
              id: "1003",
              name: "Component1.html",
              isFolder: false,
              childrens: [],
            },
            {
              id: "1004",
              name: "Component2.html",
              isFolder: false,
              childrens: [],
            },
          ],
        },
        {
          id: "03",
          name: "layouts",
          isFolder: true,
          childrens: [
            {
              id: "110",
              name: "pages",
              isFolder: true,
              childrens: [
                {
                  id: "1006",
                  name: "page1.html",
                  isFolder: false,
                  childrens: [],
                },
                {
                  id: "1008",
                  name: "page2.html",
                  isFolder: false,
                  childrens: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
export default fileStructre;

import React from "react";
import "./App.css";
//import GridLights from "./components/GridLights/GridLights";
import FileExplorer from "./components/FileExplorer/FileExplorer";
import fileStructre from "./components/FileExplorer/data/FileStructure";
import { employeeList } from "./components/EmployeeManagement/EmployeeData";
import EmployeeList from "./components/EmployeeManagement/EmployeeList";
import EmployeeManagement from "./components/EmployeeManagement/EmployeeManagement";

function App() {
  return (
    <div className="AppWrapper">
      {/* <FileExplorer fileStructure={fileStructre} /> */}
      <EmployeeManagement />
    </div>
    // <div className="App" style={{ textAlign: "center" }}>
    //   {/* <GridLights /> */}

    // </div>
  );
}

export default App;

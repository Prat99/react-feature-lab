import React from "react";
import "./App.css";
//import GridLights from "./components/GridLights/GridLights";
import FileExplorer from "./components/FileExplorer/FileExplorer";
import fileStructre from "./components/FileExplorer/data/FileStructure";
import { employeeList } from "./components/EmployeeManagement/EmployeeData";
import EmployeeList from "./components/EmployeeManagement/EmployeeList";
import EmployeeManagement from "./components/EmployeeManagement/EmployeeManagement";
import Stepper from "./components/Stepper/Stepper";
import StopWatch from "./components/StopWatch/StopWatch";
import ProgressbarContainer from "./components/Progressbar/Progressbar";
import ControlledProgressbarContainer from "./components/Progressbar/ControlledProgressbar";

function App() {
  return (
    <div className="AppWrapper">
      {/* <FileExplorer fileStructure={fileStructre} /> */}
      {/* <EmployeeManagement /> */}
      {/* <Stepper /> */}
      {/* <StopWatch /> */}
      {/* <ProgressbarContainer /> */}
      <ControlledProgressbarContainer />
    </div>
    // <div className="App" style={{ textAlign: "center" }}>
    //   {/* <GridLights /> */}

    // </div>
  );
}

export default App;

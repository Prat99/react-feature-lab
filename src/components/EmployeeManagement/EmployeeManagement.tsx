import React, { useState } from "react";
import EmployeeList from "./EmployeeList";
import { employeeList } from "./EmployeeData";
import EmployeeDetails from "./EmployeeDetails";
import "./EmployeeManagement.css";
import { IEmployee } from "./EmployeeTypes";
import AddEmployee from "./AddEmployee";

const EmployeeManagement = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [employees, setEmployees] = useState<IEmployee[]>(employeeList);
  const [selectedEmployee, setSelectedEmployee] = useState<IEmployee | null>(
    null
  );

  const deleteEmployeeHandler = (id: string) => {
    const allEmp = [...employees];
    const newEmployees = allEmp.filter((item) => item.id !== id);
    setEmployees(newEmployees);
  };

  return (
    <div className="EmployeeManagementContainer">
      <button onClick={() => setOpenModal(true)}>Add Employee</button>
      <div>
        <AddEmployee
          isOpen={openModal}
          setOpenModal={setOpenModal}
          setEmployees={setEmployees}
        />
      </div>

      <div className="EmployeeManagementWrapper">
        <div className="leftPanel">
          <EmployeeList
            employeeList={employees}
            setSelectedEmployee={setSelectedEmployee}
            deleteEmployeeHandler={deleteEmployeeHandler}
          />
        </div>
        <div className="rightPanel">
          <EmployeeDetails selectedEmployee={selectedEmployee} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagement;

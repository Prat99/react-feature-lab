import React, { Dispatch, FC, SetStateAction } from "react";
import { IEmployee } from "./EmployeeTypes";

interface IEmployeeList {
  employeeList: Array<IEmployee>;
  setSelectedEmployee: Dispatch<SetStateAction<IEmployee | null>>;
  deleteEmployeeHandler: (arg: string) => void;
}

const EmployeeList: FC<IEmployeeList> = ({
  employeeList,
  setSelectedEmployee,
  deleteEmployeeHandler,
}) => {
  const renderEmployeeList = () => {
    return employeeList?.map((employee, i) => {
      return (
        <div key={i} className="employeeListItem_block">
          <p
            className="employeeListItem"
            onClick={() => setSelectedEmployee(employee)}
          >
            <span>{employee.firstName}</span>
            <span>{employee.lastName}</span>
            <span>&nbsp;({employee.age})</span>
          </p>
          <button onClick={() => deleteEmployeeHandler(employee.id)}>❌</button>
        </div>
      );
    });
  };

  return <div>{renderEmployeeList()}</div>;
};

export default EmployeeList;

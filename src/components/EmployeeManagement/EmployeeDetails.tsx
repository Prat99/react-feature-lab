import React, { FC } from "react";
import { IEmployee } from "./EmployeeTypes";

interface IEmployeeDetails {
  selectedEmployee: IEmployee | null;
}

const EmployeeDetails: FC<IEmployeeDetails> = ({
  selectedEmployee,
}): JSX.Element | null => {
  if (!selectedEmployee) return <p>Select employee to see its details</p>;

  const { firstName, lastName, age, email, mobile, address, dob } =
    selectedEmployee;

  return (
    <div>
      <p>
        <span>{firstName}</span>
        <span>{lastName}</span>
        <span>&nbsp;({age})</span>
      </p>
      <p>{email}</p>
      <p>{mobile}</p>
      <p>{address}</p>
      <p>{dob}</p>
    </div>
  );
};

export default EmployeeDetails;

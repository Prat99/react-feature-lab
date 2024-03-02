import React, { Dispatch, FC, SetStateAction, useState } from "react";
import Modal from "react-modal";
import { v4 as uuidv4 } from "uuid";
import "./EmployeeManagement.css";
import { IEmployee } from "./EmployeeTypes";

interface IAddEmployee {
  isOpen: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setEmployees: Dispatch<SetStateAction<IEmployee[]>>;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AddEmployee: FC<IAddEmployee> = ({
  isOpen,
  setOpenModal,
  setEmployees,
}) => {
  console.log("isOpen", isOpen);

  const [inputs, setInputs] = useState<IEmployee>({
    id: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: "male",
    address: "",
    mobile: "",
    email: "",
    dob: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    console.log("handle change ==>", name, value);
    setInputs((p) => ({ ...p, [name]: value }));
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const value = e.target.value;
    console.log("handle change ==>", value);
    setInputs((p) => ({ ...p, gender: value }));
  };

  const handleAddEmployee = () => {
    const id = uuidv4();
    const newEmployee = { ...inputs, id } as IEmployee;
    console.log("new employee ===>", newEmployee);
    setEmployees((p) => [...p, newEmployee]);
  };

  // console.log("modal is open ==>", modalIsOpen);

  return (
    <div className="addEmployeeModal">
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setOpenModal(false)}
        style={customStyles}
        contentLabel="Add Employee"
      >
        <div onClick={() => setOpenModal(false)}>❌</div>
        <div className="addEmpForm">
          <label htmlFor="firstName">
            Enter First name:
            <input
              type="text"
              name="firstName"
              value={inputs?.firstName || ""}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="lastName">
            Enter last name:
            <input
              type="text"
              name="lastName"
              value={inputs?.lastName || ""}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="age">
            Enter age:
            <input
              type="number"
              name="age"
              value={inputs?.age || ""}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="gender">
            Select gender:
            <select
              value={inputs?.gender || ""}
              onChange={handleChange}
              name="gender"
            >
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </label>

          <label htmlFor="address">
            Enter address:
            <input
              type="text"
              name="address"
              value={inputs?.address || ""}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="mobile">
            Enter email:
            <input
              type="text"
              name="email"
              value={inputs?.email || ""}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="mobile">
            Enter mobile:
            <input
              type="number"
              name="mobile"
              value={inputs?.mobile || ""}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="dob">
            Enter dob:
            <input
              type="text"
              name="dob"
              value={inputs?.dob || ""}
              onChange={handleChange}
            />
          </label>
          <button type="button" onClick={handleAddEmployee}>
            Add
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddEmployee;

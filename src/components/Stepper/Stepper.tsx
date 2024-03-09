import React, { useState } from "react";
import "./Stepper.css";

const STEPPER_ARR = [
  {
    id: 1,
    name: "customer Info",
    component: () => <div>Provide your contact details</div>,
  },
  {
    id: 2,
    name: "Shipping Info",
    component: () => <div>Enter your Shipping Info</div>,
  },
  {
    id: 3,
    name: "Payment",
    component: () => <div>Provide your payment details</div>,
  },
  {
    id: 4,
    name: "delievered",
    component: () => <div>Your order has been delievered</div>,
  },
];

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Array<number>>([]);

  const handleNextBtnClick = () => {
    const completed = [...completedSteps];
    completed.push(currentStep);
    setCompletedSteps(completed);
    setCurrentStep((p) => p + 1);
  };

  return (
    <div className="stepperContainer">
      <div className="stepperHeading">Checkout</div>
      <div className="stepperWrapper">
        {STEPPER_ARR?.map((item, i) => {
          return (
            <>
              <div key={i}>
                <p
                  className={`step ${currentStep === i ? "stepActive" : null} ${
                    completedSteps.includes(i) ? "stepCompleted" : null
                  }`}
                >
                  <span> {completedSteps.includes(i) ? "✔️" : i + 1}</span>
                </p>
                <p>{item.name}</p>
              </div>
              {i < STEPPER_ARR?.length - 1 ? (
                <div
                  className={`stepConnector  ${
                    completedSteps.includes(i) ? "stepCompleted" : null
                  }`}
                ></div>
              ) : null}
            </>
          );
        })}
      </div>
      <div className="stepperNxtBtn">
        <button onClick={handleNextBtnClick}>Next</button>
      </div>
      <div className="stepperComponent">
        {STEPPER_ARR[currentStep]?.component()}
      </div>
    </div>
  );
};

export default Stepper;

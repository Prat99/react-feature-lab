import React, { useState, useEffect, FC } from "react";
import "./Progressbar.css";

export default function ControlledProgressbarContainer() {
  const [bars, setBars] = useState(1);
  const [numFilledUpBars, setNumFilledUpBars] = useState(0);
  const [isProgressing, setIsProgressing] = useState(false);
  const [isReset, setIsReset] = useState(false);

  console.log("numFilledUpBars ==>", numFilledUpBars);

  const resethandler = () => {
    setBars(1);
    setNumFilledUpBars(0);
    setIsProgressing(false);
    setIsReset(true);
  };

  const startHandler = () => {
    setIsProgressing(!isProgressing);
    setIsReset(false);
  };

  return (
    <>
      <div className="buttons">
        <button onClick={() => setBars((p) => p + 1)}>Add</button>
        <button onClick={startHandler}>
          {isProgressing ? "Pause" : "Start"}
        </button>
        <button onClick={resethandler}>Reset</button>
      </div>
      {Array.from({ length: bars }).map((_, i) => (
        <Progressbar
          key={i}
          index={i + 1}
          canStartFilling={numFilledUpBars === i}
          onCompleted={() => setNumFilledUpBars(() => numFilledUpBars + 1)}
          isReset={isReset}
          isProgressing={isProgressing}
        />
      ))}
    </>
  );
}

const Progressbar: FC<{
  index: number;
  canStartFilling: boolean;
  onCompleted: () => void;
  isProgressing: boolean;
  isReset: boolean;
}> = ({ index, canStartFilling, onCompleted, isProgressing, isReset }) => {
  const [value, setvalue] = useState(0);

  useEffect(() => {
    let id: any;
    if (isReset) {
      setvalue(0);
    }
    if (!isProgressing) return;
    if (canStartFilling) {
      if (value < 100) {
        id = setTimeout(() => {
          setvalue((p) => p + 1);
        }, 20);
      } else {
        onCompleted();
      }
    }
    return () => clearTimeout(id);
  }, [value, canStartFilling, isProgressing]);

  return (
    <div className="progress">
      <div className="progress-bar" style={{ width: `${value}%` }}></div>
    </div>
  );
};

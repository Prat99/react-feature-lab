import React, { useState, useEffect, FC } from "react";
import "./Progressbar.css";

export default function ProgressbarContainer() {
  const [bars, setBars] = useState(0);
  const [numFilledUpBars, setNumFilledUpBars] = useState(0);

  return (
    <>
      <button onClick={() => setBars((p) => p + 1)}>Add</button>
      {Array.from({ length: bars }).map((_, i) => (
        <Progressbar
          key={i}
          index={i + 1}
          canStartFilling={numFilledUpBars === i}
          onCompleted={() => setNumFilledUpBars(() => numFilledUpBars + 1)}
        />
      ))}
    </>
  );
}

const Progressbar: FC<{
  index: number;
  canStartFilling: boolean;
  onCompleted: () => void;
}> = ({ index, canStartFilling, onCompleted }) => {
  const [value, setvalue] = useState(0);

  useEffect(() => {
    let id: any;
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
  }, [value, canStartFilling]);

  return (
    <div className="progress">
      <div className="progress-bar" style={{ width: `${value}%` }}></div>
    </div>
  );
};

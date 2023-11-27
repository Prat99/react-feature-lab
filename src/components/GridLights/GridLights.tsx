import React, { useState } from "react";
import "./GridLights.css";

const GRID_LENGTH = 9;

const GridLights = (): JSX.Element => {
  const [selectedBoxes, setSelectedBoxes] = useState<Array<number>>([]);

  const boxClickHandler = (i: number): void => {
    const currentSelectedBoxes = [...selectedBoxes];
    currentSelectedBoxes.push(i);
    setSelectedBoxes([...new Set(currentSelectedBoxes)]);
    if (currentSelectedBoxes?.length === GRID_LENGTH) {
      startDeactivatingBoxes();
    }
  };

  const startDeactivatingBoxes = (): void => {
    const timer = setInterval(() => {
      setSelectedBoxes((prevItem) => {
        const currentSelectedBoxes = prevItem.slice();
        currentSelectedBoxes.pop();
        if (currentSelectedBoxes.length === 0) {
          clearInterval(timer);
        }
        return currentSelectedBoxes;
      });
    }, 300);
  };

  return (
    <div className="boxContainer">
      {Array.from({ length: GRID_LENGTH }).map((_, i: number) => (
        <div
          key={i}
          className={`box ${selectedBoxes?.includes(i) ? "selected-box" : ""}`}
          onClick={() => boxClickHandler(i)}
        ></div>
      ))}
    </div>
  );
};

export default GridLights;

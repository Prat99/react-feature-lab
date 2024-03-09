import React, { useCallback, useEffect, useState } from "react";
import "./StopWatch.css";

const StopWatch = () => {
  const [hrs, setHrs] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const [controller, setController] = useState(false);

  const timer = useCallback(() => {
    if (secs === 59) {
      console.log("secs running", secs);
      setSecs(0);
      setMins((p) => p + 1);
    } else if (mins === 59) {
      setMins(0);
      setHrs((p) => p + 1);
    } else {
      setSecs((p) => Number(p) + 1);
    }
  }, [secs, mins]);

  useEffect(() => {
    let id: any;
    if (controller) {
      id = setTimeout(() => {
        timer();
      }, 1000);
    }
    return () => {
      if (controller) {
        clearTimeout(id);
      }
    };
  }, [controller, secs, timer]);

  const startHandler = () => {
    setController(true);
  };

  const stopHandler = () => {
    setController(false);
  };

  const resetHandler = () => {
    setSecs(0);
    setMins(0);
    setHrs(0);
    setController(false);
  };

  return (
    <div className="container">
      <div className="container__timer">
        <span className="container__timer--label">
          {hrs?.toString()?.padStart(2, "0")}
        </span>
        <span className="container__timer--colon">:</span>
        <span className="container__timer--label">
          {mins?.toString()?.padStart(2, "0")}
        </span>
        <span className="container__timer--colon">:</span>
        <span className="container__timer--label">
          {secs?.toString()?.padStart(2, "0")}
        </span>
      </div>
      <div>
        <div className="btns">
          <button onClick={startHandler} className="btn start">
            Start
          </button>
          <button onClick={stopHandler} className="btn stop">
            Stop
          </button>
          <button onClick={resetHandler} className="btn reset">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;

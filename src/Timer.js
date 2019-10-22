import React, { useState, useEffect } from "react";
import moment from "moment";

const Timer = () => {
  //Today at 7pm;
  const expiration = moment()
    .startOf("day")
    .hour(19);
  const difference = expiration.diff(moment(), "seconds");
  //days // hours // minutes // seconds
  const [seconds, setSeconds] = useState(difference);

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <time className="font-bold text-xl  text-red-600">
      {moment.utc(seconds * 1000).format("HH:mm:ss")}
    </time>
  );
};

export default Timer;

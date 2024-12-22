import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko"; // 한국어 지원 추가

const CurrentTime = () => {
  const [timeDay, setTimeDay] = useState({
    time: dayjs().format("HH:mm:ss"),
    day: dayjs().format("dddd"),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeDay({
        time: dayjs().format("HH:mm:ss"),
        day: dayjs().format("dddd"),
      });
    }, 1000);

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 클린업
  }, []);

  return (
    <div style={{ marginBottom: "10px" }}>
      <span style={{ color: "skyblue" }}>{timeDay.day}</span>{" "}
      <span style={{ color: "white" }}>{timeDay.time}</span>
    </div>
  );
};

export default CurrentTime;

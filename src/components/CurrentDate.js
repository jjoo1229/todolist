import React from "react";

const CurrentDate = () => {
  const today = new Date();

  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  return <div style={{ color: "white" }}>{formattedDate}</div>;
};

export default CurrentDate;

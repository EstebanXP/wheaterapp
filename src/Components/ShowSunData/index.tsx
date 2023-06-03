import React from "react";

interface Props {
  children: React.ReactNode;
  time: string;
  description: string;
  noon: string;
  //sunData: sys
}

const ShowSunData = ({ children, time, description, noon }: Props) => {
  //const {sunrise,sunset} = sunData;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {` ${description} ${time} ${noon}`}
      {children}
    </div>
  );
};

export default ShowSunData;

import React from "react";

interface Props {
  children: React.ReactNode;
  description: string;
  title: string;
  //sunData: sys
}

const ShowGeneralData = ({ children, description, title }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {` ${title} ${description} `}
      {children}
    </div>
  );
};

export default ShowGeneralData;

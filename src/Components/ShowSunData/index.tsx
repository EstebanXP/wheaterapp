import React from "react";

interface Props {
  /**
   * The children components to be rendered inside the component.
   */
  children: React.ReactNode;
  /**
   * The time of the sun data.
   */
  time: string;
  /**
   * The description of the sun data.
   */
  description: string;
  /**
   * The noon indicator for the sun data.
   */
  noon: string;
}

/**
 * Component that displays the sun data.
 */

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

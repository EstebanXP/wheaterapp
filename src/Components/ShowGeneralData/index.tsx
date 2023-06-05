import React from "react";

interface Props {
  /**
   * The children components to be rendered inside the component.
   */
  children: React.ReactNode;
  /**
   * The description of the general data.
   */
  description: string;
  /**
   * The title of the general data.
   */
  title: string;
}

/**
 * Component that displays general data.
 */

const ShowGeneralData = ({ children, description, title }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {` ${title} ${description} `} {children}
    </div>
  );
};

export default ShowGeneralData;

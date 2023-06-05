import React from "react";
import { Box, Card } from "@mui/material";

interface Props {
  /**
   * The children components to be rendered inside the component.
   */
  children: React.ReactNode;
}

/**
 * Component that wraps its children components inside a card container.
 */
const CardContainerChildren = ({ children }: Props) => {
  return (
    <div>
      <Card className="CardComponent" sx={{ width: "30vw" }}>
        <Box
          className="MainWeatherDescription"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {children}
        </Box>
      </Card>
    </div>
  );
};

export default CardContainerChildren;

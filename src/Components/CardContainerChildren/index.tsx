import React from "react";
import { Box, Card } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const CardContainerChildren = ({ children }: Props) => {
  return (
    <div>
      <Card className="CardComponent">
        <Box /*className="MainWeatherDescription"*/>{children}</Box>
      </Card>
    </div>
  );
};

export default CardContainerChildren;

import React from "react";
import { Box, Card } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const CardContainerChildren = ({ children }: Props) => {
  return (
    <div>
      <Card className="CardComponent" sx={{width: "30vw"}}>
        <Box className="MainWeatherDescription" sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>{children}</Box>
      </Card>
    </div>
  );
};

export default CardContainerChildren;

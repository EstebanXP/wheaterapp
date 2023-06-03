import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const SearchWeatherForm = () => {
  const [openModal, setopenModal] = useState<boolean>(false);

  const handleClickOpen = () => {
    setopenModal(true);
  };
  const handleClose = () => {
    setopenModal(false);
  };

  return (
    <div>
      <button onClick={handleClickOpen}>Test</button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        className="genericModal"
        open={openModal}
      >
        <DialogTitle>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent className="genericModalContent">
          <div style={{width: "35vw", height: "25vh"}}>
            asdasdasdas
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SearchWeatherForm;

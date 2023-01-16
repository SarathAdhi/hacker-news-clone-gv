import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import { Component } from "../types/page";
import CloseIcon from "@mui/icons-material/Close";

type SimpleDialogProps = {
  open: boolean;
  title?: string;
  onClose: () => void;
} & Component;

export const DialogBox: React.FC<SimpleDialogProps> = ({
  onClose,
  open,
  title,
  children,
  className,
}) => {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>
        {title}

        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent className={className}>{children}</DialogContent>
    </Dialog>
  );
};

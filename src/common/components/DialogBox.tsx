import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import { Component } from "../types/page";

type SimpleDialogProps = {
  open: boolean;
  title?: string;
  onClose: (value: boolean) => void;
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
      <DialogTitle>{title}</DialogTitle>
      <DialogContent className={className}>{children}</DialogContent>
    </Dialog>
  );
};

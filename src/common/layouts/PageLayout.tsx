import { Container } from "@mui/material";
import clsx from "clsx";
import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Component } from "../types/page";

type Props = {
  title: string;
} & Component;

export const PageLayout: React.FC<Props> = ({ title, className, children }) => {
  useEffect(() => {
    if (title) document.title = title;
  }, []);

  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      <Navbar />

      <Container className={clsx("py-5 flex-1", className)}>
        {children}
      </Container>
    </main>
  );
};

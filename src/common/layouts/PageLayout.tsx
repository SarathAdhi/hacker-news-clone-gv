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
    <>
      <Navbar />
      <main className={className}>{children}</main>
    </>
  );
};

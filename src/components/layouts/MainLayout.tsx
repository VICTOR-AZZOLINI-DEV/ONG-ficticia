import React from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className={`${inter.className}`}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;

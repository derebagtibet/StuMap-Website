import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { ScrollToHash } from "../common/ScrollToHash";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface MainLayoutProps {
  children?: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-white">
      <ScrollToHash />
      <Navbar />
      <main className="flex-1">{children ?? <Outlet />}</main>
      <Footer />
    </div>
  );
};

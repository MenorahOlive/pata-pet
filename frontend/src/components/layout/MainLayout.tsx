import MenuBar from "./MenuBar";
import NavBar from "./NavBar";
import type { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavBar />
      <div className="h-screen overflow-scroll">{children}</div>
      <MenuBar />
    </>
  );
};

export default MainLayout;

"use client";

import { LuMenu, LuX } from "react-icons/lu";

import { Button } from "../../../components/ui/button";
import SidebarActions from "./components/sidebarActions/SidebarActions";
import SidebarContent from "./components/sidebarContent/SidebarContent";
import SidebarFooter from "./components/sidebarFooter/SidebarFooter";
import { useSidebar } from "./useSidebar";

const Sidebar = () => {
  const {
    asideClassName,
    isShow,
    isCollapsed,
    setIsCollapsed,
    setIsShow,
    handleSidebarShow,
  } = useSidebar();

  return (
    <>
      <aside className={asideClassName}>
        <SidebarActions
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />

        <SidebarContent isCollapsed={isCollapsed} setIsShow={setIsShow} />

        <SidebarFooter isCollapsed={isCollapsed} />
      </aside>

      <Button
        className="fixed h-12 w-12 p-2 right-4 top-20 rounded-full bg-primary md:hidden"
        onClick={handleSidebarShow}
        title="Menu"
        size="icon"
      >
        <LuMenu
          size={28}
          className={`transition-all ${
            isShow ? "rotate-90 scale-0" : "rotate-0 scale-100"
          } `}
        />

        <LuX
          size={28}
          className={`absolute transition-all ${
            isShow ? "rotate-0 scale-100" : "-rotate-90 scale-0"
          } `}
        />
      </Button>
    </>
  );
};

export default Sidebar;

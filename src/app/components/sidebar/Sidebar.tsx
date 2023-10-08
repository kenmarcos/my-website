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
        className="fixed z-10 h-12 w-12 p-2 right-[68px] top-4 rounded-full bg-primary md:hidden"
        onClick={handleSidebarShow}
        title="Menu"
      >
        {!isShow && <LuMenu size={28} />}
        {isShow && <LuX size={28} />}
      </Button>
    </>
  );
};

export default Sidebar;

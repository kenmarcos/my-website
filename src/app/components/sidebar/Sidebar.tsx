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
    handleSidebarShow,
  } = useSidebar();

  return (
    <>
      {isShow && (
        <aside className={asideClassName}>
          <SidebarActions
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />

          <SidebarContent isCollapsed={isCollapsed} />

          <SidebarFooter isCollapsed={isCollapsed} />
        </aside>
      )}

      <Button
        className="fixed z-10 h-12 w-12 p-2 right-4 top-4 rounded-full bg-blue-primary md:hidden"
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

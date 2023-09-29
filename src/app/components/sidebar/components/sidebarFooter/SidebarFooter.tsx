"use client";

interface sidebarFooterProps {
  isCollapsed: boolean;
}

const SidebarFooter = ({ isCollapsed }: sidebarFooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-center pb-2"
      title="Desenvolvido por Marcos Kenji Kuribayashi"
    >
      {!isCollapsed && (
        <span className="text-xs animate-fade-in">
          {currentYear} - Desenvolvido por Marcos Kenji Kuribayashi{" "}
        </span>
      )}
      <span className="cursor-default">😉</span>
    </footer>
  );
};

export default SidebarFooter;

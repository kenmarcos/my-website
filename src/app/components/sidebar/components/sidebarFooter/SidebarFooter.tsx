"use client";

interface sidebarFooterProps {
  isCollapsed: boolean;
}

const SidebarFooter = ({ isCollapsed }: sidebarFooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p
        className="text-xs text-center"
        title="Desenvolvido por Marcos Kenji Kuribayashi"
      >
        {!isCollapsed &&
          `${currentYear} - Desenvolvido por Marcos Kenji
            Kuribayashi `}
        <span className="cursor-default">😉</span>
      </p>
    </footer>
  );
};

export default SidebarFooter;

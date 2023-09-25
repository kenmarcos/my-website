import {
  LuComputer,
  LuFileText,
  LuFolderGit2,
  LuGithub,
  LuHome,
  LuLinkedin,
  LuMail,
  LuPhone,
  LuUser,
} from "react-icons/lu";

import { twMerge } from "tailwind-merge";

export const useSidebarContent = (isCollapsed: boolean) => {
  const socialLinks = [
    { name: "WhatsApp", href: "https://wa.me/5511942312965", icon: LuPhone },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/marcos-kuribayashi/",
      icon: LuLinkedin,
    },
    { name: "GitHub", href: "https://gitlab.com/kenmarcos", icon: LuGithub },
  ];

  const navLinks = [
    { name: "Home", href: "/", icon: LuHome },
    { name: "Sobre mim", href: "/#about", icon: LuUser },
    { name: "Habilidades", href: "/#skills", icon: LuComputer },
    {
      name: "Currículo",
      href: "https://drive.google.com/file/d/1dliLFFyLMfrCiAve5SycyjSCGqKCnmfF/view?usp=drive_link",
      icon: LuFileText,
    },
    { name: "Portfólio", href: "/portfolio", icon: LuFolderGit2 },
    { name: "Contatos", href: "/contacts", icon: LuMail },
  ];

  const avatarClassName = twMerge(
    isCollapsed ? "h-10 w-10 mb-4" : "h-28 w-28 border-8 border-gray-light"
  );

  const socialLinksClassName = twMerge(
    "flex gap-2",
    isCollapsed ? "flex-col" : "flex-row"
  );

  const navLinkClassName = twMerge(
    "flex items-center text-gray-light text-sm gap-1 rounded-sm py-3 hover:bg-gray-light duration-300 ease-in-out hover:text-gray-dark",
    isCollapsed ? "justify-center" : "justify-start px-2"
  );

  return {
    navLinks,
    socialLinks,
    avatarClassName,
    socialLinksClassName,
    navLinkClassName,
  };
};

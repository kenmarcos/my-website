import { useParams } from "next/navigation";
import { Dispatch, useEffect, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import {
  LuComputer,
  LuFileText,
  LuFolderGit2,
  LuGithub,
  LuHome,
  LuLinkedin,
  LuMail,
  LuUser,
} from "react-icons/lu";

import { twMerge } from "tailwind-merge";

export const useSidebarContent = (
  isCollapsed: boolean,
  setIsShow: Dispatch<React.SetStateAction<boolean>>
) => {
  const socialLinks = [
    {
      name: "WhatsApp",
      href: "https://wa.me/5511942312965",
      icon: IoLogoWhatsapp,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/marcos-kuribayashi/",
      icon: LuLinkedin,
    },
    { name: "GitHub", href: "https://gitlab.com/kenmarcos", icon: LuGithub },
  ];

  const navLinks = [
    { name: "Home", href: "/#hero", icon: LuHome },
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
  const [path, setPath] = useState("");
  const params = useParams();

  useEffect(() => {
    setPath(`${window.location.pathname}${window.location.hash}`);
  }, [params]);

  const avatarClassName = twMerge(
    "ease-in-out duration-500 hover:animate-flip-avatar",
    isCollapsed ? "h-10 w-10 mb-4" : "h-28 w-28 border-8 border-gray-light"
  );

  const titleClassName = twMerge(
    "w-52 text-center",
    isCollapsed ? "hidden" : "animate-fade-in block"
  );

  const socialLinksClassName = twMerge(
    "flex gap-2",
    isCollapsed ? "flex-col" : "flex-row"
  );

  const navLinkClassName = (href: string) => {
    return twMerge(
      "flex items-center text-sm gap-2 rounded-sm py-3 hover:bg-gray-light duration-300 ease-in-out hover:text-gray-dark",
      isCollapsed ? "justify-center" : "justify-start px-2",
      path === href ? "bg-gray-light text-gray-dark" : "text-gray-light"
    );
  };

  const closeSidebar = () => {
    if (window.innerWidth < 768) {
      setIsShow(false);
    }
  };

  return {
    navLinks,
    socialLinks,
    avatarClassName,
    titleClassName,
    socialLinksClassName,
    navLinkClassName,
    closeSidebar,
  };
};

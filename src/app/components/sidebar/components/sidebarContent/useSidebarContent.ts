import {
  FileTextIcon,
  FolderGit2Icon,
  GithubIcon,
  HomeIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  UserIcon,
} from "lucide-react";
import { twMerge } from "tailwind-merge";

export const useSidebarContent = (isCollapsed: boolean) => {
  const navLinks = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "Sobre mim", href: "/#about", icon: UserIcon },
    { name: "Currículo", href: "/about", icon: FileTextIcon },
    { name: "Portfólio", href: "/projects", icon: FolderGit2Icon },
    { name: "Contatos", href: "/contact", icon: MailIcon },
  ];

  const socialLinks = [
    { name: "WhatsApp", href: "https://wa.me/5511942312965", icon: PhoneIcon },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/marcos-kuribayashi/",
      icon: LinkedinIcon,
    },
    { name: "GitHub", href: "https://gitlab.com/kenmarcos", icon: GithubIcon },
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

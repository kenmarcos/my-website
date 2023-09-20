"use client";

import Link from "next/link";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

import {
  ChevronsLeft,
  ChevronsRight,
  FileTextIcon,
  FolderGit2Icon,
  GithubIcon,
  HomeIcon,
  LinkedinIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  UserIcon,
  XIcon,
} from "lucide-react";
import { twMerge } from "tailwind-merge";

const navLinks = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Sobre mim", href: "/", icon: UserIcon },
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

const Sidebar = () => {
  const [isShow, setIsShow] = useState(innerWidth > 768);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const asideClassName = twMerge(
    "absolute left-0 bg-blue-dark h-screen flex flex-col md:static ",
    isCollapsed ? "w-16 p-2" : "w-52 p-4"
  );

  const collapseButtonClassName = twMerge(
    "flex",
    isCollapsed ? "justify-center" : "justify-end"
  );

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

  const handleSidebarCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSidebarShow = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      {isShow && (
        <aside className={asideClassName}>
          <div className={collapseButtonClassName}>
            <Button
              className="bg-transparent px-0"
              onClick={handleSidebarCollapse}
            >
              {!isCollapsed && (
                <ChevronsLeft size={32} className="text-gray-light" />
              )}

              {isCollapsed && (
                <ChevronsRight size={32} className="text-gray-light" />
              )}
            </Button>
          </div>

          <div className="flex-1">
            <div className="flex flex-col items-center space-y-2 mt-4">
              <Link href="/" title="Marcos Kenji Kuribayashi">
                <Avatar className={avatarClassName}>
                  <AvatarImage src="https://github.com/kenmarcos.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Link>

              {!isCollapsed && (
                <Link href="/" className="w-52 text-center">
                  <h2 className="text-2xl font-semibold">
                    Marcos Kenji Kuribayashi
                  </h2>
                </Link>
              )}

              <nav>
                <ul className={socialLinksClassName}>
                  {socialLinks.map(({ name, href, icon: Icon }) => (
                    <li key={name}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-gray-primary rounded-full p-2 duration-300 ease-in-out hover:bg-gray-light"
                      >
                        <Icon size={14} fill="white" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <nav className="mt-10">
              <ul>
                {navLinks.map(({ icon: Icon, ...link }) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={navLinkClassName}
                      title={link.name}
                    >
                      <Icon size={20} />
                      {!isCollapsed && <p>{link.name}</p>}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <footer>
            <p
              className="text-xs text-center"
              title="Desenvolvido por Marcos Kenji Kuribayashi"
            >
              {!isCollapsed &&
                `${new Date().getFullYear()} - Desenvolvido por Marcos Kenji
            Kuribayashi `}
              <span className="cursor-default">😉</span>
            </p>
          </footer>
        </aside>
      )}

      <Button
        className="absolute h-12 w-12 p-2 right-4 top-4 rounded-full"
        onClick={handleSidebarShow}
        title="Menu"
      >
        {!isShow && <MenuIcon />}
        {isShow && <XIcon />}
      </Button>
    </>
  );
};

export default Sidebar;

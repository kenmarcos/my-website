"use client";

import Image from "next/image";
import Link from "next/link";
import React, { Dispatch } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar";

import { useSidebarContent } from "./useSidebarContent";

interface sidebarContentProps {
  isCollapsed: boolean;
  setIsShow: Dispatch<React.SetStateAction<boolean>>;
}

const SidebarContent = ({ isCollapsed, setIsShow }: sidebarContentProps) => {
  const {
    navLinks,
    socialLinks,
    avatarClassName,
    titleClassName,
    socialLinksClassName,
    navLinkClassName,
    closeSidebar,
  } = useSidebarContent(isCollapsed, setIsShow);

  return (
    <section className="flex-1 ">
      <div className="flex flex-col items-center space-y-4 bg-accent-foreground dark:bg-transparent py-4">
        <Link href="/" title="Marcos Kenji Kuribayashi">
          <Avatar className={avatarClassName}>
            <AvatarImage src="https://github.com/kenmarcos.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>

        <Link href="/" className={titleClassName}>
          <div className="relative h-12">
            <Image src="/logo.svg" alt="Logo" fill sizes="100%" />
          </div>
        </Link>

        <nav>
          <ul className={socialLinksClassName}>
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  title={name}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-secondary rounded-full p-2 duration-300 ease-in-out hover:bg-secondary-foreground"
                >
                  <Icon
                    size={14}
                    fill="#4f91f9"
                    border
                    className="text-primary"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <nav className="mt-4 px-4">
        <ul>
          {navLinks.map(({ icon: Icon, name, href }) => (
            <li key={name} onClick={closeSidebar}>
              <Link
                href={href}
                className={navLinkClassName(href)}
                title={name}
                target={name === "Currículo" ? "_blank" : "_self"}
                rel={name === "Currículo" ? "noopener noreferrer" : undefined}
              >
                <Icon size={20} />
                {!isCollapsed && <p className="animate-fade-in">{name}</p>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default SidebarContent;

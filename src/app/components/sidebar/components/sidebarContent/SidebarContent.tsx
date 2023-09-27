"use client";

import Link from "next/link";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar";

import { useSidebarContent } from "./useSidebarContent";

interface sidebarContentProps {
  isCollapsed: boolean;
}

const SidebarContent = ({ isCollapsed }: sidebarContentProps) => {
  const {
    navLinks,
    socialLinks,
    avatarClassName,
    socialLinksClassName,
    navLinkClassName,
  } = useSidebarContent(isCollapsed);

  return (
    <section className="flex-1">
      <div className="flex flex-col items-center space-y-2 mt-4">
        <Link href="/" title="Marcos Kenji Kuribayashi">
          <Avatar className={avatarClassName}>
            <AvatarImage src="https://github.com/kenmarcos.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>

        {!isCollapsed && (
          <Link href="/" className="w-52 text-center">
            <h2 className="text-2xl font-semibold">Marcos Kenji Kuribayashi</h2>
          </Link>
        )}

        <nav>
          <ul className={socialLinksClassName}>
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  title={name}
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

      <nav className="mt-8">
        <ul>
          {navLinks.map(({ icon: Icon, name, href }) => (
            <li key={name}>
              <Link
                href={href}
                className={navLinkClassName(href)}
                title={name}
                target={name === "Currículo" ? "_blank" : "_self"}
                rel={name === "Currículo" ? "noopener noreferrer" : undefined}
              >
                <Icon size={20} />
                {!isCollapsed && <p>{name}</p>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default SidebarContent;

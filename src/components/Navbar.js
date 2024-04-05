import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Header from "./Header"
export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about-us",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact-us",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>
  );
}
const DummyContent = () => {
  return (
    <div className="grid grid-cols-1 h-[10vh] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
        <Header/>
      <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
    </div>
  );
};

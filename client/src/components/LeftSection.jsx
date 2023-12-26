import React from "react";
import { ExternalLinkIcon, LogOutIcon, PlusIcon, SunIcon, MoonIcon, UserIcon } from "../assets/icons";

const LeftSection = ({ toggleDarkMode, isDarkMode }) => {

  const options = [
    {
      icon: <UserIcon />, text: "Upgrade to Plus"
    },
    {
      icon: isDarkMode ? <SunIcon /> : <MoonIcon /> ,
      text: isDarkMode ? "Light Mode" : "Dark Mode",
      onClick: toggleDarkMode,
    },
    {
      icon: <ExternalLinkIcon />, text: "Get Help"
    },
    {
      icon: <LogOutIcon />, text: "Log out"
    }
  ];

  return (
    <div className="flex flex-col bg-black fixed top-0 bottom-0 w-[260px]">
      <div className="flex h-full min-h-0 flex-col">
        <div className="flex h-full w-full flex-1 items-start border-white/20">
          <nav className="flex h-full flex-1 flex-col space-y-1 p-2">
            <a className="flex py-3 items-center gap-3 rounded-md text-white cursor-pointer border border-white/20 text-sm mb-2 flex-shrink-0 px-3 hover:bg-gray-500/10">
              <PlusIcon /> New Chat
            </a>
            <div className="flex-col flex-1 overflow-y-auto border-b border-white/20"></div>
            {
              options.map((item) => (
                <a className="flex text-white cursor-pointer gap-3 py-3 rounded-md hover:bg-gray-500/10 items-center" key={item.text} onClick={item.onClick}>
                  {item.icon}
                  {item.text}
                </a>
              ))
            }
          </nav>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
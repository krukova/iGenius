/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { LayoutGrid011 } from "../../icons/LayoutGrid011";

export const SidebarItem = ({
  active,
  divClassName,
  icon = <LayoutGrid011 className="!relative !w-4 !h-4" opacity="0.4" />,
  text = "Reports",
  className,
}) => {
  return (
    <div
      className={`w-40 flex items-center gap-2 px-0 py-2 h-8 rounded-xl relative ${className}`}
    >
      {icon}
      <div
        className={`[font-family:'Geist',Helvetica] w-fit mt-[-1.00px] tracking-[-0.16px] text-base font-semibold leading-4 whitespace-nowrap relative ${active ? "text-[#00000099]" : "text-[#00000066]"} ${divClassName}`}
      >
        {text}
      </div>
    </div>
  );
};

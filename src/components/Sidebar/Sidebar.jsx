/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Clapperboard } from "../../icons/Clapperboard";
import { Coins012 } from "../../icons/Coins012";
import { HelpCircle } from "../../icons/HelpCircle";
import { LayoutGrid011 } from "../../icons/LayoutGrid011";
import { Lightning011 } from "../../icons/Lightning011";
import { Link01 } from "../../icons/Link01";
import { Route2 } from "../../icons/Route2";
import { User03 } from "../../icons/User03";
import { Users021 } from "../../icons/Users021";
import { SidebarItem } from "../SidebarItem";

export const Sidebar = ({
  className,
  sidebarItemDivClassName,
  sidebarItemIcon = <Route2 className="!relative !w-4 !h-4" />,
  sidebarItemDivClassNameOverride,
  override = <Clapperboard className="!relative !w-4 !h-4" opacity="0.6" />,
  sidebarItemDivClassName1,
  sidebarItemIcon1 = <Users021 className="!relative !w-4 !h-4" opacity="0.4" />,
  sidebarItemDivClassName2,
  sidebarItemDivClassName3,
  sidebarItemIcon2 = (
    <Lightning011 className="!relative !w-4 !h-4" color="#D69D0B" />
  ),
  sidebarItemDivClassName4,
  sidebarItemIcon3 = <Link01 className="!relative !w-4 !h-4" opacity="0.4" />,
  sidebarItemDivClassName5,
  sidebarItemIcon4 = <HelpCircle className="!relative !w-4 !h-4" />,
  reportsClassName,
  divClassName,
  text = "3",
}) => {
  return (
    <div
      className={`flex flex-col w-60 h-[982px] items-start relative bg-[#f0f0f0] ${className}`}
    >
      <div className="flex flex-col items-start justify-between pt-8 pb-4 px-8 relative flex-1 self-stretch w-full grow bg-[#f0f0f0] border-r [border-right-style:solid] border-gray-300">
        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-7 h-7 rounded-[7px]" />

          <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
            <SidebarItem
              active={false}
              divClassName={sidebarItemDivClassName}
              icon={
                <LayoutGrid011 className="!relative !w-4 !h-4" opacity="0.4" />
              }
              text="Reports"
            />
            <SidebarItem
              active={false}
              divClassName={sidebarItemDivClassNameOverride}
              icon={sidebarItemIcon}
              text="Programs"
            />
            <SidebarItem
              active
              divClassName={sidebarItemDivClassName1}
              icon={override}
              text="Course Studio"
            />
            <SidebarItem
              active={false}
              divClassName={sidebarItemDivClassName2}
              icon={sidebarItemIcon1}
              text="Users"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
              <SidebarItem
                active={false}
                className="!self-stretch !w-full"
                divClassName={sidebarItemDivClassName3}
                icon={sidebarItemIcon2}
                text="Upgrade"
              />
              <SidebarItem
                active={false}
                className="!self-stretch !w-full"
                divClassName={sidebarItemDivClassName4}
                icon={sidebarItemIcon3}
                text="Api"
              />
              <SidebarItem
                active={false}
                className="!self-stretch !w-full"
                divClassName={sidebarItemDivClassName5}
                icon={sidebarItemIcon4}
                text="Help"
              />
            </div>

            <img
              className="relative self-stretch w-full h-px object-cover"
              alt="Vector"
              src="https://c.animaapp.com/yV4iGrpq/img/vector-1-1.svg"
            />

            <div className="justify-between self-stretch w-full flex h-8 items-center px-0 py-2 relative rounded-xl">
              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <User03 className="!relative !w-4 !h-4" opacity="0.4" />
                <div
                  className={`text-[#00000066] relative w-fit mt-[-1.00px] [font-family:'Geist',Helvetica] font-semibold text-base tracking-[-0.16px] leading-4 whitespace-nowrap ${reportsClassName}`}
                >
                  Account
                </div>
              </div>

              <div className="inline-flex items-center gap-0.5 px-1 py-0.5 relative flex-[0_0_auto] mt-[-6.00px] mb-[-6.00px] bg-[#0000000a] rounded-lg">
                <Coins012 className="!relative !w-4 !h-4" />
                <div
                  className={`relative w-fit mt-[-1.00px] [font-family:'Geist',Helvetica] font-semibold text-[#00000099] text-base tracking-[-0.16px] leading-6 whitespace-nowrap ${divClassName}`}
                >
                  {text}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Check8 } from "../../icons/Check8";

export const Price = ({
  selected,
  className,
  divClassName,
  text = "Medium",
  divClassNameOverride,
  text1 = "$6",
  divClassName1,
  text2 = "6 lessons",
  divClassName2,
  divClassName3,
  divClassName4,
  frameClassName,
  check8Color = "black",
}) => {
  return (
    <div
      className={`flex flex-col items-start gap-4 px-4 py-6 rounded-2xl bg-[#0000000a] relative ${selected ? "border border-solid" : ""} ${selected ? "border-[#00000066]" : ""} ${selected ? "shadow-[0px_0px_0px_2px_#0000001a]" : ""} ${selected ? "overflow-hidden" : ""} ${className}`}
    >
      <div className="w-full flex self-stretch items-start flex-[0_0_auto] justify-between relative">
        <div className="inline-flex flex-col items-start gap-0.5 flex-[0_0_auto] relative">
          <div
            className={`[font-family:'Geist',Helvetica] self-stretch mt-[-1.00px] tracking-[0] text-sm text-black font-medium leading-5 relative ${divClassName}`}
          >
            {text}
          </div>

          <div
            className={`[font-family:'Geist',Helvetica] self-stretch tracking-[-0.18px] text-lg text-black font-medium leading-7 relative ${divClassNameOverride}`}
          >
            {text1}
          </div>
        </div>

        <div
          className={`w-5 h-5 rounded-[40px] relative ${!selected ? "border border-solid" : ""} ${!selected ? "border-[#00000033]" : ""} ${selected ? "flex" : ""} ${selected ? "items-center" : ""} ${selected ? "gap-2" : ""} ${selected ? "px-2 py-0.5" : ""} ${selected ? "justify-center" : ""} ${selected ? "bg-[#00000033]" : "bg-white"} ${frameClassName}`}
        >
          {selected && (
            <Check8
              className="!relative !w-3.5 !h-3.5 !ml-[-5.00px] !mr-[-5.00px]"
              color={check8Color}
            />
          )}
        </div>
      </div>

      <div className="w-full flex self-stretch flex-col items-start gap-1 flex-[0_0_auto] relative">
        <div className="w-full flex self-stretch items-center gap-1 flex-[0_0_auto] relative">
          <Check8 className="!relative !w-4 !h-4" color="black" opacity="0.8" />
          <div
            className={`[font-family:'Geist',Helvetica] mt-[-1.00px] tracking-[0] text-sm flex-1 text-[#000000cc] font-medium leading-5 relative ${divClassName1}`}
          >
            {text2}
          </div>
        </div>

        <div className="w-full flex self-stretch items-start gap-1 flex-[0_0_auto] relative">
          <div className="inline-flex items-center gap-2 flex-[0_0_auto] h-5 relative">
            <Check8
              className="!relative !w-4 !h-4"
              color="black"
              opacity="0.8"
            />
          </div>

          <p
            className={`[font-family:'Geist',Helvetica] mt-[-1.00px] tracking-[0] text-sm flex-1 text-[#000000cc] font-medium leading-5 relative ${divClassName2}`}
          >
            3 - 6 topics per lesson
          </p>
        </div>

        <div className="w-full flex self-stretch items-center gap-1 flex-[0_0_auto] relative">
          <Check8 className="!relative !w-4 !h-4" color="black" opacity="0.8" />
          <div
            className={`[font-family:'Geist',Helvetica] mt-[-1.00px] tracking-[0] text-sm flex-1 text-[#000000cc] font-medium leading-5 relative ${divClassName3}`}
          >
            quiz for each topic
          </div>
        </div>

        <div className="w-full flex self-stretch items-center gap-1 flex-[0_0_auto] relative">
          <Check8 className="!relative !w-4 !h-4" color="black" opacity="0.8" />
          <div
            className={`[font-family:'Geist',Helvetica] mt-[-1.00px] tracking-[0] text-sm flex-1 text-[#000000cc] font-medium leading-5 relative ${divClassName4}`}
          >
            analytics
          </div>
        </div>
      </div>
    </div>
  );
};

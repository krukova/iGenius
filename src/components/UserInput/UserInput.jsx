/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Send011 } from "../../icons/Send011";

export const UserInput = ({ filled, className, divClassName }) => {
  return (
    <div
      className={`[background:linear-gradient(180deg,rgba(250,250,250,0)_0%,rgb(250,250,250)_100%)] flex flex-col items-center gap-10 pt-0 pb-10 px-6 relative ${className}`}
    >
      <div className="border border-solid border-[#00000033] w-[688px] flex items-center flex-[0_0_auto] px-4 py-3 overflow-hidden rounded-3xl justify-between bg-white relative">
        <div
          className={`[font-family:'Geist',Helvetica] w-fit mt-[-1.00px] tracking-[-0.16px] text-base font-normal leading-6 whitespace-nowrap relative ${filled ? "text-[#000000cc]" : "text-[#00000066]"} ${divClassName}`}
        >
          {!filled && <>type your message...</>}

          {filled && <>Diversity in the workplace</>}
        </div>

        <Send011
          className="!relative !w-5 !h-5"
          opacity={!filled ? "0.6" : undefined}
        />
      </div>
    </div>
  );
};

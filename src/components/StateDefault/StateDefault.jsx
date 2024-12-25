/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { FilePlus021 } from "../../icons/FilePlus021";

export const StateDefault = ({
  className,
  divClassName,
  divClassNameOverride,
  divClassName1,
}) => {
  return (
    <div
      className={`flex flex-col w-[544px] items-center justify-center gap-4 pt-10 pb-6 px-10 relative bg-[#0000000a] rounded-2xl ${className}`}
    >
      <div className="inline-flex flex-col items-center gap-4 relative flex-[0_0_auto]">
        <FilePlus021 className="!relative !w-6 !h-6" />
        <div className="inline-flex flex-col items-center gap-3 relative flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center gap-2 px-2 py-0.5 relative flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#00000033]">
            <div
              className={`relative w-fit mt-[-1.00px] [font-family:'Geist',Helvetica] font-semibold text-black text-base tracking-[-0.16px] leading-6 whitespace-nowrap ${divClassName}`}
            >
              Upload document(s)
            </div>
          </div>

          <div
            className={`relative w-fit [font-family:'Geist',Helvetica] font-medium text-[#00000099] text-sm tracking-[-0.14px] leading-5 whitespace-nowrap ${divClassNameOverride}`}
          >
            or drag it in
          </div>
        </div>
      </div>

      <p
        className={`relative w-fit [font-family:'Geist',Helvetica] font-medium text-[#00000066] text-xs tracking-[-0.12px] leading-4 whitespace-nowrap ${divClassName1}`}
      >
        Supported file types: PDF, DOC, DOCX, Pages
      </p>
    </div>
  );
};

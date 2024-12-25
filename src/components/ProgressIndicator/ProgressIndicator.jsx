/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ProgressIndicator = ({ state, className, frameClassName }) => {
  return (
    <div
      className={`w-9 h-0.5 relative ${state === "current" ? "flex" : ""} ${state === "current" ? "items-center" : ""} ${state === "current" ? "gap-1" : ""} ${state === "completed" ? "rounded-[40px]" : "rounded-[49px]"} ${state === "completed" ? "bg-[#4762ff]" : "bg-[#00000014]"} ${className}`}
    >
      {["current", "to-do"].includes(state) && (
        <div
          className={`h-0.5 rounded-[40px] relative ${state === "to-do" ? "w-9" : "w-[36.44px]"} ${state === "current" ? "flex" : ""} ${state === "current" ? "flex-col" : ""} ${state === "current" ? "items-start" : ""} ${state === "current" ? "mr-[-0.44px]" : ""} ${state === "current" ? "gap-2" : ""} ${state === "current" ? "justify-center" : ""}`}
        >
          {state === "current" && (
            <div
              className={`relative w-3 h-0.5 bg-[#4762ff] rounded-[40px] ${frameClassName}`}
            />
          )}
        </div>
      )}
    </div>
  );
};

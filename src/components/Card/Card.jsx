/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";
import { Check8 } from "../../icons/Check8";

export const Card = ({
  selected,
  divClassName,
  text = "3.",
  divClassNameOverride,
  text1 = "Apply",
  hasDiv = true,
  recommendedForClassName,
  text2 = "Recommended  for <br/>learners ready to use acquired knowledge in real-world scenarios, solving problems and executing skills within practical contexts.",
  divClassName1,
  className,
  frameClassName,
  check8Color = "black",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    selected: selected || false,
  });

  return (
    <div
      className={`w-52 flex flex-col items-start gap-6 p-4 overflow-hidden rounded-2xl bg-[#0000000a] relative ${state.selected ? "border border-solid" : ""} ${state.selected ? "border-[#00000066]" : ""} ${state.selected ? "shadow-[0px_0px_0px_2px_#0000001a]" : ""} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="inline-flex flex-col items-start gap-4 flex-[0_0_auto] relative">
        <div className="w-44 flex items-start flex-[0_0_auto] justify-between relative">
          <div className="inline-flex flex-col items-start flex-[0_0_auto] relative">
            <div
              className={`[font-family:'Geist',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-xs opacity-40 text-black font-medium leading-4 whitespace-nowrap relative ${divClassName}`}
            >
              {text}
            </div>

            <div
              className={`[font-family:'Geist',Helvetica] w-fit tracking-[-0.16px] text-base text-black font-medium leading-6 whitespace-nowrap relative ${divClassNameOverride}`}
            >
              {text1}
            </div>
          </div>

          <div
            className={`w-5 h-5 rounded-[40px] relative ${!state.selected ? "border border-solid" : ""} ${!state.selected ? "border-[#00000033]" : ""} ${state.selected ? "flex" : ""} ${state.selected ? "items-center" : ""} ${state.selected ? "gap-2" : ""} ${state.selected ? "px-2 py-0.5" : ""} ${state.selected ? "justify-center" : ""} ${state.selected ? "bg-[#00000033]" : "bg-white"} ${frameClassName}`}
          >
            {state.selected && (
              <Check8
                className="!relative !w-3.5 !h-3.5 !ml-[-5.00px] !mr-[-5.00px]"
                color={check8Color}
              />
            )}
          </div>
        </div>

        <div className="w-44 flex flex-col items-start gap-1 h-[164px] relative">
          {hasDiv && (
            <div className="[font-family:'Geist',Helvetica] self-stretch mt-[-1.00px] tracking-[0] text-sm text-black font-medium leading-5 relative">
              Recommended for:
            </div>
          )}

          <div
            className={`[font-family:'Geist',Helvetica] w-[155px] tracking-[0] text-sm text-[#00000099] font-normal leading-5 relative ${!state.selected ? "h-[140px]" : ""} ${recommendedForClassName}`}
          >
            {!state.selected && <p>{text2}</p>}

            {state.selected && (
              <p>
                Recommended for learners ready to use acquired knowledge in
                real-world scenarios, solving problems and executing skills
                within practical contexts.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="inline-flex items-center gap-1 flex-[0_0_auto] relative">
        <div
          className={`[font-family:'Geist',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-sm text-[#000000cc] font-medium leading-4 whitespace-nowrap relative ${divClassName1}`}
        >
          Learn more
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        selected: true,
      };
  }

  return state;
}

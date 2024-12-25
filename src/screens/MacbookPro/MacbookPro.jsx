import React from "react";
import { Card } from "../../components/Card";
import { Price } from "../../components/Price";
import { ProgressIndicator } from "../../components/ProgressIndicator";
import { Sidebar } from "../../components/Sidebar";
import { StateDefault } from "../../components/StateDefault";
import { UserInput } from "../../components/UserInput";
import { Clapperboard } from "../../icons/Clapperboard";
import { Edit011 } from "../../icons/Edit011";
import { HelpCircle } from "../../icons/HelpCircle";
import { Home02 } from "../../icons/Home02";
import { Lightning011 } from "../../icons/Lightning011";
import { Link01 } from "../../icons/Link01";
import { Route2 } from "../../icons/Route2";
import { Stars021 } from "../../icons/Stars021";
import { Users021 } from "../../icons/Users021";

export const MacbookPro = () => {
  return (
    <div className="relative w-[1544px] h-[3550px] bg-[#00000005]">
      <div className="flex flex-col w-[1304px] items-center gap-12 px-10 py-20 absolute top-14 left-60">
        <div className="flex flex-col w-[656px] items-start gap-16 relative flex-[0_0_auto]">
          <div className="flex flex-col items-end gap-12 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col w-[656px] items-start gap-4 relative flex-[0_0_auto]">
              <div className="flex flex-col w-[544px] items-start gap-4 relative flex-[0_0_auto]">
                <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-black text-lg tracking-[-0.18px] leading-7 whitespace-nowrap">
                    What is the course subject?
                  </p>
                </div>

                <p className="relative self-stretch [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#00000099] text-base tracking-[-0.16px] leading-6">
                  What are you looking to teach? You can be very detailed if you
                  know exactly what you’re looking for or be vague and we will
                  fine tune it later.
                </p>
              </div>
            </div>

            <div className="flex flex-col w-[656px] items-end justify-center gap-4 relative flex-[0_0_auto]">
              <div className="flex flex-col w-[544px] items-end justify-center gap-4 relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-end justify-center gap-2 p-3 relative flex-[0_0_auto] bg-[#0000000a] rounded-xl">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-base tracking-[-0.16px] leading-6 whitespace-nowrap">
                    Diversity in the workplace
                  </div>

                  <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                    <Edit011 className="!relative !w-3.5 !h-3.5" />
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#00000080] text-sm tracking-[-0.14px] leading-5 whitespace-nowrap">
                      Edit
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-12 relative flex-[0_0_auto]">
            <div className="flex flex-col w-[656px] items-start gap-4 relative flex-[0_0_auto]">
              <div className="flex flex-col w-[544px] items-start gap-4 relative flex-[0_0_auto]">
                <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-black text-lg tracking-[-0.18px] leading-7 whitespace-nowrap">
                    What is the target audience?
                  </p>
                </div>

                <p className="relative self-stretch [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#00000099] text-base tracking-[-0.16px] leading-6">
                  Who are you creating this course for? You can add as many
                  audiences as you like.
                </p>
              </div>
            </div>

            <div className="flex flex-col w-[656px] items-end justify-center gap-4 relative flex-[0_0_auto]">
              <div className="flex flex-col w-[544px] items-end justify-center gap-4 relative flex-[0_0_auto]">
                <div className="flex self-stretch w-full flex-col items-end justify-center gap-2 p-3 relative flex-[0_0_auto] bg-[#0000000a] rounded-xl">
                  <p className="relative self-stretch mt-[-1.00px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-base tracking-[-0.16px] leading-6">
                    Employees of all levels at our multinational in the tech
                    &amp; software industry.
                  </p>

                  <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                    <Edit011 className="!relative !w-3.5 !h-3.5" />
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#00000080] text-sm tracking-[-0.14px] leading-5 whitespace-nowrap">
                      Edit
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col items-end gap-12 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-12 relative flex-[0_0_auto]">
              <div className="flex flex-col w-[656px] items-start gap-8 relative flex-[0_0_auto]">
                <div className="flex flex-col w-[544px] items-start gap-6 relative flex-[0_0_auto]">
                  <div className="flex-col gap-4 flex items-start relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                      <p className="relative w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-black text-lg tracking-[-0.18px] leading-7 whitespace-nowrap">
                        What is the main reason you&#39;re building this course?
                      </p>
                    </div>

                    <p className="relative self-stretch [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#00000099] text-base tracking-[-0.16px] leading-6">
                      Please describe the specific business problem, skill gap,
                      or opportunity that this training will address.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[656px] items-end justify-center gap-4 relative flex-[0_0_auto]">
              <div className="flex flex-col w-[544px] items-end justify-center gap-4 relative flex-[0_0_auto]">
                <div className="flex self-stretch w-full flex-col items-end justify-center gap-2 p-3 relative flex-[0_0_auto] bg-[#0000000a] rounded-xl">
                  <p className="relative self-stretch mt-[-1.00px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-base tracking-[-0.16px] leading-6">
                    We want to ensure that all OpCo’s across different regions
                    (Europe and Africa respectively) need to share the same
                    values regarding diversity in the workplace. This way we
                    want to create an inclusive work-environment.
                  </p>

                  <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                    <Edit011 className="!relative !w-3.5 !h-3.5" />
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#00000080] text-sm tracking-[-0.14px] leading-5 whitespace-nowrap">
                      Edit
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col items-end gap-12 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-12 relative flex-[0_0_auto]">
              <div className="flex flex-col w-[656px] items-start gap-8 relative flex-[0_0_auto]">
                <div className="flex flex-col w-[544px] items-start gap-6 relative flex-[0_0_auto]">
                  <div className="flex-col gap-4 flex items-start relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                      <p className="relative w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-black text-lg tracking-[-0.18px] leading-7 whitespace-nowrap">
                        How will this course benefit the target audience?
                      </p>
                    </div>

                    <p className="relative self-stretch [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#00000099] text-base tracking-[-0.16px] leading-6">
                      Describe how addressing this need will impact their
                      day-to-day responsibilities, skills, or performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[656px] items-end justify-center gap-4 relative flex-[0_0_auto]">
              <div className="flex flex-col w-[544px] items-end justify-center gap-4 relative flex-[0_0_auto]">
                <div className="flex self-stretch w-full flex-col items-end justify-center gap-2 p-3 relative flex-[0_0_auto] bg-[#0000000a] rounded-xl">
                  <p className="relative self-stretch mt-[-1.00px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-base tracking-[-0.16px] leading-6">
                    People will feel respected for who they are as part of an
                    inclusive workforce. This means they can execute their jobs
                    in a comfortable environment.
                  </p>

                  <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                    <Edit011 className="!relative !w-3.5 !h-3.5" />
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#00000080] text-sm tracking-[-0.14px] leading-5 whitespace-nowrap">
                      Edit
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col items-end gap-12 relative flex-[0_0_auto]">
            <div className="flex flex-col w-[656px] items-start gap-8 relative flex-[0_0_auto]">
              <div className="flex flex-col w-[544px] items-start gap-6 relative flex-[0_0_auto]">
                <div className="flex-col gap-4 flex items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-black text-lg tracking-[-0.18px] leading-7 whitespace-nowrap">
                      Select learning objective
                    </div>
                  </div>

                  <p className="relative self-stretch [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#00000099] text-base tracking-[-0.16px] leading-6">
                    Select the option you feel is most relevant for your
                    learners.
                  </p>
                </div>
              </div>
            </div>

            <div className="inline-flex flex-col items-end justify-center gap-4 relative flex-[0_0_auto]">
              <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <Card
                  divClassName="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassName1="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassNameOverride="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  hasDiv={false}
                  recommendedForClassName="!mt-[-1.00px] ![font-family:'Helvetica_Neue-Regular',Helvetica]"
                  selected={false}
                  text="1."
                  text1="Remember"
                  text2="Ideal for beginners who need to recall basic concepts and facts, building a foundational understanding before advancing to complex topics."
                />
                <Card
                  divClassName="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassName1="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassNameOverride="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  hasDiv={false}
                  recommendedForClassName="!mt-[-1.00px] ![font-family:'Helvetica_Neue-Regular',Helvetica]"
                  selected={false}
                  text="2."
                  text1="Understand"
                  text2="Suited for learners who have grasped basic knowledge and need to interpret, summarize, and explain concepts for deeper comprehension."
                />
                <Card
                  check8Color="white"
                  className="!border-[#ff5731]"
                  divClassName="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassName1="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassNameOverride="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  frameClassName="!bg-[#ff5731]"
                  hasDiv={false}
                  recommendedForClassName="!mt-[-1.00px] ![font-family:'Helvetica_Neue-Regular',Helvetica]"
                  selected
                  text="3."
                  text1="Apply"
                />
              </div>

              <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <Card
                  divClassName="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassName1="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassNameOverride="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  hasDiv={false}
                  recommendedForClassName="!mt-[-1.00px] ![font-family:'Helvetica_Neue-Regular',Helvetica]"
                  selected={false}
                  text="4."
                  text1="Analyze"
                  text2="Best for learners who can break down complex information, identify relationships, and differentiate between elements to gain deeper insights."
                />
                <Card
                  divClassName="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassName1="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassNameOverride="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  hasDiv={false}
                  recommendedForClassName="!mt-[-1.00px] ![font-family:'Helvetica_Neue-Regular',Helvetica]"
                  selected={false}
                  text="5."
                  text1="Evaluate"
                  text2="Suitable for advanced learners who critically assess information, make judgments, and form evidence-based conclusions about concepts or processes."
                />
                <Card
                  divClassName="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassName1="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassNameOverride="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  hasDiv={false}
                  recommendedForClassName="!mt-[-1.00px] ![font-family:'Helvetica_Neue-Regular',Helvetica]"
                  selected={false}
                  text="6."
                  text1="Create"
                  text2="Perfect for expert learners ready to generate new ideas, construct solutions, or design innovative projects based on their acquired knowledge."
                />
              </div>
            </div>

            <div className="flex flex-col w-[544px] items-start gap-4 relative flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-black text-base tracking-[-0.16px] leading-6">
                Add additional context (optional)
              </div>

              <div className="flex flex-col items-end justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex self-stretch w-full flex-col items-end justify-center gap-2 p-3 relative flex-[0_0_auto] bg-[#0000000a] rounded-xl">
                  <div className="relative self-stretch mt-[-1.00px] opacity-40 [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-base tracking-[-0.16px] leading-6">
                    Type message...
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col items-end gap-12 relative flex-[0_0_auto]">
            <div className="flex flex-col w-[656px] items-start gap-8 relative flex-[0_0_auto]">
              <div className="flex flex-col w-[544px] items-start gap-6 relative flex-[0_0_auto]">
                <div className="flex-col gap-4 flex items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-black text-lg tracking-[-0.18px] leading-7 whitespace-nowrap">
                      Upload documents
                    </div>
                  </div>

                  <p className="relative self-stretch [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#00000099] text-base tracking-[-0.16px] leading-6">
                    If you have documents relevant for this course subject, feel
                    free to upload them. Remember, It’s optional.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[656px] items-end justify-center gap-4 relative flex-[0_0_auto]">
              <StateDefault
                className="!flex-[0_0_auto]"
                divClassName="!font-medium ![font-family:'Helvetica_Neue-Medium',Helvetica]"
                divClassName1="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                divClassNameOverride="![font-family:'Helvetica_Neue-Medium',Helvetica]"
              />
            </div>
          </div>

          <div className="flex flex-col items-end gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col w-[656px] items-start gap-8 relative flex-[0_0_auto]">
              <div className="flex flex-col w-[544px] items-start gap-6 relative flex-[0_0_auto]">
                <div className="flex-col gap-4 flex items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <p className="relative w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-black text-lg tracking-[-0.18px] leading-7 whitespace-nowrap">
                      Select your preferred course size
                    </p>
                  </div>

                  <p className="relative self-stretch [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#00000099] text-base tracking-[-0.16px] leading-6">
                    Pricing is based on the size of the course. Select the
                    option that suits you the best!
                  </p>
                </div>
              </div>
            </div>

            <div className="items-center self-stretch w-full flex-[0_0_auto] flex flex-col relative">
              <div className="flex w-48 h-12 items-start justify-center gap-1 px-3 py-2 relative rounded-[12px_12px_0px_0px]">
                <div className="relative w-fit mt-[-1.00px] ml-[-2.50px] mr-[-2.50px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#ff5731] text-xs tracking-[0] leading-4 whitespace-nowrap">
                  Recommended for your course
                </div>
              </div>

              <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto] -mt-4">
                <Price
                  className="!flex-1 !grow"
                  divClassName="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassName1="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassName2="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassName3="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassName4="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassNameOverride="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  selected={false}
                  text="Small"
                  text1="3 tokens"
                  text2="3 lessons"
                />
                <Price
                  check8Color="white"
                  className="!border-[#ff5731] !flex-1 !grow"
                  divClassName="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassName1="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassName2="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassName3="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassName4="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassNameOverride="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  frameClassName="!bg-[#ff5731]"
                  selected
                  text="Medium"
                  text1="6 tokens"
                  text2="6 lessons"
                />
                <Price
                  className="!flex-1 !grow"
                  divClassName="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassName1="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassName2="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassName3="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassName4="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  divClassNameOverride="![font-family:'Helvetica_Neue-Medium',Helvetica]"
                  selected={false}
                  text="Large"
                  text1="12 tokens"
                  text2="12 lessons"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[656px] items-center gap-12 relative flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col w-[544px] items-start gap-6 relative flex-[0_0_auto]">
                <div className="flex flex-col w-[544px] items-start gap-4 relative flex-[0_0_auto]">
                  <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <p className="relative w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-black text-lg tracking-[-0.18px] leading-7 whitespace-nowrap">
                      Is this all we need?
                    </p>
                  </div>

                  <p className="relative self-stretch [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#00000099] text-base tracking-[-0.16px] leading-6">
                    What are you looking to teach? You can be very detailed if
                    you know exactly what you’re looking for or be vague and we
                    will fine tune it later.
                  </p>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-1 px-3 py-1.5 relative flex-[0_0_auto] bg-[#ff5731] rounded-xl border border-solid border-[#ffffff33]">
              <Stars021 className="!relative !w-4 !h-4" />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-base tracking-[-0.16px] leading-6 whitespace-nowrap">
                Generate course outline
              </div>
            </div>
          </div>
        </div>
      </div>

      <Sidebar
        className="!absolute !left-0 !top-0"
        divClassName="!font-medium ![font-family:'Helvetica_Neue-Medium',Helvetica]"
        override={
          <Clapperboard className="!relative !w-4 !h-4" opacity="0.6" />
        }
        reportsClassName="!font-medium ![font-family:'Helvetica_Neue-Medium',Helvetica]"
        sidebarItemDivClassName="!font-medium ![font-family:'Helvetica_Neue-Medium',Helvetica]"
        sidebarItemDivClassName1="!font-medium ![font-family:'Helvetica_Neue-Medium',Helvetica]"
        sidebarItemDivClassName2="!font-medium ![font-family:'Helvetica_Neue-Medium',Helvetica]"
        sidebarItemDivClassName3="!text-[#ff5731] !font-medium ![font-family:'Helvetica_Neue-Medium',Helvetica]"
        sidebarItemDivClassName4="!font-medium ![font-family:'Helvetica_Neue-Medium',Helvetica]"
        sidebarItemDivClassName5="!font-medium ![font-family:'Helvetica_Neue-Medium',Helvetica]"
        sidebarItemDivClassNameOverride="!font-medium ![font-family:'Helvetica_Neue-Medium',Helvetica]"
        sidebarItemIcon={<Route2 className="!relative !w-4 !h-4" />}
        sidebarItemIcon1={
          <Users021 className="!relative !w-4 !h-4" opacity="0.4" />
        }
        sidebarItemIcon2={
          <Lightning011 className="!relative !w-4 !h-4" color="#FF5731" />
        }
        sidebarItemIcon3={
          <Link01 className="!relative !w-4 !h-4" opacity="0.4" />
        }
        sidebarItemIcon4={<HelpCircle className="!relative !w-4 !h-4" />}
        text="0"
      />
      <div className="flex w-[1304px] h-14 items-center gap-6 p-4 absolute top-0 left-60 bg-white border-b [border-bottom-style:solid] border-[#eaeaea]">
        <div className="flex items-center gap-4 relative flex-1 grow mt-[-4.00px] mb-[-4.00px]">
          <div className="flex w-8 h-8 items-center justify-center gap-1 p-0.5 relative bg-white rounded-[10px] border border-solid border-[#00000033]">
            <Home02 className="!relative !w-4 !h-4" opacity="0.6" />
          </div>

          <div className="relative w-fit [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-black text-base tracking-[-0.16px] leading-6 whitespace-nowrap">
            New course
          </div>
        </div>

        <div className="inline-flex flex-col items-center justify-center gap-2 relative flex-[0_0_auto] mt-[-3.00px] mb-[-3.00px]">
          <div className="inline-flex items-start gap-1 relative flex-[0_0_auto]">
            <ProgressIndicator
              className="!self-stretch !h-[unset]"
              frameClassName="!bg-[#ff5731]"
              state="current"
            />
            <div className="relative self-stretch w-9 bg-[#00000014] rounded-[49px]" />

            <div className="relative self-stretch w-9 bg-[#00000014] rounded-[49px]" />

            <div className="relative self-stretch w-9 bg-[#00000014] rounded-[49px]" />

            <div className="relative self-stretch w-9 bg-[#00000014] rounded-[49px]" />
          </div>

          <div className="relative w-fit [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-black text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
            Set up
          </div>
        </div>

        <div className="relative flex-1 grow mt-[-4.00px] mb-[-4.00px]" />
      </div>

      <UserInput
        className="!absolute !left-60 !w-[1304px] !top-[3392px]"
        divClassName="![font-family:'Helvetica_Neue-Regular',Helvetica]"
        filled={false}
      />
    </div>
  );
};

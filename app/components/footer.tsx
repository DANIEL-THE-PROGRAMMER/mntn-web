import Image from "next/image";

export const Footer = () => {
  return (
    <div className="pt-[200px] pb-[120px]">
      <div className="flex container mx-auto justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-[24px]">
            <Image src="/assets/Logo.png" width={104} height={24} alt="" />
            <p className="text-[18px] font-bold text-white leading-[32px] flex flex-col">
              <span>Get out there & discover your next</span>
              <span>slope, mountain & destination!</span>
            </p>
          </div>
          <div className="">
            <span className="font-medium leading-[32px] text-[18px] text-white/[0.5]">
              Copyright 2023 MNTN, Inc. Terms & Privacy
            </span>
          </div>
        </div>
        <div className="flex gap-[212px]">
          <div className="flex flex-col gap-[24px]">
            <span className="text-[#FBD784] font-bold text-[24px] leading-[32px]">
              More on The Blog
            </span>
            <span className="text-white text-[18px] font-medium leading-[32px]">
              About MNTN
            </span>
            <span className="text-white text-[18px] font-medium leading-[32px]">
              Contributors & Writers
            </span>
            <span className="text-white text-[18px] font-medium leading-[32px]">
              Write For Us
            </span>
            <span className="text-white text-[18px] font-medium leading-[32px]">
              Contact Us
            </span>
            <span className="text-white text-[18px] font-medium leading-[32px]">
              Privacy Policy
            </span>
          </div>
          <div className="flex flex-col gap-[24px]">
            <span className="text-[#FBD784] font-bold text-[24px] leading-[32px]">
              More on MNTN
            </span>
            <span className="text-white text-[18px] font-medium leading-[32px]">
              The Team
            </span>
            <span className="text-white text-[18px] font-medium leading-[32px]">
              Jobs
            </span>
            <span className="text-white text-[18px] font-medium leading-[32px]">
              Press
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

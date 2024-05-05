export const HeroHeader = () => {
  return (
    <>
      <div className="">
        <div className="container mx-auto flex items-center justify-between">
          <div className=""></div>
          <div className="flex flex-col gap-[32px]">
            <div className="flex gap-[32px] items-center">
              <div className="w-[72px] h-[2px] bg-[#FBD784]"></div>
              <span className="text-[#FBD784] font-extrabold tracking-[6px]  uppercase text-[18px]">
                A Hiking guide
              </span>
            </div>
            <h2 className="flex flex-col leading-[100px] text-[88px] font-semibold capitalize text-white">
              <span>Be prepared for the</span>
              <span>Mountains and beyond!</span>
            </h2>
            <div className="flex gap-[16px] text-[18px] font-bold items-center text-white">
              <span>scroll down</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="24"
                viewBox="0 0 16 24"
                fill="none"
              >
                <path
                  d="M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

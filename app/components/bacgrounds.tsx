import Image from "next/image";

export const BackGrounds = () => {
  return (
    <div className="absolute z-0 w-full top-0 left-0">
      <div className="relative w-full min-h-[2112px]">
        <div className="absolute bottom-0 left-0 h-[400px] w-full z-40 bg-[#0B1D26]"></div>
        <div className="absolute left-0 top-0 w-full h-[1113px]">
          <div className="relative w-full h-full ">
            <Image
              src="/assets/HG.png"
              width={0}
              height={0}
              layout="responsive"
              alt=""
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              sizes="100vw"
            />
          </div>
        </div>
        <div className="absolute left-0 top-0 w-full h-[1200px]">
          <div className="relative w-full h-full">
            <Image
              src="/assets/BG Hero.png"
              alt=""
              width={0}
              height={0}
              layout="responsive"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              sizes="100vw"
            />
          </div>
        </div>
        <div className="absolute left-0 h-[908px] top-[464px] w-full z-10">
          <div className="relative w-full h-full">
            <Image
              src="/assets/MG.png"
              width={0}
              height={0}
              layout="responsive"
              alt=""
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              sizes="100vw"
            />
          </div>
        </div>
        <div className="absolute top-[768px] left-0 h-[158px] w-full z-20">
          <div className="relative w-full h-full">
            <Image
              src="/assets/VG.png"
              layout="responsive"
              alt=""
              sizes="100vw"
              width={0}
              height={0}
              style={{
                display: "inline-block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div className="absolute top-[1111px] left-0 h-[710px] w-full z-[30]">
          <div className="relative w-full h-full">
            <Image
              src="/assets/BG Content.png"
              alt=""
              width={0}
              height={0}
              layout="responsive"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

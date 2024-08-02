import React from "react";

const catInfo = [
  {
    src: "/src/assets/mood-cat.svg",
    alt: "Mood Cat",
    text: "Lihat berbagai ras kucing",
    width: "100px",
    height: "100px",
  },
  {
    src: "/src/assets/hero-icon.svg",
    alt: "Hero Icon",
    text: "Adopsi anabul pilihan kamu",
    width: "95px",
    height: "95px",
  },
  {
    src: "/src/assets/shout-cat.svg",
    alt: "Shout Cat",
    text: "Quiz seru tentang anabul",
    width: "100px",
    height: "100px",
  },
];

function AboutUs() {
  return (
    <div className="bg-[#FF9EAA] text-[#2b0806] md:pb-8 md:mt-[-31px] mt-[-8px] flex flex-col items-center md:block">
      <div className="flex justify-center items-center md:pt-0 pt-5">
        <h1 className="font-extrabold text-[25px] md:text-[40px] md:m-0 md:pt-8 md:pb-6 pb-2 md:px-0 px-9 text-center">
          LELAH? REFRESHING BENTAR YUK!
        </h1>
      </div>
      <div className="container mx-auto mt-0 mb-12 md:mb-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {catInfo.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:pb-0"
            >
              <img
                src={cat.src}
                alt={cat.alt}
                className={`w-[${cat.width}] h-[${cat.height}]`}
              />
              <div className="text-center text-[22px] md:pt-0">
                {cat.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

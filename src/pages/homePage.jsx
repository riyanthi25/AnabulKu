import React from "react";
import AboutUs from "../layout/home/aboutUs";
import CatFact from "../layout/home/catFact";

const HomePage = () => {
  return (
    <>
      <div className="bg-[#3AA6B9] text-[#2b0806]">
        <div className="container mx-auto md:px-32 md:pt-0 md:pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center  md:px-0 px-6">
              <h3 className="font-extrabold text-[25px] md:text-[40px] md:pt-0 pt-6">
                WELCOME TO, AnabulKu
              </h3>
              <p className="md:text-2xl md:pt-2 md:pb-4 mt-[-2px]">
                here's all about your 'anabul'. . .
              </p>
            </div>
            <div className="flex justify-center md:justify-start md:pl-[120px]">
              <img
                src="/src/assets/cat-love.png"
                alt="Cat Love"
                className="md:w-[280px] md:h-[280px] w-36"
              />
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
      <CatFact />
    </>
  );
};

export default HomePage;

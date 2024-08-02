import React from "react";

function CatFact() {
  return (
    <div className="bg-[#3AA6B9] text-[#2b0806] md:pb-10 md:pt-8 -mt-6">
      <div className="container mx-auto md:px-4 md:py-5">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center">
            <h1 className="font-extrabold md:mt-[70px] mt-5 italic md:text-[50px] text-[30px]">
              CAT FACT!
            </h1>
          </div>
          <div className="md:pr-[110px]">
            <h3 className="font-extrabold flex md:justify-end justify-center md:text-[35px] text-[19px] md:mt-0 mt-[-12px]">
              KUCING - FELIS CATUS
            </h3>
            <p className="md:text-[18px] flex md:justify-end md:text-end text-justify md:px-0 px-8 md:pb-0 pb-6 md:pt-0 pt-2">
              Kucing adalah hewan mamalia karnivora dari keluarga Felidae. Nama
              ilmiahnya adalah Felis catus atau Felis silvestris catus. Kucing
              telah berbaur dengan kehidupan manusia selama lebih dari 9.500
              tahun dan sekarang merupakan salah satu hewan peliharaan paling
              populer di dunia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatFact;

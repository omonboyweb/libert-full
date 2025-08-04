import React from "react";
import banner from "../../assets/banner.svg";
import { LineIcon } from "../../assets/icons/line-icon";
import { Banner } from "./components/banners/banner";
import { Button } from "../../components/Button";
import { Like } from "../../assets/icons/like";
import { serviceData } from "../../data/data";
import { Service1icon } from "../../assets/icons/service1-icon";
export const Home = () => {
  return (
    <>
      <section>
        <div className="container w-full max-w-[1240px] px-5 py-5 flex gap-6">
          <div className="bg-primarySoft rounded-xl pt-8 flex pr-6 flex-nowrap">
            <div className="mt-auto">
              <span className="text-[27px] font-bold text-text ml-8">
                Кўп ўқилаётганлар
              </span>
              <img src={banner} alt="" className="mt-auto" />
            </div>
            <div className="flex items-center">
              <span className="rotate-90 w-8 h-8 rounded-full bg-blueBorder flex justify-center items-center">
                {LineIcon({ color: "#fff", width: 16, height: 16 })}
              </span>
              <Banner />
              <span className="rotate-[270deg] w-8 h-8 rounded-full bg-blueBorder flex justify-center items-center">
                {LineIcon({ color: "#fff", width: 16, height: 16 })}
              </span>
            </div>
          </div>
          <div className="w-full max-w-[260px] px-6 py-8 bg-[url('src/assets/bannerLeft.png')] min-h-full bg-blueBorder bg-no-repeat bg-cover bg-center rounded-xl">
            <span className="text-[24px] mb-6 font-bold text-white ">
              Китоб ўқишни ёқтирасизми?
            </span>
            <p className="text-lg text-white mb-[77px]">
              Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг
            </p>
            <Button
              style="bg-white rounded-[14px] flex justify-center text-center px-6 py-3 cursor-pointer"
              classNm="inline-flex"
            >
              <span className="mr-3"> {Like()}</span>
              <span className="text-lg font-bold">Обуна бўлиш</span>
            </Button>
          </div>
        </div>
      </section>
      {/* service section / */}
      <section>
        <div className="container w-full max-w-[1240px] px-5 py-5 flex gap-6">
          <div className="grid grid-cols-4">
            {serviceData.map(({ id, description, title, icon: Icon }) => (
              <div
                key={id}
                className="w-[300px] flex gap-5 items-center px-[15px] py-[30px]"
              >
                <span className="w-[48px] h-[48px] bg-primarySoft rounded-[11px] p-3">
                  <Icon />
                </span>
                <div className="flex flex-col">
                  <span className="text-[15px] font-bold text-service">
                    {title}
                  </span>
                  <p className="text-[11px] text-serviceDec">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

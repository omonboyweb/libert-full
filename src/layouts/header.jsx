import React from "react";
import logo from "../assets/logo.svg";
import { catalogIcon } from "../assets/icons/catalog-icon";
import { LineIcon } from "../assets/icons/line-icon";
import { Input } from "../components/input";
import { searchIcon } from "../assets/icons/search-icon";
import { Button } from "../components/Button";
import flag from "../assets/icons/flag-icon.svg";
import { userIcon } from "../assets/icons/user-icon";
export const Header = () => {
  return (
    <div className="container w-full max-w-[1240px] px-5 py-5 flex items-center">
      <div className="w-[165px]">
        <img src={logo} alt="" />
      </div>
      <div className="flex items-center justify-between  w-full">
        <div className="w-[180px] inline-flex items-center px-3 py-4 border-[1px] border-solid rounded-l-[14px] border-borderColor  gap-4 ml-[46px] cursor-pointer mr-1">
          {catalogIcon()}
          <span>Рукнлар</span>
          {LineIcon({ width: 24 })}
        </div>
        <div className="max-w-[540px] w-full inline-flex items-center border-[1px] border-solid rounded-r-[14px] border-borderColor  cursor-pointer mr-1 grow-[1]">
          <Input
            placeholder="Қидириш"
            type="text"
            style="w-full px-3 py-4 outline-none"
            onChange={(e) => console.log(e.target.value)}
          />
          <span className="border-l h-full pl-4 px-3 py-4 ">
            {searchIcon()}
          </span>
        </div>
        <div className="px-5 py-4 mr-5 flex items-center gap-2 rounded-[14px] border-borderColor border-[1px] cursor-pointer">
          <img src={flag} alt="" />
          <span>Ўз</span>
          <span className="inline-flex mr-5">{LineIcon({ width: 24 })}</span>
        </div>
        <Button
          style="flex flex-row  items-center  flex-nowrap flex-row w-[151px] rounded-[14px] bg-blueBorder items-center gap-3 px-6 py-3 cursor-pointer"
          onChange={console.log("button click")}
        >
          <span className="inline-block w-6 h-6">
            {userIcon({ color: "#fff" })}
          </span>
          <span className="inline-block text-white pl-2">Кириш</span>
        </Button>
      </div>
    </div>
  );
};

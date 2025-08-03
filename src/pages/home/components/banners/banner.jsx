import React from "react";
import banner1 from "../../../../assets/banner1.png";
import banner2 from "../../../../assets/banner2.png";
import banner3 from "../../../../assets/banner3.png";

export const Banner = () => {
  const books = [
    { id: 1, name: "1984", img: banner1 },
    { id: 2, name: "Code 8", img: banner2 },
    { id: 3, name: "Rich dad poor dad", img: banner3 },
  ];

  return (
    <div className="flex items-center">
      {books.map((item) => (
        <div className="text-center pb-4" key={item.id}>
          <img src={item.img} alt="banner img" className="mx-auto" />
          <span className="text-[20px] text-text">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

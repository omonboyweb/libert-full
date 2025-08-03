import React from "react";

export const Navigation = ({ style, blockStyle, parent }) => {
  let arr = [
    "Аудиокитоб",
    "Электрон китоблар",
    "Босма китоблар",
    "Контакт",
    "Биз хақимизда",
  ];
  return (
    <>
      <nav className={parent}>
        <ul className={blockStyle}>
          {arr.map((item, index) => (
            <li className={style} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

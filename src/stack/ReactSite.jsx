import React, { forwardRef, useEffect, useContext, useRef } from "react";
import { ChangeContext } from "../context/ChangeContext";
import { bdrs, onClickSite } from "../hooks/useStack";

function ReactSite(prop, ref) {
  const { index } = useContext(ChangeContext);
  const info = [
    {
      cn: "sevenOne",
      name: "React 7-1",
    },
    {
      cn: "sevenTwo",
      name: "React 7-2",
    },
    {
      cn: "sevenThree",
      name: "React 7-3",
    },
    {
      cn: "sevenFour",
      name: "React 7-4",
    },
    {
      cn: "sevenFive",
      name: "React 7-5",
    },
    {
      cn: "sevenSix",
      name: "React 7-6",
    },
    {
      cn: "sevenSeven",
      name: "React 7-7",
    },
    {
      cn: "sevenEight",
      name: "React 7-8",
    },
    {
      cn: "sevenNine",
      name: "React 7-9",
    },
  ];
  const infoRef = useRef([]);

  useEffect(() => {
    const target = [...infoRef.current];
    target.forEach((t, index) => {
      t.style.backgroundImage = `url('image/icon/7-${index + 1}.png')`;
      t.style.borderColor = "#879AAA";
      t.style.backgroundColor = "#B1C6DF";
    });
  }, []);

  useEffect(() => {
    bdrs(infoRef, index);
  }, [index]);

  return (
    <div
      className="menu__conts"
      onClick={(e) => {
        onClickSite(e, infoRef, ref);
      }}
    >
      {info.map((item, infoIndex) => (
        <div
          key={item.cn}
          className={item.cn}
          ref={(element) => {
            infoRef.current[infoIndex] = element;
          }}
        >
          <span className="ir">{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default forwardRef(ReactSite);

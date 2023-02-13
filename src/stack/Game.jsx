import React, { forwardRef, useEffect, useContext, useRef } from "react";
import { ChangeContext } from "../context/ChangeContext";
import { bdrs, onClickSite } from "../hooks/useStack";

function Game(prop, ref) {
  const { index } = useContext(ChangeContext);
  const info = [
    {
      cn: "fourOne",
      name: "게임 4-1",
    },
    {
      cn: "fourTwo",
      name: "게임 4-2",
    },
    {
      cn: "fourThree",
      name: "게임 4-3",
    },
    {
      cn: "fourFour",
      name: "게임 4-4",
    },
  ];
  const infoRef = useRef([]);

  useEffect(() => {
    const target = document.querySelectorAll(".menu__conts > div");
    target.forEach((t, index) => {
      t.style.backgroundImage = `url('image/icon/4-${index + 1}.png')`;
      t.style.borderColor = "#C2A66A";
      t.style.backgroundColor = "#EECE87";
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

export default forwardRef(Game);

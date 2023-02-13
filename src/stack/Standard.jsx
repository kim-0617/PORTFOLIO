import React, { forwardRef, useEffect, useContext, useRef } from "react";
import { ChangeContext } from "../context/ChangeContext";
import { bdrs, onClickSite } from "../hooks/useStack";

function standard(prop, ref) {
  const info = [
    {
      cn: "oneOne",
      name: "알고리즘",
    },
    {
      cn: "oneTwo",
      name: "웹표준코딩 1-1",
    },
    {
      cn: "oneThree",
      name: "웹표준코딩 1-2",
    },
    {
      cn: "oneFour",
      name: "웹표준코딩 1-3",
    },
  ];

  const { index } = useContext(ChangeContext);
  const infoRef = useRef([]);

  useEffect(() => {
    const target = [...infoRef.current];
    target.forEach((t, index) => {
      t.style.backgroundImage = `url('image/icon/1-${index + 1}.png')`;
      t.style.borderColor = "#737199";
      t.style.backgroundColor = "#A7A3D0";
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
          className={`${item.cn} ${index === infoIndex ? "bdrs" : ""}`}
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

export default forwardRef(standard);

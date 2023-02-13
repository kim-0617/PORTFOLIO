import React, { forwardRef, useEffect, useContext, useRef } from "react";
import { ChangeContext } from "../context/ChangeContext";
import { bdrs, onClickSite } from "../hooks/useStack";

function Php(prop, ref) {
  const { index } = useContext(ChangeContext);
  const info = [
    {
      cn: "fiveOne",
      name: "PHP 5-1",
    },
    {
      cn: "fiveTwo",
      name: "PHP 5-2",
    },
  ];
  const infoRef = useRef([]);

  useEffect(() => {
    const target = document.querySelectorAll(".menu__conts > div");
    target.forEach((t, index) => {
      t.style.backgroundImage = `url('image/icon/5-${index + 1}.png')`;
      t.style.borderColor = "#8DAA98";
      t.style.backgroundColor = "#B9CFC1";
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

export default forwardRef(Php);

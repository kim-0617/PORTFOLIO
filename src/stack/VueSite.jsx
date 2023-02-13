import React, { forwardRef, useEffect, useContext, useRef } from "react";
import { ChangeContext } from "../context/ChangeContext";
import { bdrs, onClickSite } from "../hooks/useStack";

function VueSite(prop, ref) {
  const info = [
    { cn: "sixOne", name: "VUE 6-1" },
    { cn: "sixTwo", name: "VUE 6-2" },
  ];

  const infoRef = useRef([]);

  useEffect(() => {
    const target = [...infoRef.current];
    target.forEach((t, index) => {
      t.style.backgroundImage = `url('image/icon/6-${index + 1}.png')`;
      t.style.borderColor = "#C99B87";
      t.style.backgroundColor = "#FABDA3";
    });
  }, []);

  const { index } = useContext(ChangeContext);

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
          className={item.cn}
          key={item.cn}
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

export default forwardRef(VueSite);

import React, { forwardRef, useEffect, useContext, useRef } from "react";
import { ChangeContext } from "../context/ChangeContext";
import { bdrs, onClickSite } from "../hooks/useStack";

function Effect(prop, ref) {
  const { index } = useContext(ChangeContext);
  const info = [
    {
      cn: "threeOne",
      name: "이펙트 3-1",
    },
    {
      cn: "threeTwo",
      name: "이펙트 3-2",
    },
    {
      cn: "threeThree",
      name: "이펙트 3-3",
    },
    {
      cn: "threeFour",
      name: "이펙트 3-4",
    },
  ];
  const infoRef = useRef([]);

  useEffect(() => {
    const target = [...infoRef];
    target.forEach((t, index) => {
      t.style.backgroundImage = `url('image/icon/3-${index + 1}.png')`;
      t.style.borderColor = "#B89186";
      t.style.backgroundColor = "#F9D1C2";
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

export default forwardRef(Effect);

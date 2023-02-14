import React, { forwardRef, useEffect, useContext, useRef } from "react";
import { ChangeContext } from "../context/ChangeContext";
import { bdrs, onClickSite } from "../hooks/useStack";

function VueSite(prop, ref) {
  const info = [
    { cn: "sixOne", name: "VUE 6-1" },
    { cn: "sixTwo", name: "VUE 6-2" },
  ];
  const { index } = useContext(ChangeContext);

  const infoRef = useRef([]);

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
          style={{
            backgroundImage: `url('image/icon/6-${infoIndex + 1}.png')`,
            borderColor: "#C99B87",
            backgroundColor: "#FABDA3",
          }}
        >
          <span className="ir">{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default forwardRef(VueSite);

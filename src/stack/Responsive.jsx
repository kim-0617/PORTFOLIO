import React, { forwardRef, useEffect, useContext, useRef } from "react";
import { ChangeContext } from "../context/ChangeContext";
import { bdrs, onClickSite } from "../hooks/useStack";

function Responsive(prop, ref) {
  const { index } = useContext(ChangeContext);
  const info = [
    {
      cn: "twoOne",
      name: "반응형 2-1",
    },
    {
      cn: "twoTwo",
      name: "반응형 2-2",
    },
    {
      cn: "twoThree",
      name: "반응형 2-3",
    },
  ];
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
          key={item.cn}
          className={item.cn}
          ref={(element) => {
            infoRef.current[infoIndex] = element;
          }}
          style={{
            backgroundImage: `url('image/icon/2-${infoIndex + 1}.png')`,
            borderColor: "#A2A2A2",
            backgroundColor: "#DEDEDE",
          }}
        >
          <span className="ir">{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default forwardRef(Responsive);

import { mapping, reverseMapping } from "../components/CodingWork";

export const bdrs = (infoRef, index) => {
  [...infoRef.current].forEach((r) => {
    r.classList.remove("bdrs");
  });

  document.querySelector(`.${reverseMapping[index]}`)?.classList.add("bdrs");
};

export const onClickSite = (e, infoRef, ref) => {
  if (e.target.className !== "menu__conts") {
    [...infoRef.current].forEach((r) => {
      r.classList.remove("bdrs");
    });

    e.target.classList.add("bdrs");
    const name = e.target.className.replace("bdrs", "");
    ref.current.swiper.slideTo(mapping[name]);
  }
};

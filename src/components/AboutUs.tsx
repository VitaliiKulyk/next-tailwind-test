"use client";
import { useRef } from "react";

interface AboutUsProps {
  text: string;
  imgSrc: string;
}

export default function AboutUs(props: AboutUsProps) {
  const { imgSrc, text } = props;
  const ref = useRef<any>(0);

  const handleFocus = () => {
    ref.current.classList.add("focused");
  };

  const handleFocusOut = () => {
    ref.current.classList.remove("focused");
  };

  return (
    <div className="flex relative hidden lg:block">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 absolute z-10 w-full h-full px-2 py-2"
        onMouseOver={handleFocus}
        onMouseLeave={handleFocusOut}
      >
        <div>
          <p className="text-7xl font-bold uppercase">
            About <br /> us
          </p>
        </div>
        <div className="py-16">
          <p className="text-base">{text}</p>
        </div>
      </div>
      <div className="circular-reveal" ref={ref}>
        <img src={imgSrc} />
      </div>
    </div>
  );
}

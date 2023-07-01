"use client";
import { useState } from "react";

interface AccordionOption {
  title: string;
  text: string;
}

interface AccordionProps {
  options: AccordionOption[];
}

export default function Accordion(props: AccordionProps) {
  const { options } = props;
  const [openIndex, setOpenIndex] = useState(0);

  const toogleItem = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div>
      {options.map((option, i) => {
        if (i === openIndex)
          return (
            <div key={i} className="relative mt-2">
              <div className="cnnContents-acc h-8" />
              <div className="flex items-center uppercase font-semibold h-8">
                {option.title}
                <img
                  className="accordeon-minus-icon"
                  src="/icons/minus.svg"
                  onClick={() => toogleItem(i)}
                />
              </div>
              <p className="text-sm opacity-70 leading-relaxed font-extralight my-2">
                {option.text}
              </p>
            </div>
          );

        return (
          <div key={i} className="relative mt-2">
            <div className="flex items-center uppercase font-semibold h-8">
              {option.title}
              <img
                className="accordeon-minus-icon"
                src="/icons/plus.svg"
                onClick={() => toogleItem(i)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

import React, { useState } from "react";
import AccordionUI from "./AccordionUI";

const Accordion = (data) => {
  const [Index, setIndex] = useState(false);

  const accData = data
  console.log(accData)
  return (
    <div className="flex flex-col justify-center items-center md:mx-30 lg:p-16 ss:p-0 rounded-xl h-auto py-20 ">
      {accData.data.map((data) => {
        return (
          <AccordionUI
          key={data.id}
            title={data.question}
            Id={data.id}
            main={data.steps}
            Index={Index}
            setIndex={setIndex}
          ></AccordionUI>
        );
      })}
        </div>
  );
};
export default Accordion;
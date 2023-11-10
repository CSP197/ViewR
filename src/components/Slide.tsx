import React from "react";
import { Transition } from "@headlessui/react";
import { useTimeoutFn } from "react-use";

interface SlideProps {
  catalogImage: any;
  transition: boolean;
  isLeft: boolean;
}

const Slide = (props: SlideProps) => {
  return (
    <div className="flex justify-center pb-10 sm:p-20">
      <Transition
        as={React.Fragment}
        show={props.transition}
        enter="transition ease duration-[400ms] transform"
        enterFrom={"opacity-0 translate-x-" + props.isLeft ? "0" : "12"}
        enterTo={"opacity-100 -translate-x-" + props.isLeft ? "12" : "0"}
      >
        <img
          className="h-auto max-w-full rounded-lg mx-auto object-scale-down max-h-96"
          src={props.catalogImage}
        />
      </Transition>
    </div>
  );
};

export default Slide;

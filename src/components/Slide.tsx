import React from "react";
// import Skeleton from "./Skeleton";
// import { Transition } from "@headlessui/react";

interface SlideProps {
  loadSkeleton: boolean;
  catalogImage: any;
  metadata: {
    name: string;
    url: string;
    height: number;
    width: number;
  };
  // transition: boolean;
  // isLeft: boolean;
}

const Slide = (props: SlideProps) => {
  return (
    <>
      {/* <Skeleton isHidden={props.loadSkeleton} /> */}
      {/* <Transition
        as={React.Fragment}
        show={props.transition}
        enter="transition ease duration-[400ms] transform"
        enterFrom={"opacity-0 translate-x-" + props.isLeft ? "0" : "12"}
        enterTo={"opacity-100 -translate-x-" + props.isLeft ? "12" : "0"}
      > */}
      <img
        className="h-auto max-w-full rounded-lg mx-auto object-scale-down max-h-96"
        src={props.catalogImage}
        data-tooltip-target="metadata-tooltip"
        data-tooltip-placement="right"
      />
      <div
        id="metadata-tooltip"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        {"Height: " + props.metadata.height + " px"}
        <br />
        {"Width: " + props.metadata.width + " px"}
      </div>
      {/* </Transition> */}
    </>
  );
};

export default Slide;

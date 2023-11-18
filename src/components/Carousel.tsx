import React from "react";
import { up_arrow } from "../assets/index";

interface CarouselProps {
  imageArr: {
    thumb: any;
    image: any;
    metadata: {
      name: string;
      url: string;
      height: number;
      width: number;
    };
  }[];
  activeIndex: number;
  thumbnailClickFunc: (idx: any) => void;
}

const Carousel = (props: CarouselProps) => {
  return (
    <div className="flex justify-center no-wrap overflow-x-scroll space-x-4">
      {/*pb-5 sm:p-5 */}
      {props.imageArr.map((image: any, idx: number) => (
        <div key={"div_" + idx} className="grid flex-col">
          <img
            data-tooltip-target="carousel-tooltip"
            data-tooltip-placement="bottom"
            key={"img_" + idx}
            className="cursor-pointer-hover rounded-lg object-scale-down max-h-20"
            src={image.thumb}
            onClick={() => props.thumbnailClickFunc(idx)}
          />
          {idx === props.activeIndex ? (
            <img
              key={"arrow_" + idx}
              src={up_arrow}
              className="justify-self-center object-scale-down max-h-3"
            />
          ) : (
            <></>
          )}
          <div
            id="carousel-tooltip"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            {"Click here to view " +
              props.imageArr[idx].metadata.name +
              "'s image"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;

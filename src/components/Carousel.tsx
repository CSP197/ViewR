import React from "react";
import { up_arrow } from "../assets/index";
import { Tooltip } from "react-tooltip";

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
    <div className="flex max-w-md mx-auto overflow-x-scroll space-x-4">
      {/*pb-5 sm:p-5 */}
      {props.imageArr.map((image: any, idx: number) => (
        <div key={"div_" + idx} className="grid">
          <img
            data-tooltip-id="carousel-tooltip"
            data-tooltip-content={idx.toString()}
            data-img-artist-name={image.metadata.name}
            data-tooltip-place="bottom"
            //
            // data-tooltip-target="carousel-tooltip"
            // data-tooltip-placement="bottom"
            key={"img_" + idx}
            className="cursor-pointer-hover container rounded-lg object-cover max-h-20" //  object-scale-down max-h-20
            src={image.thumb}
            onClick={() => props.thumbnailClickFunc(idx)}
          />
          {idx === props.activeIndex ? (
            <img
              key={"arrow_" + idx}
              src={up_arrow}
              className="justify-self-center object-contain max-h-3" //  object-scale-down max-h-3
            />
          ) : (
            <></>
          )}
        </div>
      ))}
      <Tooltip
        id="carousel-tooltip"
        arrowColor="transparent"
        render={({ activeAnchor }) => (
          <span
          // className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Click here to view{" "}
            {activeAnchor?.getAttribute("data-img-artist-name") || "this dude"}
            's photo
          </span>
        )}
      />
    </div>
  );
};

export default Carousel;

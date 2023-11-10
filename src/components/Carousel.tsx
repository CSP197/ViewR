import React from "react";
import { up_arrow } from "../assets/index";

interface CarouselProps {
  imageList: {
    thumb: any;
    image: any;
  }[];
  activeIndex: number;
  thumbnailClickFunc: (idx: any) => void;
}

const Carousel = (props: CarouselProps) => {
  return (
    <div className="flex justify-center space-x-4 pb-5 sm:p-5">
      {props.imageList.map((image: any, idx: number) => (
        <div key={"div_" + idx} className="grid flex-col">
          <img
            key={"img_" + idx}
            className="max-w-full rounded-lg object-scale-down max-h-20"
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
        </div>
      ))}
    </div>
  );
};

export default Carousel;

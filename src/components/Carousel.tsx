import React from "react";
import { up_arrow } from "../assets/index";

interface CarouselProps {
  imageArr: {
    thumb: any;
    image: any;
  }[];
  activeIndex: number;
  thumbnailClickFunc: (idx: any) => void;
}

const Carousel = (props: CarouselProps) => {
  return (
    <div className="flex justify-center ">
      {/*pb-5 sm:p-5 */}
      <div className="flex no-wrap overflow-x-scroll space-x-4">
        {props.imageArr.map((image: any, idx: number) => (
          <div key={"div_" + idx} className="grid flex-col">
            <img
              key={"img_" + idx}
              className="rounded-lg object-scale-down max-h-20"
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
    </div>
  );
};

export default Carousel;

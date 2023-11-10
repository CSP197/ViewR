import React from "react";

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
        <img
          key={idx}
          className="max-w-full rounded-lg object-scale-down max-h-20"
          src={image.thumb}
          onClick={() => props.thumbnailClickFunc(idx)}
        />
      ))}
    </div>
  );
};

export default Carousel;

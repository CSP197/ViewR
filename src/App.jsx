import { useState, useEffect } from "react";
import Header from "./components/Header";
import Slide from "./components/Slide";
// import { useTimeoutFn } from "react-use";
import { image1, image2, image3, image4, image5 } from "./assets/index";
import Carousel from "./components/Carousel";

function App() {
  const imageList = [
    {
      thumb: image1,
      image: image1,
    },
    {
      thumb: image2,
      image: image2,
    },
    {
      thumb: image3,
      image: image3,
    },
    {
      thumb: image4,
      image: image4,
    },
    {
      thumb: image5,
      image: image5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDuration] = useState(3000);
  const [sliding, setSliding] = useState(false);
  // const [transition, setTransition] = useState(true);
  // const [, , resetTransition] = useTimeoutFn(() => setTransition(true), 500);
  // const [isLeft, setIsLeft] = useState(false);

  const nextClick = () => {
    // setIsLeft(false);
    let currIndex = -1;
    if (activeIndex === imageList.length - 1) {
      currIndex = 0;
    } else {
      currIndex = activeIndex + 1;
    }
    // setTransition(false);
    // resetTransition();
    setActiveIndex(currIndex);
  };

  const prevClick = () => {
    // setIsLeft(true);
    let currIndex = -1;
    if (activeIndex === 0) {
      currIndex = imageList.length - 1;
    } else {
      currIndex = activeIndex - 1;
    }
    // setTransition(false);
    // resetTransition();
    setActiveIndex(currIndex);
  };

  const thumbnailClick = (idx) => {
    setActiveIndex(idx);
  };

  const slide = () => {
    setSliding(!sliding);
  };

  useEffect(() => {
    if (sliding) {
      const interval = setInterval(() => {
        nextClick();
        console.log(`Line 75) ${activeIndex}`);
      }, slideDuration);
      console.log(`Line 77) ${activeIndex}`);
      return () => clearInterval(interval);
    }
  });

  return (
    <>
      <Header
        prevClickFunc={prevClick}
        nextClickFunc={nextClick}
        slideShowFunc={slide}
        isSliding={sliding}
      />
      <Slide
        catalogImage={imageList[activeIndex].image}
        // transition={transition}
        // isLeft={isLeft}
      />
      <Carousel
        imageList={imageList}
        activeIndex={activeIndex}
        thumbnailClickFunc={thumbnailClick}
      />
    </>
  );
}

export default App;

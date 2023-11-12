import { useState, useEffect } from "react";
import Header from "./components/Header";
import Slide from "./components/Slide";
// import { useTimeoutFn } from "react-use";
import { image1 } from "./assets/index";
import Carousel from "./components/Carousel";
import ImageService from "./components/ImageService";

function App() {
  const imageList = [
    {
      thumb: image1,
      image: image1,
      info: [
        "Sutirta Budiman",
        "https://unsplash.com/photos/group-of-zebra-walking-on-wheat-field-Jgiv1rSIpVM",
        "4836",
        "3869",
      ],
    },
    // {
    //   thumb: image2,
    //   image: image2,
    //   info: null,
    // },
    // {
    //   thumb: image3,
    //   image: image3,
    //   info: null,
    // },
    // {
    //   thumb: image4,
    //   image: image4,
    //   info: null,
    // },
    // {
    //   thumb: image5,
    //   image: image5,
    //   info: null,
    // },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDuration] = useState(3000);
  const [sliding, setSliding] = useState(false);
  const [images, setImages] = useState(imageList);
  // const [transition, setTransition] = useState(true);
  // const [, , resetTransition] = useTimeoutFn(() => setTransition(true), 500);
  // const [isLeft, setIsLeft] = useState(false);

  const nextClick = () => {
    // setIsLeft(false);
    let currIndex = -1;
    if (activeIndex === images.length - 1) {
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
      currIndex = images.length - 1;
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
    if (images.length === 0 || activeIndex === images.length - 1) {
      ImageService()
        .then((res) => {
          let newState = images;
          res.map((obj) =>
            newState.push({
              thumb: obj.download_url,
              image: obj.download_url,
              info: [obj.author, obj.url, obj.height, obj.width],
            })
          );
          setImages(newState);
        })
        .catch((err) => console.log(err));
    }
  });

  function handleKeyDown(event) {
    if (event.key === "ArrowRight") {
      nextClick();
    } else if (event.key === "ArrowLeft") {
      prevClick();
    }
  }

  // let new_imagesList = [];
  // const new_images = ImageService();
  // new_images.then(data => new_imagesList.push(data))
  // new_imagesList.push(1)
  // console.log(new_imagesList);

  return (
    <>
      <Header
        prevClickFunc={prevClick}
        nextClickFunc={nextClick}
        slideShowFunc={slide}
        isSliding={sliding}
        keyboardFunc={handleKeyDown}
      />
      <Slide
        catalogImage={images[activeIndex].image}
        // transition={transition}
        // isLeft={isLeft}
      />
      {images[activeIndex].info !== null &&
        images[activeIndex].info.map((item, index) => (
          <div className="text-center" key={index}>
            {item}
          </div>
        ))}
      <Carousel
        imageArr={images}
        activeIndex={activeIndex}
        thumbnailClickFunc={thumbnailClick}
      />
    </>
  );
}

export default App;

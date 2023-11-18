import { useState, useEffect } from "react";
import Header from "./components/Header";
import Slide from "./components/Slide";
// import { useTimeoutFn } from "react-use";
import { image1, image2, 
  image3, 
  image4, 
  image5 
} from "./assets/index";
import Carousel from "./components/Carousel";
import ImageService from "./components/ImageService";
import ImageData from "./components/ImageData";

function App() {
  const imageList = [
    {
      thumb: image1,
      image: image1,
      metadata: {
        name: "Jeffrey Deng",
        url: "https://unsplash.com/photos/h6t2dbYgDuc",
        height: 3872,
        width: 2592,
        // Photo by <a href="https://unsplash.com/@jeffreydeng?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jeffrey Deng</a> on <a href="https://unsplash.com/photos/sliced-strawberry-in-mug-with-flakes-h6t2dbYgDuc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> 
      },
    },
    {
      thumb: image2,
      image: image2,
      metadata: {
        name: "davide ragusa",
        url: "https://unsplash.com/photos/mOPCiXScx08",
        height: 2848,
        width: 4288,
  
      },
    },
    {
      thumb: image3,
      image: image3,
      metadata: {
        name: "Nithya Ramanujam",
        url: "https://unsplash.com/photos/fTKetYpEKNQ",
        height: 805,
        width: 1280
      },
    },
    {
      thumb: image4,
      image: image4,
      metadata: {
        name: "Rafael Leão",
        url: "https://unsplash.com/photos/PW0-vZD0wis",
        height: 2848,
        width: 4288
      },
    },
    {
      thumb: image5,
      image: image5,
      metadata: {
        name: "Roksolana Zasiadko",
        url: "https://unsplash.com/photos/LyeduBb2Auk",
        height: 4272,
        width: 2848
      },
    },
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
              metadata: {
                name: obj.author,
                url: obj.url,
                height: obj.height,
                width: obj.width,
              },
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
        metadata={images[activeIndex].metadata}
        // transition={transition}
        // isLeft={isLeft}
      />
      <ImageData data={images[activeIndex].metadata} />
      <Carousel
        imageArr={images}
        activeIndex={activeIndex}
        thumbnailClickFunc={thumbnailClick}
      />
    </>
  );
}

export default App;

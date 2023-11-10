import React from "react";
import {
  PhotoIcon,
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/20/solid";
import { Transition } from "@headlessui/react";

interface HeaderProps {
  prevClickFunc: () => void;
  nextClickFunc: () => void;
  slideShowFunc: () => void;
  isSliding: boolean;
}

function Header(props: HeaderProps) {
  let color = "indigo";
  // let slidingClassName =
  //   "inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
  if (props.isSliding) {
    color = "violet";
    // slidingClassName =
    //   "inline-flex items-center rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600";
  }

  return (
    <div className="p-10 lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <Transition
          appear={true}
          show={true}
          enter="transition ease duration-500 transform"
          enterFrom="opacity-0 -translate-x-12"
          enterTo="opacity-100 translate-x-0"
        >
          <h1 className="flex items-center text-5xl font-poppins font-extrabold dark:text-black">
            View
            <span className="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
              R
            </span>
          </h1>
        </Transition>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6"></div>
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <span className="hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            // onClick={() => setTimeout(props.prevClickFunc, 510)}
            onClick={props.prevClickFunc}
          >
            <ArrowLeftCircleIcon
              className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Prev Image
          </button>
        </span>
        <span className="ml-3 hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            // onClick={() => setTimeout(props.nextClickFunc, 510)}
            onClick={props.nextClickFunc}
          >
            <ArrowRightCircleIcon
              className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Next Image
          </button>
        </span>

        <span className="sm:ml-3">
          <button
            type="button"
            // className={slidingClassName}
            className={
              "inline-flex items-center rounded-md bg-" +
              color +
              "-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-" +
              color +
              "-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-" +
              color +
              "-600"
            }
            onClick={props.slideShowFunc}
          >
            <PhotoIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            {props.isSliding ? "Stop" : "Start"} Slideshow
          </button>
        </span>
      </div>
    </div>
  );
}

export default Header;

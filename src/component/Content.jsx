import React from "react";
import { FaPlay } from "react-icons/fa";
import dp from "../image/dp.webp";

function Content() {
  const image = [dp, dp, dp, dp, dp];

  return (
    <div className="-mt-5">
      <div className="flex justify-between mx-6 sm:mx-24">
        <div className="border border-white w-fit h-fit rounded-3xl p-3 flex gap-3">
          <div>
            <div className="bg-gradient-to-t from-blue-500 via-purple-500 via-pink-500 to-red-500 h-10 w-10 rounded-full relative">
              <FaPlay className="absolute left-4 mt-3 w-3 h-4" />
            </div>
          </div>
          <div>
            <h1 className="text-white w-24 text-xs sm:text-sm">
              View Demos and Highlights
            </h1>
          </div>
        </div>

        <div className="text-white w-60 mr-40 font-serif">
          <p className="font-bold mb-3 text-sm sm:text-lg">The ideas that improve your products</p>
          <p className="font-thin text-xs sm:text-sm mb-3">
            be among the first founders to experience the easiest way to start
            run a business
          </p>
          <div className="flex">
            {image.map((item, index) => (
              <div key={index}>
                <img className="h-8 w-8 sm:h-10 sm:w-10 rounded-full" src={item} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;

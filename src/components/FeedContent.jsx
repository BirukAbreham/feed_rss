import React from "react";

const FeedContent = (props) => (
  <div className="w-full flex justify-center">
    <div className="h-1/4 bg-white w-full border-b flex justify-center">
      <div className="h-full flex flex-col items-center justify-between w-4/5">
        <div className="w-full mb-16">
          <div className="text-lg text-blue-500 uppercase">Feed</div>
          <div className="text-3xl font-bold text-blue-800 my-3">
            How To Add Advanced Photo Uploads in Node and Express
          </div>
          <div className="text-xl text-blue-800 leading-tight my-1">
            In this tutorial, we will see how to upload a photo to an Express
            app and manipulate it (resize, crop, greyscale, etc) before writing
            it to storage.
          </div>
          <div className="text-lg text-blue-800 leading-tight mt-2 flex items-center">
            <div>
              <span>3 months ago </span> • <span>By Glad Chinda</span>
            </div>
            <div className="ml-2">
              <span className="py-1 px-2 mx-2 bg-gray-300 text-blue-800 rounded">
                Ubuntu 18.04
              </span>
              <span className="py-1 px-2 mx-2 bg-gray-300 text-blue-800 rounded">
                Flask
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FeedContent;

import React from "react";
import moment from "moment";

const FeedContent = ({ errorFlag, feed }) => {
  if (feed.items && feed.items.length) {
    let feedList = feed.items.map((item, idx) => (
      <div className="w-full flex justify-center" key={idx}>
        <div className="h-1/4 bg-white w-full border-b flex justify-center">
          <div className="h-full flex flex-col items-center justify-between w-4/5">
            <div className="w-full mb-16">
              <a
                className="text-3xl font-bold text-blue-800 my-3"
                href={item.link}
              >
                {item.title}
              </a>
              <div className="text-xl text-blue-800 leading-tight my-1">
                {item.contentSnippet}
              </div>
              <div className="text-lg text-blue-800 leading-tight mt-2 flex items-center">
                <div>
                  <span className="py-1 px-2 mx-2 bg-gray-300 text-blue-800 rounded">
                    {moment(item.date).fromNow()}
                  </span>{" "}
                  <span>{`By ${item.creator}`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
    return <div>{feedList}</div>;
  } else {
    if (errorFlag) {
      return (
        <div className="alert flex flex-row items-center bg-red-200 p-5 rounded border-b-2 border-red-300">
          <div className="alert-icon flex items-center bg-red-100 border-2 border-red-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
            <span className="text-red-500">
              <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </div>
          <div className="alert-content ml-4">
            <div className="alert-title font-semibold text-lg text-red-800">
              Error
            </div>
            <div className="alert-description text-sm text-red-600">
              Your RSS URL is wrong or URL has CORS enabled
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex py-24 justify-center">
          <div className="p-12 text-center max-w-2xl">
            <div className="md:text-3xl text-3xl font-bold">Empty</div>
            <div className="text-xl font-normal mt-4">
              Write the RSS URL on the search input
            </div>
          </div>
        </div>
      );
    }
  }
};

export default FeedContent;

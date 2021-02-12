import React from "react";

import FeedForm from "./FeedForm";
import FeedContent from "./FeedContent";

class FeedLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* Hero section */}
        <div className="w-full z-0">
          <div className="bg-blue-500 flex flex-col items-center text-center justify-end h-2/4">
            <div className="w-1/2 pt-10">
              <h1 className="text-6xl text-white font-bold leading-none mb-4">
                Feed RSS
              </h1>
              <p className="text-2xl text-white leading-tight tracking-wide">
                Write RSS URL on the search bar and get feed result
              </p>
            </div>
            <FeedForm />
          </div>

          <div className="py-10 bg-white w-full flex justify-center">
            <div className="h-full flex items-center justify-between w-4/5">
              <div className="text-xl text-blue-800 font-medium">15 Feeds</div>
            </div>
          </div>
        </div>
        {/* Hero section */}
        <FeedContent />
      </div>
    );
  }
}

export default FeedLayout;

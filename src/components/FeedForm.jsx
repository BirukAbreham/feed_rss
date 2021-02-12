import React from "react";

const FeedForm = (props) => (
  <div className="w-4/5 mt-4 mb-8">
    <input
      className="text-3xl placeholder-gray-400 text-gray-800 pb-4 pt-5 pl-20 pr-4 rounded w-full border-b-4 focus:outline-none focus:border-blue-600"
      type="text"
      placeholder="http://www.somewebsite.rss/"
    />
  </div>
);

export default FeedForm;

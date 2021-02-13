import React from "react";

import FeedForm from "./FeedForm";
import FeedContent from "./FeedContent";
const RSSParser = require("rss-parser");

class FeedLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rssurl: "",
      errorFlag: false,
      feed: {},
    };
    this.handleRssUrlChange = this.handleRssUrlChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleRssUrlChange(url) {
    this.setState({ rssurl: url });
  }

  async handleSearch() {
    await this.rssFetch();
  }

  async rssFetch() {
    // const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    let parser = new RSSParser();
    let url = this.state.rssurl;
    try {
      let feeds = await parser.parseURL(`${url}`);
      let cleanFeed = {};

      cleanFeed.title = feeds.title;
      cleanFeed.description = feeds.description;
      cleanFeed.link = feeds.link;
      cleanFeed.items = [];

      feeds.items.forEach((rssfeed) => {
        let item = {
          contentSnippet: rssfeed.contentSnippet,
          title: rssfeed.title,
          date: rssfeed.isoDate,
          link: rssfeed.link,
          creator:
            rssfeed["dc:creator"] || rssfeed["creator"]
              ? rssfeed["creator"]
              : cleanFeed.title,
        };
        cleanFeed.items.push(item);
      });

      this.setState({ feed: cleanFeed });
    } catch (error) {
      this.setState({ errorFlag: true });
      setTimeout(() => {
        this.setState({ errorFlag: false });
      }, 4000);
    }
  }

  render() {
    const { url, errorFlag, feed } = this.state;
    const linkBtn = (
      <div className="ml-20">
        <a
          href={feed.link}
          className="bg-white text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
        >
          <span className="mr-2">Go to Link</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentcolor"
              d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
            ></path>
          </svg>
        </a>
      </div>
    );
    const link = feed.link ? linkBtn : null;
    return (
      <div>
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
            <FeedForm
              url={url}
              onRssUrlChange={this.handleRssUrlChange}
              onSearch={this.handleSearch}
            />
          </div>
          <div className="py-10 bg-white w-full flex justify-center">
            <div className="h-full flex items-center justiy-between w-4/5">
              <div className="text-xl text-black-800 font-semibold">
                {feed.title}
              </div>

              {link}
            </div>
          </div>
          <div className="py-10 bg-white w-full flex justify-center">
            <div className="h-full flex items-center justify-between w-4/5">
              <div className="text-xl text-blue-800 font-medium">
                {feed.items ? `Feeds ${feed.items.length}` : "No Feed"}
              </div>
            </div>
          </div>
        </div>
        <FeedContent errorFlag={errorFlag} feed={feed} />
      </div>
    );
  }
}

export default FeedLayout;

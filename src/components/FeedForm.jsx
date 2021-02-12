import React from "react";

class FeedForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onRssUrlChange(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSearch(event);
  }

  render() {
    const url = this.props.url;
    return (
      <form className="w-4/5 m-4 mb-8 flex">
        <input
          className="text-3xl placeholder-gray-400 text-gray-800 pb-4 pt-5 pl-20 pr-4 rounded w-full border-b-4 focus:outline-none focus:border-blue-600"
          type="text"
          placeholder="http://www.somewebsite.com/rss"
          onChange={this.handleChange}
          value={url}
        />
        <button
          onClick={this.handleSubmit}
          className="px-8 rounded-r-lg bg-blue-800 text-white font-bold p-4 uppercase border-blue-400 border-t border-b border-r"
        >
          Search
        </button>
      </form>
    );
  }
}
export default FeedForm;

import React from "react";
import Timer from "./Timer";

const MainAuctionItem = () => {
  return (
    <div className="w-2/3 pr-8">
      <div className="p-8 mb-4 bg-white border border-gray-500 h-base solobuy-image" />
      <div className="flex mb-4 font-bold border-b border-gray-400 pb-4">
        <span className="w-3/4">
          <h1 className="mb-1 text-3xl font-bold">
            60 x 20 Inch - Original Abstract Painting
          </h1>
          <a href className="mb-4 text-gray-800 block">
            matthewsakutaart
          </a>
          <p className="block mb-2">
            Starts at:
            <span className="ml-2  text-xl font-bold">$240.00</span>
          </p>
        </span>
        <span className="w-1/4 text-right text-lg">
          <i className="fas fa-heart text-red-600 pr-3" aria-hidden="true" />
          3,136,052
        </span>
      </div>
      <div className="flex mb-4 items-center">
        <span className="w-3/4">
          <div className="mb-2">
            Auction Starts:
            <i className="fas fa-lock-open pl-3 pr-3" />
            <Timer />
          </div>
        </span>
        <button className="w-1/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Join Action
        </button>
      </div>
    </div>
  );
};

export default MainAuctionItem;

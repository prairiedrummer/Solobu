import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import AuctionList from "./AuctionList";
import MainAuctionItem from "./MainAuctionItem";

import "./styles.css";

function App() {
  return (
    <Fragment>
      <Header />
      <main className="flex container mx-auto px-2">
        <MainAuctionItem />
        <AuctionList />
      </main>
    </Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

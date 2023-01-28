import React, { Component } from "react";
import Header from "./Components/Body";
import SearchBox from "./Components/Search";
import ResultContainer from "./Components/View";
import "./App.css";

const Search = require("@rstacruz/startup-name-generator");

class App extends Component {
  state = {
    headerLine: "Domain Search App !",
    Length: true,
    RandomName: [],
  };
  // Animation
  ChangeInput = (inputText) => {
    this.setState({
      Length: !(inputText.length > 0),RandomName: inputText.length > 0 ? Search(inputText) : [],
    });
  };

  render() {
    return (
      <div>
        <Header
          headerText={this.state.headerLine}
          headerLength={this.state.Length}
        />
        <SearchBox onInputChange={this.ChangeInput} />
        <ResultContainer RandomName={this.state.RandomName} />
      </div>
    );
  }
}

export default App;

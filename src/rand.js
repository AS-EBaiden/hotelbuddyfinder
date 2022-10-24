import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./views/Home";
import InputInfo from "./components/InputInfo";

const sampleOptions = [
  { id: "753", title: "This is the first option" },
  { id: "035", title: "This is the second option" },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    const { options } = sampleOptions;
    this.state = { options, displayOptions: false };
  }

  displayOptions() {
    this.setState({
      options: this.state.options,
      displayOptions: !this.state.displayOptions,
    });
  }

  render() {
    var options = null;
    if (this.state.displayOptions) {
      options = (
        <ul id="options">
          {this.state.options.map((option) => (
            <li key={option.id}>{option.title}</li>
          ))}
        </ul>
      );
    }
    return (
      <div>
        <button onClick={this.displayOptions}>
          {this.state.displayOptions ? "Hide options" : "Show options"}
        </button>
        {options}
      </div>
    );
  }
}

export default App;

import React, { Component, createContext } from "react";
import "./App.css";

const MyNumberContext = createContext();

class NumberProvider extends Component {
  state = {
    max: 10,
    incrementMax: () =>
      this.setState(({ max }) => ({
        max: max + 10
      }))
  };

  render() {
    return (
      <MyNumberContext.Provider value={this.state}>
        {this.props.children}
      </MyNumberContext.Provider>
    );
  }
}

const MyButton = ({ incrementMax }) => (
  <div>
    <button onClick={incrementMax}>Increment Max </button>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <NumberProvider>
          <MyNumberContext.Consumer>
            {({ max, incrementMax }) => (
              <div>
                The max number is <strong>{max}</strong>
                <MyButton incrementMax={incrementMax} />
              </div>
            )}
          </MyNumberContext.Consumer>
        </NumberProvider>
      </div>
    );
  }
}

export default App;

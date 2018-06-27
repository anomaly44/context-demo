import React, { Component, createContext } from "react";
import "./App.css";

const MyNumberContext = createContext({ max: 10 });

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNumberContext.Provider value={{ max: 10 }}>
          <div>
            <MyNumberContext.Consumer>
              {({ max }) => (
                <div>
                  The max number is <strong>{max}</strong>
                </div>
              )}
            </MyNumberContext.Consumer>
          </div>
        </MyNumberContext.Provider>
      </div>
    );
  }
}

export default App;

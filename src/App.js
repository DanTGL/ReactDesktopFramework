import React, { Component} from "react";
import "./App.css";
import Window from "./Window.js"

class App extends Component{
  onClick() {
    console.log("test");
  }

  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <Window onTouch={this.onClick} color="blue" />
        <Window onClick={this.onClick} color="green" />
      </div>
    );
  }
}

export default App;
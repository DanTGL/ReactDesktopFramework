import React, { Component} from "react";
import "./App.css";
import Window from "./Window.js"

const apps = [
  {
    color: "blue"
  },
  {
    color: "green"
  },
  {
    color: "yellow"
  }
];

function App() {
  const rndManagerRef = React.useRef({
    maxZIndex: 0,
    prevDraggedNode: null
  });


  const openApp = (id) => {
    current_index = window_order.indexOf(id);

    if (current_index != -1) {
      window_order.splice(current_index, 1);
    }

    window_order.push(id);
    
    return window_order.length() - 1;
  };

  const createApp = (value, index) => {
    return <Window managerRef={rndManagerRef} color={apps[index].color} />
  };

  const createApps = () => {
    return apps.map(createApp)
  };

  return(
    <div className="App">
      <h1> Hello, World! </h1>
      {createApps()}
    </div>
  );
}

export default App;
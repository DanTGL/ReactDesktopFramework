import React, {Component, useState} from "react";
import "./App.css";
import Window from "./Window.js"

const apps = [
  {
    color: "blue",
    title: "Blue App",
    appId: 0,
    content: (<div>
    <h1> Hello, World! </h1>
    <h2>This app is Blue!</h2>
    </div>
    )
  },
  {
    color: "green",
    title: "Green App",
    appId: 1,
    content: (<div>
      <h1> Hello, World! </h1>
      <h2>This app is Green!</h2>
      </div>
      )
  },
  {
    color: "yellow",
    title: "Yellow App",
    appId: 2,
    content: (<div>
      <h1> Hello, World! </h1>
      <h2>This app is Yellow!</h2>
      </div>
      )
  }
];

function App() {
  const rndManagerRef = React.useRef({
    maxZIndex: 0,
    prevDraggedNode: null
  });

  const list = [...apps];
  
  const [appList, setAppList] = useState(list);


  const openApp = (id) => {

    const updatedList = [...appList];
    const current_index = updatedList.findIndex(item => item.appId === id);

    if (current_index !== -1) {
      const [item] = updatedList.splice(current_index, 1);
      updatedList.push(item);
    } else {
      updatedList.push(apps[id]);
    }
    
    setAppList(updatedList);
    
    //return window_order.length() - 1;
  };

  const closeApp = (id) => {
    const updatedList = [...appList];
    const current_index = updatedList.findIndex(item => item.appId === id);

    if (current_index != -1) {
      updatedList.splice(current_index, 1);
      setAppList(updatedList);
    }
  }

  const createApp = (value, index) => {
    return <Window managerRef={rndManagerRef} color={value.color} zIndex={index} key={value.appId.toString()} onDrag={openApp} closeApp={closeApp} appId={value.appId} content={value.content} title={value.title} />
  };

  const createApps = () => {
    return appList.map(createApp)
  };

  return(
    <div className="App">
      <div className="desktop">
        {createApps()}
      </div>
      <div className="taskbar">
        {apps.map((value) => {
        return (
        <div className="app-icon" style={{backgroundColor: value.color}} onClick={() => {openApp(value.appId)}} key={"taskbar_" + value.appId.toString()}>
          <span>{value.title}</span>
        </div>
        )})
        }
      </div>
    </div>
  );
}

export default App;
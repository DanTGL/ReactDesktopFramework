import React, { Component} from "react";
import { Rnd } from "react-rnd";
import "./App.css";

class Window extends Component {

    onClick() {

    }

    render(){
        return(
            <Rnd style={{backgroundColor: this.props.color}} className="window" default={{x: 0, y: 0, width: 320, height: 200}} dragHandleClassName="window-handle">
                <div className="window-handle"></div>
                <h1> Hello, World! </h1>
                <h2>Test</h2>
            </Rnd>
        );
    }

}
export default Window;
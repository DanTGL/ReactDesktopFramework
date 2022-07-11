import React, { Component} from "react";
import { Rnd } from "react-rnd";
import "./App.css";

class Window extends Component {

    render(){
        return(
            <Rnd
                style={{backgroundColor: this.props.color}}
                className="window"
                default={{x: 0, y: 0, width: 320, height: 200}}
                dragHandleClassName="window-handle"
                bounds="parent"
                onDragStart={(e, node) => {
                    const manager = this.props.managerRef.current;
                    /*if (manager.prevDraggedNode) {
                        manager.prevDraggedNode.style.zIndex = manager.prevDraggedNodeZIndex;
                    }

                    manager.prevDraggedNode = node.node;
                    manager.prevDraggedNodeZIndex = manager.prevDraggedNode.style.zIndex;
                    manager.prevDraggedNode.style.zIndex = manager.maxZIndex;*/
                    
                    
                    //manager.maxZIndex += 1
                    //manager.prevDraggedNode = node.node
                    //manager.prevDraggedNode.style.zIndex = manager.maxZIndex
                    this.props.onDrag(this.props.appId);
                }}
            >
                <div className="window-handle">
                    <span>
                        {this.props.title}
                    </span>
                    <div className="handle-buttons">
                        <button>_</button>
                        <button>&#x25A1;</button>
                        <button onClick={() => {this.props.closeApp(this.props.appId)}}>X</button>
                    </div>
                </div>
                <div className="window-content">
                    {this.props.content}
                </div>
            </Rnd>
        );
    }

}
export default Window;
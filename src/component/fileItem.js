import React from "react";
import IconMap from "./IconMap";

import './fileItem.css'

export default class FileItem extends React.Component {
    constructor(props) {
        super(props)
        console.log(props.name)
        this.state = { type: this.typeofFile(props.name) }

    }

    typeofFile(fileName) {
        let dotIndex = fileName.lastIndexOf('.');
        if (dotIndex == -1)
            return "unknown"
        return fileName.slice(dotIndex + 1)
    }

    _render() {
        switch (this.props.view) {
            case "normal":
                return (
                    <div className="fileDivNormal">
                        <img src={IconMap[this.state.type]} alt="" />
                        <p>{this.props.name}</p>
                    </div>
                )


            case "detail":
                return (
                    <div className="fileDivDetail">
                        <img  src={IconMap[this.state.type]} alt="" />
                        <div className="fileDivDetail_Information">
                            <div className="fileDivDetail_NameDate">
                                <div>{this.props.name}</div>
                                <div>{this.props.date}</div>
                            </div>
                            <div className="fileDivDetail_Volume">{this.props.volume}</div>
                        </div>
                    </div>
                )
        }
    }

    render() {
        return this._render();
    }

}

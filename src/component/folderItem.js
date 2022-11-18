import React from "react";
import IconMap from "./IconMap";

import './folderItem.css'


export default class FolderItem extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return (
            <div className="folderItem"  onClick={this.props?.onClick} >
                <img src={IconMap["folder"]} alt=""/>
                <p>{this.props.name}</p>   
            </div>
        )
    }

}
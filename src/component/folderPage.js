import React from "react";
import FileViewer from "./fileViewer";


export default class FolderPage extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <FileViewer view={this.props.view} children = {this.props.folderContent} />
    }
}
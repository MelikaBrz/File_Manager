import React from "react";
import FolderItem from "./folderItem";
import "./folderViewer.css"



export default class FolderViewer extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="folder-viewer" style={{ width: "608px" }}>
                <h1 style={{ fontWeight: "bold", padding: ".1rem 1.5rem", color: "#111111bb", fontSize: "larger" }}>Folders</h1>
                <div className="Folders" style={{ paddingLeft: "1rem", display: "flex", flexDirection: "row", overflowX: "scroll" }}>
                    {
                        Object.keys(this.props.folders).map((folder, index) => {
                            return <FolderItem
                                name={folder}
                                volume={this.props.folders[folder].volume}
                                filenumbers={Object.keys(this.props.folders[folder].content).length}
                                onClick={() => this.props.onClickFolder(folder)}
                                onDelete={() => this.props.onDeleteFolder(folder)}
                                onRename={(newName) => {this.props.onRenameFolder(folder, newName)}}
                            />
                        })
                    }
                </div>
            </div>
        )
    }

}
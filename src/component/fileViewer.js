import React from "react";
import FileItem from "./fileItem";




export default class FileViewer extends React.Component {
    constructor(props) {
        super(props)

    }
    _render() {
        switch (this.props.view) {
            case "list":
                return (
                    <div className="fileViewerList" onContextMenu >
                        {
                            this.props.children.map((file, index) => {

                                return <FileItem name={file.name}
                                    view={"detail"}
                                    volume={file.volume}
                                    date={file.date}
                                    onClick={this.props.onFileOpen}
                                />
                            })
                        }
                    </div>
                )

            default:
                return (
                    <div className="fileViewerDefualt">
                        {
                            this.props.children.map((file, index) => {
                                return <FileItem name={file.name} view={"normal"} volume={file.volume} date={file.date} />
                            })
                        }
                    </div>
                )
        }


    }

    render() {
        return this._render();
    }

}
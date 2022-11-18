import React from "react";
import FileViewer from "./fileViewer";
import FolderItem from "./folderItem";
import TopNavBar from "./topNavBar";
export default class FileManager extends React.Component {
    constructor(props) {
        super(props)
        this.state =
        {
            showFolderContent: false,
            currentFolder: null,
            db: props.db
        }
    }

    createNewFolder() {
        let name = "New Folder"
        let cnt = 0;
        while (true) {
            if ( (cnt == 0 ? name : name + cnt)  in this.state.db)
                cnt += 1
            else
                break
        }

        let tmp = this.state.db
        tmp[name + cnt] = {
            date: Date(),
            content: []
        }

        this.setState(
            {
                db: tmp
            }
        )


    }


    render() {
        return (
            <>
                <TopNavBar createNewFolder={this.createNewFolder.bind(this)} />
                {!this.state.showFolderContent ?
                    Object.keys(this.state.db).map((key, index) => {
                        return (
                            <FolderItem name={key} onClick={() => {
                                this.setState({
                                    showFolderContent: true,
                                    currentFolder: key
                                })
                            }} />
                        )
                    }
                    )
                    :
                    <FileViewer view={'list'} children={this.state.db[this.state.currentFolder].content} />
                }
            </>
        )
    }


}
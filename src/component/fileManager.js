import React from "react";
import ContextMenu from "./contextMenu";
import FileViewer from "./fileViewer";
import FolderItem from "./folderItem";
import FolderViewer from "./folderViewer";
import { LeftSideBar } from "./leftSideBar";
import LastRecents from "./recent";
import Recents from "./recent";
import TopNavBar from "./topNavBar";
export default class FileManager extends React.Component {
    constructor(props) {
        super(props)
        this.state =
        {
            showFolderContent: false,
            currentFolder: null,
            db: props.db,
            recentList: []
        }
    }

    createNewFolder() {
        let name = "New Folder"
        let cnt = 0;
        while (true) {
            if ((cnt == 0 ? name : name + cnt) in this.state.db)
                cnt += 1
            else
                break
        }

        let tmp = this.state.db
        tmp[cnt == 0 ? name : name + cnt] = {
            date: Date(),
            content: {}
        }

        this.setState(
            {
                db: tmp
            }
        )


    }

    onDeleteFolder = (folderName) => {
        let tmp = this.state.db;
        delete tmp[folderName]
        this.setState({
            db: tmp
        })
    }

    onClickFolder = (folder) => {
        this.setState(
            {
                showFolderContent: true,
                currentFolder: folder
            }
        )
    }

    onRenameFolder = (oldName, newName) => {
        let { db } = this.state
        if (oldName in db) {

            if (newName in db) {
                return;
            }
            db[newName] = db[oldName];
            delete db[oldName];
            this.setState(
                {
                    db: db
                }
            )
        }
    }

    addToRecentList(filename) {
        const element = this.state.recentList.find((elm) => { return elm.name == filename })
        let tmp = this.state.recentList
        if (element) {
            tmp.splice(tmp.indexOf(element), 1)
        }
        tmp.unshift({
            folder: this.state.currentFolder,
            ...this.state.db[this.state.currentFolder].content[filename]
        })

        this.setState(
            {
                recentList: tmp
            }
        )

    }


    render() {
        return (
            <div className="filemanager" >
                <LeftSideBar />
                <div className="filemanager-page">
                    <TopNavBar createNewFolder={this.createNewFolder.bind(this)} />

                    {!this.state.showFolderContent ?
                        <>
                            <FolderViewer folders={this.state.db}
                                onClickFolder={this.onClickFolder}
                                onDeleteFolder={this.onDeleteFolder}
                                onRenameFolder={this.onRenameFolder}
                            />
                            <LastRecents recentList={this.state.recentList} />
                        </>
                        :
                        <FileViewer
                            view={'list'}
                            children={Object.values(this.state.db[this.state.currentFolder].content)}
                            onFileOpen={this.addToRecentList.bind(this)}
                        />
                    }
                </div>
            </div>
        )
    }


}
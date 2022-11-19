import React from "react";
import IconMap from "./IconMap";
import './folderItem.css'


export default class FolderItem extends React.Component {
    constructor(props) {
        super(props)
        this.state =
        {
            onRename:false,
            showContextMenu: false
        }
        this.folderRef = React.createRef();
        this.inputFolder = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('click', this._handleClick)
    }
    componentWillUnmount() {
        document.removeEventListener('click', this._handleClick)
    }

    _handleContextMenu = (event) => {
        event.preventDefault();
        this.setState({
            showContextMenu: true,
        });

        const clickX = event.clientX;
        const clickY = event.clientY;
        const screenW = window.innerWidth;
        const screenH = window.innerHeight;
        const rootW = this.folderRef.current.offsetWidth;
        const rootH = this.folderRef.current.offsetHeight;

        const right = (screenW - clickX) > rootW;
        const left = !right;
        const top = (screenH - clickY) > rootH;
        const bottom = !top;

        if (right) {
            this.folderRef.current.style.left = `${clickX + 5}px`;
        }

        if (left) {
            this.folderRef.current.style.left = `${clickX - rootW - 5}px`;
        }

        if (top) {
            this.folderRef.current.style.top = `${clickY + 5}px`;
        }

        if (bottom) {
            this.folderRef.current.style.top = `${clickY - rootH - 5}px`;
        }
    }
    _handleClick = (event) => {
        const { showContextMenu,onRename } = this.state;

        if(onRename && showContextMenu)
        {
            this.setState(
                {
                    showContextMenu:false
                }
            )
            return;
        }

        if(onRename)
        {
            if(event.target.id == this.inputFolder.current.id){
                return
            }
            this._handleRename()
            return;
        }
        const wasOutside = !(event.target.contains === this.folderRef.current)
        if ((wasOutside && showContextMenu))
            this.setState({ showContextMenu: false })
    }

    _handleRename()
    {
        const name = this.inputFolder.current.value;
        this.props?.onRename(name);  
        this.setState(
            {
                onRename:false
            }
        )      
    }

    _renderContextMenu() {
        const { showContextMenu } = this.state;
        return (showContextMenu || null) &&
            <div ref={this.folderRef} className="folderContextMenu" id="folderContextMenu">
                <div onClick={this.props?.onCopy} className="folderContextMenu--option">Copy</div>
                <div onClick={()=>{this.setState({onRename:true})}} className="contextMenu--option">Rename</div>
                <div onClick={this.props?.onDelete} className="contextMenu--option">Delete</div>
                <div className="contextMenu--separator" />
                <div onClick={this.props?.onProperties} className="contextMenu--option">properties</div>
            </div>
    }

    _handleFolderName()
    {
        const {onRename} = this.state;
        return (
            onRename ? 
                <input id = "folderNameInput" ref={this.inputFolder} />
            :
            <p>{this.props.name}</p>
        )
    }

    render() {
        return (
            <div >
                {this._renderContextMenu()}
                <div onContextMenu={this._handleContextMenu} className="folderItem" onClick={this.props?.onClick}>
                    <div className="folder" >
                        <img src={IconMap["folder"]} alt="" />
                        <div className="rightIcons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                            </svg>
                        </div>
                    </div>
                    <div >
                        {this._handleFolderName()}
                    </div>
                    <div className="properties">
                        <p style={{ paddingRight: "6.5rem" }}>{this.props.filenumbers} files</p>
                        <p >{this.props.volume}</p>
                    </div>
                </div>


            </div>

        )
    }

}
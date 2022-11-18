import React from "react";
import './components.css'
import { CHECK_BOX_STATE } from './checkBoxBar'
import Flag from './flag'

const EMAIL_STATE = {
    UNREAD: "blue",
    READ: "gray"
}
class EmailListItem extends React.Component {
    constructor(props) {
        super(props)
    }

    static getDerivedStateFromProps(props, state) {
        return { showCheckBox: props.showCheckBox, checkState: props.checkState }
    }

    isChecked() {
        switch (this.props.checkState) {
            case CHECK_BOX_STATE.ALL:
                return true
            case CHECK_BOX_STATE.NONE:
                return false
            case CHECK_BOX_STATE.READ:
                if (this.props.state == EMAIL_STATE.READ)
                    return true
                return false
            case CHECK_BOX_STATE.UNREAD:
                if (this.props.state == EMAIL_STATE.UNREAD)
                    return true
                return false
            case CHECK_BOX_STATE.FLAGGED:
                if(this.props.flag != 0)
                    return true
                return false
            case CHECK_BOX_STATE.UN_FLAGGED:
                if(this.props.flag == 0)
                    return true
                return false
            default:
                return false
        }
    }

    render() {
        return (

            <div className="pm">
                {this.props.showCheckBox ?
                    (
                        <input type="checkbox" style={{ width: '15px', height: '15px' }} checked={this.isChecked()} />
                    ) : null
                }
                <div className="lable" style={{ backgroundColor: this.props.state }} >
                </div>
                <Flag flags={['white', 'read', 'blue', 'green', 'red']} flag={this.props.flag} onChange={this.props.onChangeFlagState}/>
                <div onClick={this.props?.onClick}>
                    <img style={{ witdh: "40px", height: "35px", borderRadius: "50%" }} src={this.props.img}></img>
                    <b> {this.props.sender}</b>
                    <p style={{ fontSize: "small", marginLeft: "5rem" }}>{this.props.desc}</p>
                </div>
            </div>

        )
    }
}

export {
    EMAIL_STATE,
    EmailListItem
}
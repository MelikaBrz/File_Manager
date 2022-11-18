import React from "react";
import './setup.css'
import GoogleForm from "./googleForm";
// in k exportesh nakardam male hamin file faghat to file haye dige in vojod nadare pas negaran in nabash k 
// masalan to ye classe digatam hamchin esmio dari
const PAGE_STATES = {
    GET_ACCOUNT_TYPE: 0,
    GET_ACCOUNT_INF: 1
}

const ACCOUNTS_TYPE = {
    GOOGLE: 0,
    HOTMAIL: 1,
    YAHOO: 2,
    OFFICE: 3,
    OTHER: 2
}

const ACCOUNTS_TYPE_LIST = [
    { type: ACCOUNTS_TYPE.GOOGLE, name: "GOOGLE", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" },
    { type: ACCOUNTS_TYPE.HOTMAIL, name: "HOTMAIL", image: "https://www.pngitem.com/pimgs/m/298-2987934_clip-art-hotmail-png-microsoft-outlook-2013-logo.png" },
    { type: ACCOUNTS_TYPE.YAHOO, name: "YAHOO", image: "https://www.kindpng.com/picc/m/354-3541882_a-purple-email-icon-logo-yahoo-mail-png.png" },
    { type: ACCOUNTS_TYPE.OFFICE, name: "OFFICE", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Microsoft_Exchange_%282019-present%29.svg/1200px-Microsoft_Exchange_%282019-present%29.svg.png" },
    { type: ACCOUNTS_TYPE.OTHER, name: "OTHER", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkwwGYxyoKREL-xne3G-1aG-4J1qCjvjzc2QqnWZ-VuzS_HxjbjX-bO2zDcJrYyvi4R04&usqp=CAU" }
]

export default class AddNewAccount extends React.Component {
    constructor(props) {
        super(props)
        this.state = { page: PAGE_STATES.GET_ACCOUNT_TYPE, account_type: ACCOUNTS_TYPE.GOOGLE }
    }

    render() {
        switch (this.state.page) {
            case PAGE_STATES.GET_ACCOUNT_TYPE:
                return (
                    <div>
                        <div className="container1">
                            <div className="form-box" style={{ zIndex: "2", marginTop: "39rem" }}>
                                <div className="body-form">
                                    <div className="setup-form">
                                        <h1 style={{ fontSize: "25px", marginLeft: "1rem", marginBottom: "2.5rem" }}><em>Set up email</em></h1>
                                        {
                                            ACCOUNTS_TYPE_LIST.map((item, indx) => {
                                                return (
                                                    <form>
                                                        <div className="type" onClick={() => {
                                                            this.setState({
                                                                page: PAGE_STATES.GET_ACCOUNT_INF,
                                                                account_type: item.type
                                                            })
                                                        }}><img width="20px" height="20px" src={item.image} />{item.name}</div>
                                                    </form>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            // alan in tamom shod alan motevajo shodii ta inja 
            case PAGE_STATES.GET_ACCOUNT_INF:
                switch (this.state.account_type) {
                    case ACCOUNTS_TYPE.GOOGLE:
                        return <GoogleForm onAddNewAccount={(account_inf) => {this.props.onAddNewAccount({...account_inf,type:'Gmail'})}} />
                    case ACCOUNTS_TYPE.YAHOO:
                        return null
                    case ACCOUNTS_TYPE.OTHER:   
                        return null
                    default:
                        break;
                }

            default:
                return null

        }

    }


}


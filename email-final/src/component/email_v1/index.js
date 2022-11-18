import React from "react";
import './email.css'
import { LeftSideBar, LEFT_SIDE_BAR_PAGE_STATE } from "./components/leftSidBar";
import TopNavBar from "./components/topNavBar";

import { CheckBoxBar, CHECK_BOX_STATE } from "./components/checkBoxBar";
// import {CheckBo}
import CollapsibleButton from "./components/collapsibelButton";
import { EmailListItem, EMAIL_STATE } from "./components/emailListItem";

import AddNewAccount from "./components/addNewAccount";
import NewMail from "./components/newMail";

const PAGE_STATE = {
    HOME: 0,
    ADD_NEW_ACCOUNT: 1,
    READ_EMAIL: 2
}

const MAIN_PAGE_STATE = {
    SHOW_FOLDERS: 0,
    SHOW_READ_MAIL: 1,
    SHOW_NEW_MAIL: 2
}

export default class EmailBox extends React.Component {

    state = {
        showCheckBox: false,
        checkBoxState: CHECK_BOX_STATE.NONE,
        inbox_emails: [
            {
                flag: 0, state: EMAIL_STATE.UNREAD, sender: 'Fatemeh', desc: "hello,how are you?", img: "https://img.freepik.com/free-vector/indian-school-girl-happy-elementary-school-pupil-back-school_71593-1071.jpg?w=2000"
            },
            {
                flag: 0, state: EMAIL_STATE.UNREAD, sender: 'Fatemeh', desc: "hello,how are you?", img: "https://img.freepik.com/free-vector/indian-school-girl-happy-elementary-school-pupil-back-school_71593-1071.jpg?w=2000"
            },
            {
                flag: 0, state: EMAIL_STATE.UNREAD, sender: 'Fatemeh', desc: "hello,how are you?", img: "https://img.freepik.com/free-vector/indian-school-girl-happy-elementary-school-pupil-back-school_71593-1071.jpg?w=2000"
            },
            {
                flag: 0, state: EMAIL_STATE.UNREAD, sender: 'Fatemeh', desc: "hello,how are you?", img: "https://img.freepik.com/free-vector/indian-school-girl-happy-elementary-school-pupil-back-school_71593-1071.jpg?w=2000"
            },
            {
                flag: 0, state: EMAIL_STATE.UNREAD, sender: 'Fatemeh', desc: "hello,how are you?", img: "https://img.freepik.com/free-vector/indian-school-girl-happy-elementary-school-pupil-back-school_71593-1071.jpg?w=2000"
            },
            {
                flag: 0, state: EMAIL_STATE.UNREAD, sender: 'Fatemeh', desc: "hello,how are you?", img: "https://img.freepik.com/free-vector/indian-school-girl-happy-elementary-school-pupil-back-school_71593-1071.jpg?w=2000"
            }
            , {
                flag: 0, state: EMAIL_STATE.UNREAD, sender: 'Fatemeh', desc: "hello,how are you?", img: "https://img.freepik.com/free-vector/indian-school-girl-happy-elementary-school-pupil-back-school_71593-1071.jpg?w=2000"
            },
            {
                flag: 0, state: EMAIL_STATE.UNREAD, sender: 'Fatemeh', desc: "hello,how are you?", img: "https://img.freepik.com/free-vector/indian-school-girl-happy-elementary-school-pupil-back-school_71593-1071.jpg?w=2000"
            }
            , {
                flag: 0, state: EMAIL_STATE.UNREAD, sender: 'Fatemeh', desc: "hello,how are you?", img: "https://img.freepik.com/free-vector/indian-school-girl-happy-elementary-school-pupil-back-school_71593-1071.jpg?w=2000"
            },
            {
                flag: 0, state: EMAIL_STATE.UNREAD, sender: 'Fatemeh', desc: "hello,how are you?", img: "https://img.freepik.com/free-vector/indian-school-girl-happy-elementary-school-pupil-back-school_71593-1071.jpg?w=2000"
            }
            , {
                flag: 0, state: EMAIL_STATE.UNREAD, sender: 'Fatemeh', desc: "hello,how are you?", img: "https://img.freepik.com/free-vector/indian-school-girl-happy-elementary-school-pupil-back-school_71593-1071.jpg?w=2000"
            },
            {
                flag: 0, state: EMAIL_STATE.UNREAD, sender: 'Fatemeh', desc: "hello,how are you?", img: "https://img.freepik.com/free-vector/indian-school-girl-happy-elementary-school-pupil-back-school_71593-1071.jpg?w=2000"
            }
        ],
        draft_emails:[],
        sent_emails:[],
        accounts: [{ type: "Gmail", name: "melikabarzegar@gmail.com", pass: "123456" }, { type: "Gmail", name: "melikabarzegar1401@gmail.com", pass: "12345" }],
        folderState: LEFT_SIDE_BAR_PAGE_STATE.NONE,
        pageState: PAGE_STATE.HOME,
        readEmail: null,
        showEmail: false,
        mainPageState: MAIN_PAGE_STATE.SHOW_FOLDERS

    }

    folderManager() {
        switch (this.state.folderState) {
            case LEFT_SIDE_BAR_PAGE_STATE.NONE:
                return (
                    <div className="emaillist">
                        <CollapsibleButton lable='Unread'>
                            <div className="message">
                                {
                                    this.state.inbox_emails.map((item, indx) => {
                                        if (item.state == EMAIL_STATE.UNREAD)
                                            return <EmailListItem {...item} onClick={() => {
                                                let items = this.state.inbox_emails;
                                                items[indx].state = EMAIL_STATE.READ
                                                this.setState({
                                                    inbox_emails: items,
                                                    mainPageState:MAIN_PAGE_STATE.SHOW_READ_MAIL,
                                                    readEmail: item
                                                })
                                            }} showCheckBox={this.state.showCheckBox}
                                                checkState={this.state.checkBoxState}

                                                onChangeFlagState={(flag_indx) => {
                                                    let items = this.state.inbox_emails;
                                                    items[indx].flag = flag_indx;
                                                    this.setState({
                                                        inbox_emails: items
                                                    })
                                                }}

                                            />
                                    })
                                }
                            </div>
                        </CollapsibleButton>

                        <CollapsibleButton lable='Inbox'>
                            <div className="message">
                                {
                                    this.state.inbox_emails.map((item, indx) => {
                                        return <EmailListItem {...item} showCheckBox={this.state.showCheckBox} checkState={this.state.checkBoxState}
                                            onChangeFlagState={(flag_indx) => {
                                                let items = this.state.inbox_emails;
                                                items[indx].flag = flag_indx;
                                                this.setState({
                                                    inbox_emails: items
                                                })
                                            }}
                                            onClick={() => {
                                                let items = this.state.inbox_emails;
                                                items[indx].state = EMAIL_STATE.READ
                                                this.setState({
                                                    inbox_emails: items,
                                                    mainPageState:MAIN_PAGE_STATE.SHOW_READ_MAIL,
                                                    readEmail: item

                                                })
                                            }}
                                        />
                                    })
                                }
                            </div>
                        </CollapsibleButton>
                    </div>
                )
            case LEFT_SIDE_BAR_PAGE_STATE.INBOX:
                return (
                    <div className="emaillist">
                        <div className="message">
                            {
                                this.state.inbox_emails.map((item, indx) => {
                                    return <EmailListItem {...item} showCheckBox={this.state.showCheckBox} checkState={this.state.checkBoxState}
                                        onChangeFlagState={(flag_indx) => {
                                            let items = this.state.inbox_emails;
                                            items[indx].flag = flag_indx;
                                            this.setState({
                                                inbox_emails: items
                                            })
                                        }}
                                        onClick={() => {
                                            let items = this.state.inbox_emails;
                                            items[indx].state = EMAIL_STATE.READ
                                            this.setState({
                                                inbox_emails: items,
                                                mainPageState:MAIN_PAGE_STATE.SHOW_READ_MAIL,
                                                readEmail: item

                                            })
                                        }}
                                    />
                                })
                            }
                        </div>
                    </div>
                )
            case LEFT_SIDE_BAR_PAGE_STATE.SENT:
                return (
                    <div className="emaillist">
                        <div className="message">
                            {
                                this.state.inbox_emails.map((item, indx) => {
                                    if (item.state == EMAIL_STATE.READ)
                                        return <EmailListItem {...item} showCheckBox={this.state.showCheckBox} checkState={this.state.checkBoxState}
                                            onChangeFlagState={(flag_indx) => {
                                                let items = this.state.inbox_emails;
                                                items[indx].flag = flag_indx;
                                                this.setState({
                                                    inbox_emails: items
                                                })
                                            }}
                                        />
                                })
                            }
                        </div>
                    </div>
                )
            case LEFT_SIDE_BAR_PAGE_STATE.DRAFT:
                return (
                    <div className="emaillist">
                        <div className="message">
                            {
                                this.state.inbox_emails.map((item, indx) => {
                                    if (item.state == EMAIL_STATE.READ)
                                        return <EmailListItem {...item} showCheckBox={this.state.showCheckBox} checkState={this.state.checkBoxState}
                                            onChangeFlagState={(flag_indx) => {
                                                let items = this.state.inbox_emails;
                                                items[indx].flag = flag_indx;
                                                this.setState({
                                                    inbox_emails: items
                                                })
                                            }}
                                        />
                                })
                            }
                        </div>
                    </div>
                )
            case LEFT_SIDE_BAR_PAGE_STATE.FLAGED:
                return (
                    <div className="emaillist">
                        <div className="message">
                            {
                                this.state.inbox_emails.map((item, indx) => {
                                    if (item.flag)
                                        return <EmailListItem {...item} showCheckBox={this.state.showCheckBox} checkState={this.state.checkBoxState}
                                            onChangeFlagState={(flag_indx) => {
                                                let items = this.state.inbox_emails;
                                                items[indx].flag = flag_indx;
                                                this.setState({
                                                    inbox_emails: items,
                                                    mainPageState:MAIN_PAGE_STATE.SHOW_READ_MAIL,
                                                    readEmail: item

                                                })
                                            }}
                                        />
                                })
                            }
                        </div>
                    </div>
                )
            case LEFT_SIDE_BAR_PAGE_STATE.SCHEDULED:
                return null
            case LEFT_SIDE_BAR_PAGE_STATE.SETTINGS:
                return null
            default:
                return null
        }
    }

    mainPageManager() {
        switch (this.state.mainPageState) {
            case MAIN_PAGE_STATE.SHOW_FOLDERS:
                return this.folderManager()
            case MAIN_PAGE_STATE.SHOW_READ_MAIL:
                return (
                    <div className="emailzone">
                        < div className="currentemail" >
                            <svg onClick={() => this.setState({ mainPageState: MAIN_PAGE_STATE.SHOW_FOLDERS })} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                            <p style={{ fontSize: "20px", textAlign: "center" }}><b>You can get 3000$ to improve your French ,MElika!!!!!!!!!!</b></p >
                            <div>
                                <img style={{ borderRadius: "50%" }} src={this.state.readEmail?.img}></img>
                                <div style={{ marginTop: "-7rem", marginLeft: "8rem", textAlign: "left" }}>
                                    <p style={{}}><b> {this.state.readEmail?.title}</b>{this.state.readEmail?.email}</p>
                                    <p style={{ fontSize: "small" }}>To{this.state.readEmail.reciever}</p>
                                </div>
                            </div>
                            <p>
                                <hr style={{ marginTop: "3rem", textAlign: "left" }} />
                                {this.state.readEmail.text}
                            </p>
                        </div>
                    </div>
                )
            case MAIN_PAGE_STATE.SHOW_NEW_MAIL:
                return <NewMail />;
            default:
                return null
        }
    }

    pageManager() {
        switch (this.state.pageState) {
            case PAGE_STATE.HOME:
                console.log('im hear')
                return (
                    <div className="container">
                        <div className="all">
                            <LeftSideBar accounts={this.state.accounts} newMail={() => { this.setState({mainPageState:MAIN_PAGE_STATE.SHOW_NEW_MAIL}) }}
                                onChangePage={(folder) => this.setState({
                                    folderState: folder,
                                    mainPageState:MAIN_PAGE_STATE.SHOW_FOLDERS
                                })}
                            />
                            <div className="emailzone">
                                <TopNavBar onShowCheckBox={() => { this.setState({ showCheckBox: !this.state.showCheckBox }) }}
                                    onAddNewAccount={() => { this.setState({ pageState: PAGE_STATE.ADD_NEW_ACCOUNT }) }}
                                // onContacts={()=>{}}
                                // onTrash={()=>{}}
                                />
                                <CheckBoxBar >
                                    <p onClick={() => { this.setState({ checkBoxState: CHECK_BOX_STATE.ALL }) }}> All</p>
                                    <p onClick={() => { this.setState({ checkBoxState: CHECK_BOX_STATE.NONE }) }}> None</p>
                                    <p onClick={() => { this.setState({ checkBoxState: CHECK_BOX_STATE.READ }) }}> Read</p>
                                    <p onClick={() => { this.setState({ checkBoxState: CHECK_BOX_STATE.UNREAD }) }}> Unread</p>
                                    <p onClick={() => { this.setState({ checkBoxState: CHECK_BOX_STATE.FLAGGED }) }}> Flagged</p>
                                    <p onClick={() => { this.setState({ checkBoxState: CHECK_BOX_STATE.UN_FLAGGED }) }}> Unflagged</p>
                                </CheckBoxBar>
                                {this.mainPageManager()}
                            </div>
                        </div>
                    </div>
                )
            case PAGE_STATE.ADD_NEW_ACCOUNT:
                return <AddNewAccount onAddNewAccount={(account) => {
                    console.log(`add new  account ${account}`);
                    let temp = this.state.accounts
                    temp.push(account)
                    this.setState(
                        {
                            accounts: temp,
                            pageState: PAGE_STATE.HOME
                        }
                    )
                }} />

            default:
                return null
        }
    }

    render() {
        return (
            this.pageManager()
            
        )
    }
}
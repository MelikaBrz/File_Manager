import React from "react"
import "./form.css"

const PAGE_STATE = {
    GET_EMAIL: 0,
    GET_PASS: 1
}
export default class GoogleForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showbox: false, goNextPage: false, page: PAGE_STATE.GET_EMAIL };
        this.accountInf = { name: null, pass: null }
    }
    pageManager() {
        switch (this.state.page) {
            case PAGE_STATE.GET_EMAIL:
                return (
                    <div className="container1">
                        <div className="form-box">
                            <div className="header-form">
                                <h4 className="text-primary text-center">
                                    <i className="fa fa-user-circle" style={{ fontSize: "110px" }}>
                                    </i>
                                </h4>
                                <div className="image">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" />
                                    <h1 style={{ fontSize: "25px" }}>Sign in</h1>
                                    <p>To Continue To Gmail </p>
                                </div>
                            </div>
                            <div className="body-form">
                                <form>
                                    <div >
                                        <input onChange={(event) => { this.accountInf.name = event.target.value }} type="email" className="form-control" id="email" placeholder="Email or Phone" />
                                    </div>
                                    <div className="message">
                                        <a href="#" style={{ marginBottom: "3rem", fontSize: "15px" }}> Forgot email?</a >
                                        <div className="createaccount-button" style={{ fontSize: "15px" }} onClick={() => this.createAccount()}>Create account</div>
                                    </div>
                                    {this.state.showbox ? (<div className="create-account" >
                                        <div>For myself</div>
                                        <div>To manage my business</div>
                                    </div>) : null}
                                    <button className="next" onClick={() => this.setState({ page: PAGE_STATE.GET_PASS })}>Next</button>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            case PAGE_STATE.GET_PASS:
                return (
                    <div className="container1">
                        <div className="form-box">
                            <div className="header-form">
                                <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}>
                                </i>
                                </h4>
                                <div className="image">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" />
                                    <h1 style={{ fontSize: "25px" }}>Sign in</h1>
                                    <p>To Continue To Gmail</p>

                                </div>
                            </div>
                            <div className="body-form">
                                <form>
                                    <div >
                                        <div>
                                            <input
                                                type={this.state.showPass ? "text" : "password"}
                                                className="form-control"
                                                placeholder="Password....."
                                                onChange={(event) => { this.accountInf.pass = event.target.value }}
                                                style={{ marginBottom: "2rem", width: "310px", padding: "1rem 2rem", borderBottomRightRadius: "10% 24px", borderBottomLeftRadius: "10% 24px", borderTopRightRadius: "10% 24px", borderTopLeftRadius: "10% 24px" }} />


                                            {this.state.showPass ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { this.setState({ showPass: !this.state.showPass }) }} width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                                </svg>
                                            )
                                                : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { this.setState({ showPass: !this.state.showPass }) }} width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                                    </svg>
                                                )}
                                        </div>
                                    </div>
                                    <div className="message">
                                        <a href="#" style={{ marginBottom: "3rem", fontSize: "15px" }}> Forgot password?</a >
                                    </div>
                                    <button className="next" onClick={() => { this.props?.onAddNewAccount(this.accountInf) }}>Next</button>
                                </form>
                            </div>
                        </div>
                    </div>
                )
        }
    }
    render() {
        return (
            this.pageManager()
        )
    }
}
import React from "react";
import Collapsible from 'react-collapsible';
import './components.css'
export default class CollapsibleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false }
    }
    render() {
        return (
            <div className="Collapsiblemenu">
                <button onClick={() => { this.setState({ open: !this.state.open }) }} className="collapsiblebutton" style={{ backgroundColor: "white", border: "none" }}>
                    {!this.state.open ?
                        (<svg xmlns="http://www.w3.org/2000/svg" width="20" style={{ marginRight: ".5rem" }} height="20" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" style={{ marginRight: ".5rem", transform: "rotate(180deg)" }} height="20" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg>
                        )
                    }
                    {this.props.lable}
                </button>
                {
                    <Collapsible open={this.state.open} className="messagebox">
                        {this.state.open && this.props.children}
                    </Collapsible>
                }
            </div>
        )
    }

}
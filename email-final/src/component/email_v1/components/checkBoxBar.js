import React from "react";
import './components.css'


const CHECK_BOX_STATE={
    ALL:0,
    NONE:1,
    READ:2,
    UNREAD:3,
    FLAGGED:4,
    UN_FLAGGED:5
}
class CheckBoxBar extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={show:false};
    }
    render()
    {
        return(
            <div className="navbar">
              <label htmlFor="subscribe">
                <input ref={ref => this.checkboxRef = ref} type="checkbox" id="subscribe" name="subscribe" style={{ width: "15px", height: "15px" }} />
              </label>
              <svg xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "35rem" }} onClick={()=>{this.setState({show:!this.state.show})}} width="10" height="10" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
              {this.state.show? (
                < ul className="checkboxMenu">
                  {this.props.children}
                </ul>
              ) : null}
            </div>
        )
    }
}

// module.exports={
//     CHECK_BOX_STATE,
//     CheckBoxBar
// }

export {
    CheckBoxBar,
    CHECK_BOX_STATE
}



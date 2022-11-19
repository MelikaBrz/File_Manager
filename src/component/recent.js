import React from "react";
import FileItem from "./fileItem";
import './recent.css';

export default class LastRecents extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <h1 style={{ fontWeight: "bold", padding: ".1rem 1.5rem", color: "#111111bb", fontSize: "larger" }}>Recents</h1>
                <div className="Recents">
                    {this.props.recentList.map((recent, index) => {
                        return (
                            <div className="Recents-icon">
                                <FileItem name={recent.name} view={"detail"} volume={recent.volume} date={recent.date} />
                            </div>
                        )
                    })}


                </div>
            </>

        )
    }
}

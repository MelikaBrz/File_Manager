
import React from 'react';
class Rename extends React.Component {

    state = {
        name: "photo.png",
        rename: false
    }
    handleChange = (event) => {
        this.setState({ name: event.target.value })
        console.log(event.target.value);
    };
    render() {
        return (
            <div>
                <img style={{ width: "40px", height: "40px" }} src="https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png" />
                <button  onClick={() => this.setState({ rename: !this.state.rename })}>Rename</button>
                <div >
                    {this.state.rename ? 
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.name}
                        /> : <p>{this.state.name}</p>}
                    </div>

            </div>
        );
    }
};


export default Rename
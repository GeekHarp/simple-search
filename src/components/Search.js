import React, { Component } from 'react';

const inputStyle = {
    width : "90%",
    padding : "10px 0 10px 40px",
    borderRadius : "10px",
    backgroundImage : "url('search-solid.svg')",
    backgroundPosition: "10px 7px",
    backgroundRepeat : "no-repeat",
    backgroundSize : "20px"
}

export default class Search extends Component {

    state = {
        input : ""
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
        this.props.userSearch(e.target.value)
    }

    // onClick = (e) => {
    //     e.preventDefault();
    //     this.props.userSearch(this.state.input)
    //     this.setState({ input : "" });
    // }

    // const inputStyle = {
    //     width : "100%",
    //     padding : "12px 20px"
    // }

    render(){
        return (
          <form>

            <input
            type="text"
            name="input"
            value={this.state.input}
            onChange={this.onChange}
            style={inputStyle}
            placeholder="Name Or Email"
            className="text-input"
            />

          </form>
        );
    }
}

// export default Search;

// <button onClick={this.onClick}>Submit</button>
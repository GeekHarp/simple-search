import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Body from './components/Body';

class App extends Component {

    state = {
        users : [],
        filteredArr : []
    }

    componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/users";
        fetch(url)
            .then(response => response.json())
                .then(json => { this.setState({ users : json })})
    }

    //Method needs to be here to setState(?)
    //I need to pass 'filteredArr' to <Body />
    userSearch = (input) => {
        const arr = [...this.state.users.filter(user => user.email.toLowerCase().includes(input) || user.name.toLowerCase().includes(input))]
        if (arr.length !== 0) {
            this.setState({ filteredArr : arr })
        } else {
            this.setState({ filteredArr : undefined })
        }
        // //if user searching by email
        // if (input.includes("@")) {
        //     arr = [...this.state.users.filter(user => user.email.toLowerCase().includes(input))];
        //     if (arr.length !== 0) {
        //         this.setState({ filteredArr : arr });
        //     }
        //     else {
        //         this.setState({ filteredArr : undefined })
        //     }
        // //else user searching by name
        // } else {
        //     arr = [...this.state.users.filter(user => user.name.toLowerCase().includes(input))];
        //     if (arr.length !== 0) {
        //         this.setState({ filteredArr : arr });
        //     }
        //      else {
        //         this.setState({ filteredArr : undefined })
        //     }
        // }
    }

    render(){
        return (
          <div className="container">
            <Search userSearch={this.userSearch}/>
            <Body users={this.state.users} filteredArr={this.state.filteredArr} />
          </div>
        );
    }
}

export default App;

// <Body users={this.state.users} filteredArr={this.state.filteredArr} />
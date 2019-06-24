import React, { Component } from 'react';
import UserInfo from './UserInfo';

export default class Body extends Component {

    render(){
        const filteredArr = this.props.filteredArr;
        // console.log(filteredArr)
        // return <h1>test</h1>
        //if the search returns no result.. User type gibberish for eg.
        if (filteredArr === undefined) {
            return <h1>No such User/Email!</h1>
        }
        //if the name/email is in 'DB'..
        else if (filteredArr.length !== 0) {
            return filteredArr.map(user => (
                <UserInfo user={user} key={user.id} />
            ))
        }
        //this condition runs when the page first loads..
        else {
            return this.props.users.map(user => (
                <UserInfo user={user} key={user.id}/>
            ))
        }

    }
}
import React, { Component } from 'react';

//Must be placed outside?(O.o)??
const divStyle = {
    display : "flex",
    alignItems : "center",
    justifyContent : "space-around",
    border : "2px solid black",
    borderRadius : "5px",
    margin : "20px 0",
    backgroundColor : "white"
}

export default class UserInfo extends Component {

    render(){

        const { name, email, address, phone, website, company } = this.props.user;

        const { street, suite, city, zipcode } = address;

        const emailUrl = `mailto: ${email}`

        const url = `https://www.${website}`;

        return(
            <div style={divStyle}>

                <i className="fas fa-user"></i>

                    <div style={{ padding : "10px" }}>

                        <h2>{name}</h2>

                        <div style={{ display : "flex", alignItems : "center" }}>
                            <i className="fas fa-map-marker-alt"></i>
                            &nbsp;&nbsp;
                            <p>
                                {street} {suite}
                                <br/>
                                {city} {zipcode}
                            </p>
                        </div>

                        <p>
                            <i className="fas fa-phone"></i>
                            &nbsp;&nbsp;
                            {phone}
                        </p>

                        <p>
                            <i className="fab fa-internet-explorer"></i>
                            &nbsp;&nbsp;
                            <a href={url} className="a-tag">www.{website}</a>
                        </p>

                        <p>
                            <i className="fas fa-building"></i>
                            &nbsp;&nbsp;
                            {company.name}
                        </p>

                        <p>
                            <i className="fas fa-envelope"></i>
                            &nbsp;&nbsp;
                            <a href={emailUrl} className="a-tag">{email}</a>
                        </p>

                    </div>

            </div>
        )
    }

}

// <p>Address line 2: {city} {zipcode}</p>
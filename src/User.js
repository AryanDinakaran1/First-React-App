import React from 'react';

function User(props) {

    if (props.username === "Aryandinakaran1")
    {
        return (
            <div>
            <h3>{ props.username }</h3>
            <p>First Name: { props.firstName }</p>
            <p>Last Name: { props.lastName }</p>
            <p>Age: { props.age }</p>
            </div>
        )
    }
    else if (props.username === "Elonism")
    {
        return (
            <div>
            <h3>{ props.username  }</h3>
            <p>First Name: { props.firstName }</p>
            <p>Last Name: { props.lastName }</p>
            <p>Age: { props.age }</p>
            </div>
        )
    }
    else
    {
        return (
            <div>
                <h1>Nah!</h1>
            </div>
        )
    }
}

// Elon Musk
User.defaultProps = {
    firstName: "Elon",
    lastName: "Musk",
    username: "Elonism",
    age: 50,
}

export default User;
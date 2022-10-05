import React from 'react';

class User extends React.Component {
    render() {
        const firstName = "Aryan";
        const lastName = "Dinakaran";
        const username = "Aryandinakaran1";
        const age = 16;
    
        if (username == "Aryandinakaran1")
        {
            return (
                <div>
                <h3>{ username }</h3>
                <p>First Name: { firstName }</p>
                <p>Last Name: { lastName }</p>
                <p>Age: { age }</p>
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
}

export default User;
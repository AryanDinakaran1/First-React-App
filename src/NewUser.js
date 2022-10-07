import React from 'react';

class NewUser extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const title = this.props.name
        return(
            <h1>{ title }</h1>
        );
    }
}

NewUser.defaultProps = {
    name: "Hello, World!"
}

export default NewUser;
import React from 'react';

class NewUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    updateCount() {
        this.setState({
            count: this.state.count+1,
        });
    }

    render() {
        return(
            <div>
                <h1>Count: { this.state.count }</h1>
                <button onClick={() => this.updateCount()}>Count</button>
            </div>
        );
    }
}

NewUser.defaultProps = {
    name: "Hello, World!"
}

export default NewUser;
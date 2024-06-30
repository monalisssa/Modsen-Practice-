import React, {Component} from 'react';



interface MyComponentState {
    title: string;
}

class Button extends Component<{}, MyComponentState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            title: 'Show',
        };
    }

    handleClick = () => {
        this.setState( (prevState)=> ({
            title: prevState.title === 'Show' ? 'Hide' : 'Show'
        }));
    };

    render() {
        const { title } = this.state;

        return (
            <button onClick={this.handleClick}>{title}</button>

        );
    }
}

export default Button;
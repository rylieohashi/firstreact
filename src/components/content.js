import React, {Component} from 'react';
import helloCat from './images/hellocat.jpg';

class Content extends Component {
    render() {
        const data = this.props.data;

        return (
            <p>
                Hello, <b>{data.yourName}</b>! You are awesome!
            </p>
        );
    }
}

export default Content;
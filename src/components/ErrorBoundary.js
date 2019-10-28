import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

    render() {
        return this.state.hasError ?
            <h1>Oops! Something went wrong...</h1> :
            <div>
                {this.props.children}
            </div>
    }
}

export default ErrorBoundary;
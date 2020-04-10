import React, { Component } from "react";

class Counter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment(prevState) {
        this.setState((prevState)=>({count: prevState.count + 1}));
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={()=>this.increment()}>Increment</button>
                <button onClick={()=>this.incrementFive()}>Increment Five</button>
            </div>
        );
    }
}

export default Counter;
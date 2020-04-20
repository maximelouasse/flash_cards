import React, { Component } from 'react'
import AllCards from './AllCards';

export default class Cards extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>React Redux Cards App</h1>

                <hr />
                <AllCards />
            </React.Fragment>
        )
    }
}
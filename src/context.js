import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_CONTACT":
            return state;
        default:
            return state;
    }
}

export default class Provider extends Component {

    state = {
        stations: [
            {
                id: 1,
                name: "Den Grønne Steinen",
                arrivals: 230,
                departures: 230,
                capacity: 145
            },
            {
                id: 2,
                name: "Sveriges Torv",
                arrivals: 230,
                departures: 230,
                capacity: 112
            },
            {
                id: 3,
                name: "California",
                arrivals: 230,
                departures: 230,
                capacity: 80
            },
            {
                id: 4,
                name: "Bakkesletten",
                arrivals: 230,
                departures: 230,
                capacity: 35
            },
            {
                id: 5,
                name: "Minkelven",
                arrivals: 230,
                departures: 230,
                capacity: 9
            },
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;

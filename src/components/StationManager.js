import React, { Component } from 'react'

import { Consumer } from "../context"

import Station from "./Station"

export default class StationManager extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    const { stations } = value
                    return (
                        <div>
                            <h1 className="fg-light">Station Manager</h1>
                            <div className="flex-container">
                                {stations.map(station => (
                                    <Station station={station} key={station.id}></Station>
                                ))}
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

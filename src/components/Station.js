import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Station extends Component {


    render() {
        const { name, arrivals, departures, capacity } = this.props.station
        return (
            <div className="box station flex-child">
                <h4 className=" fg-light station-title">{name}</h4>
                <div className="station-group">
                    <h4 className="fg-light">{arrivals}</h4>
                    <h6 className="fg-light-faded">ARRIVALS</h6>
                </div>
                <div className="station-group">
                    <h4 className="fg-light">{departures}</h4>
                    <h6 className="fg-light-faded">DEPARTURES</h6>
                </div>
                <div className="station-group">
                    <h1 className="fg-light">{capacity} %</h1>
                    <h6 className="fg-light-faded">CAPACITY</h6>
                </div>
            </div >
        )
    }
}

Station.propTypes = {
    station: PropTypes.object.isRequired
}


export default Station;



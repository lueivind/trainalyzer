import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
    const { title } = props;
    return (
        <nav>
            <h1>{title}</h1>
        </nav>
    )
}

Header.propTypes = {

}

Header.defaultProps = {
    title: "Title"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header


import PropTypes from 'prop-types'
import Button from './Button'

const buttonTitle = 'Refresh'

const Header = ({ title }) => {
    return (
        <div>
            <h1 style={headingStyle}>{title}</h1> 
            <h4 style={descriptionStyle}>NFTActions is the place to come to check the hottest NFT collections selling on OpenSea right now.</h4>
            <Button text={buttonTitle}/>
        </div>
    )
}

Header.defaultProps = {
    title: '<Add title>'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

const headingStyle = {
    color: 'black'
}

const descriptionStyle = {
    color: 'grey'
}

export default Header

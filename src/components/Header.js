import PropTypes from 'prop-types'
import Button from './Button'

const buttonTitle = 'Refresh'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <div className='container'>
            <h1 style={headingStyle}>{title}</h1> 
            <h4 style={descriptionStyle}>The hottest NFT collections selling on OpenSea right now</h4>
            <Button color='DodgerBlue' text={buttonTitle} onClick={onClick}/>
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

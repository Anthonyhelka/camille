import React from 'react';
import PropTypes from 'prop-types';

export const Avatar = ({ src, size, radius, status, style, ...rest }) => {
    let styles = {
        width: size, 
        height: size, 
        borderRadius: radius, 
        objectFit: 'cover'
    };

    styles = {...styles, ...style};
    return (
        <img src={src} style={styles} {...rest} />
    );
};

Avatar.defaultProps = {
    src: 'https://i.pinimg.com/236x/cd/da/4b/cdda4beceee4594f5bdc0cf505a73d8b--camille-lol-league-of-legends-camille.jpg',
    size: '40px', 
    radius: '100px',
    status: 'offline'
};

Avatar.propTypes = {
    src: PropTypes.string,
    size: PropTypes.string,
    radius: PropTypes.string,
    status: PropTypes.oneOf(['online', 'away', 'offline'])
};
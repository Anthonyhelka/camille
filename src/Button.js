import React from 'react';
import PropTypes from 'prop-types';

const determineColor = (styles, color) => {
    switch (color) {
        case 'red': styles.backgroundColor = '#DB2828'; break;
        case 'orange': styles.backgroundColor = '#F2711C'; break;
        case 'yellow': styles.backgroundColor = '#FBBD08'; break;
        case 'olive': styles.backgroundColor = '#B5CC18'; break;
        case 'green': styles.backgroundColor = '#21BA45'; break;
        case 'teal': styles.backgroundColor = '#00b5AD'; break;
        case 'blue': styles.backgroundColor = '#2185D0'; break; 
        case 'violet': styles.backgroundColor = '#6435C9'; break;
        case 'purple': styles.backgroundColor = '#A333C8'; break;
        case 'pink': styles.backgroundColor = '#E03997'; break;
        case 'brown': styles.backgroundColor = '#A5673F'; break;
        case 'grey': styles.backgroundColor = '#767676'; break;
        case 'black': styles.backgroundColor = '#1b1C1D'; break;
        default:
            styles.color = '#595959';
            styles.backgroundColor = '#E0E1E2';
            break;
    }
};

export const Button = ({ width, height, disabled, compact, color, children, ...rest }) => {
    const styles = {
        width,
        height,
        color: '#FFFFFF',
        backgroundColor: '#E0E1E2',//'#2185D0',
        cursor: disabled ? 'default' : 'pointer',
        outline: '0',
        fontFamily: 'Helvetica Neue',
        padding: compact ? '5px 11px 5px 11px' : '10px 22px 10px 22px',
        fontWeight: '700',
        lineHeight: '14px',
        border: 'none',
        borderRadius: '5px',
        opacity: disabled ? '.45' : '1',
        margin: '5px 5px 5px 5px'
    };
    determineColor(styles, color);
    return (
        <button
            style={styles}
            disabled={disabled}
            {...rest}
        >{children}</button>
    );
};

Button.defaultProps = {
    type: 'default',
    width: 'auto',
    height: 'auto',
    active: false,
    disabled: false,
    compact: false,
    circular: false,
    color: 'default'
};

Button.propTypes = {
    type: PropTypes.oneOf(['default', 'basic', 'inverted', 'text']),
    width: PropTypes.string,
    height: PropTypes.string,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    compact: PropTypes.bool,
    circular: PropTypes.bool,
    color: PropTypes.oneOf(['default', 'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'])
};
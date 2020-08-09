import React from 'react';
import PropTypes from 'prop-types';

const determineSize = (styles, size) => {
    switch (size) {
        case 'mini': 
            styles.fontSize = '9px';
            styles.padding = '7px 14px';
            break;
        case 'small': 
            styles.fontSize = '11px';
            styles.padding = '9px 18px';
            break;
        case 'large': 
            styles.fontSize = '15px';
            styles.padding = '13px 26px';
            break;
        case 'massive': 
            styles.fontSize = '17px';
            styles.padding = '15px 30px';
            break;
        case 'normal':
        default:
            styles.fontSize = '13px';
            styles.padding = '11px 22px';
            break;            
    }
};

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
        case 'default':
        default:
            styles.backgroundColor = '#E0E1E2';
            styles.color = '#595959';
            break;
    }
};

const determineCompact = (styles) => {
    let newPadding = '';
    styles.padding.split(' ').forEach((item) => newPadding += `${item.replace(/\D/g,'') / 2}px `);
    styles.padding = newPadding;
};

const determineInverted = (styles) => {
    const backgroundColor = styles.backgroundColor;
    const color = styles.color;
    styles.backgroundColor = color;
    styles.color = backgroundColor;
    styles.border = `2px solid ${backgroundColor}`
};

export const Button = ({ type, size, disabled, compact, color, inverted, children, ...rest }) => {
    const styles = {
        color: '#FFFFFF',
        backgroundColor: '#E0E1E2',
        cursor: disabled ? 'default' : 'pointer',
        outline: '0',
        fontFamily: 'Helvetica Neue',
        fontWeight: '700',
        lineHeight: '14px',
        border: 'none',
        borderRadius: '5px',
        opacity: disabled ? '.45' : '1',
    };

    determineSize(styles, size);
    determineColor(styles, color);
    if (compact) determineCompact(styles);
    if (inverted) determineInverted(styles);

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
    size: 'normal',
    disabled: false,
    compact: false,
    color: 'default',
    inverted: false
};

Button.propTypes = {
    type: PropTypes.oneOf(['default', 'basic', 'inverted', 'text']),
    size: PropTypes.oneOf(['mini', 'small', 'normal', 'large', 'massive']),
    disabled: PropTypes.bool,
    compact: PropTypes.bool,
    color: PropTypes.oneOf(['default', 'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black']),
    inverted: PropTypes.bool
};
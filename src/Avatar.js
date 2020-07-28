import React from 'react';

export const Avatar = ({ 
    src = 'https://i.pinimg.com/236x/cd/da/4b/cdda4beceee4594f5bdc0cf505a73d8b--camille-lol-league-of-legends-camille.jpg',
    width = '32px', 
    height = '32px',
    borderRadius = '100px',
    status = 'offline',
    ...rest 
}) => {
    return (
        <img src={src} style={{ width, height, borderRadius, objectFit: 'cover' }} {...rest} />
    )
};
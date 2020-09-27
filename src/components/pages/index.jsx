import React from 'react';

import {Title, Text, Image} from './styles';

function content({children, ...styles}) {
    return (
        <div {...styles}>
            {children}
        </div>
    )
}

content.Title = function ContentTitle({children, ...styles}) {
    return (
        <Title {...styles}>{children}</Title>
    )
}

content.Text = function ContentText({children, ...styles}) {
    return (
        <Text {...styles}>{children}</Text>
    )
}

content.Image = function ContentImage({children, ...styles}) {
    return (
        <Image {...styles}>{children}</Image>
    )
}

export default content;

import React, {useEffect, useState} from 'react';
import {
    OuterWrapper,
    ImgWrapper,
    ImgDiv,
    TextDiv
} from './CardStyled'

const Card = (props) => {

    return(
        <OuterWrapper 
            totalHeight={props.totalHeight} 
            totalWidth={props.totalWidth}
            marginLeft={props.marginLeft}
            marginRight={props.marginRight}
        >
            <ImgDiv
                    imgHeight={props.imgHeight}
                    imgWidth={props.imgWidth}>
                <ImgWrapper
                />
            </ImgDiv>
            <TextDiv>
                <h3>Teste</h3>
            </TextDiv>
        </OuterWrapper>
    )
}

export default Card
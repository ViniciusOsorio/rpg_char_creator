import React, {useEffect, useState} from 'react';

import {
    OuterWrapper,
    TitleWrapper
} from './NavBarStyled';

import { FaDiceD20 } from 'react-icons/fa';

const NavBar = () => {
    return(
        <OuterWrapper>
            <TitleWrapper>
                <FaDiceD20 size='50px'/>
                <h1 style={{marginLeft: '25px'}}>Adventure!</h1>
            </TitleWrapper>
        </OuterWrapper>
    )
}

export default NavBar;
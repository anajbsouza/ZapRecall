import React from 'react'
import styled from 'styled-components'
import logo from "../assets/logo.png";

export default function Header() {
    return (
        <HeaderStyled>
            <img src={logo}/>
            <h1>ZapRecall</h1>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    h1 {
        margin-left: 20px;
        font-family: 'Righteous';
        color: #FFFFFF;
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
    }
    img {
        width: 52px;
        height: 60px;
        background-image: url(./logo.png);
    }
`
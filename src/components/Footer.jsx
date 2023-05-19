import React from 'react';
import styled from "styled-components";
import cards from "../constants/cards";

export default function Footer({ currentScore }) {
    return (
        <FooterStyled>
            <p data-test="footer">{currentScore}/{cards.length} concluídas</p>
        </FooterStyled>
    )
}


const FooterStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    bottom: 0px;
    left: 0px;

    width: 100%;
    height: 70px;

    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

    p {
        width: 145px;
        height: 22px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;

    }
`
import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png"


export default function HomePage({ setWelcome }) {
    function ChangePage() {
        setWelcome(false);
    }

    return (
        <ContainerStyled>
            <div>
                <img src={logo} alt={"logo"} />
                <h1>ZapRecall</h1>
                <button onClick={() => ChangePage()}><h2>Iniciar Recall</h2></button>
            </div>
        </ContainerStyled>
    )
}

const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100vw;
    min-height: 100vw;
    background: #FB6B6B;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
    div {
        width: 375px;
        height: 667px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    img {
        margin-top: 145px;
    }
    h1 {
        margin-left: 20px;
        margin-top: 70px;
        font-family: 'Righteous';
        color: #FFFFFF;
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
    }
    button {
        width: 246px;
        height: 54px;
        margin-top: 70px;
        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h2 {
        width: 202px;
        height: 22px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #D70900;
    }
`
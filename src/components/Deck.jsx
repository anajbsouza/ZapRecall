import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Flashcard from "./Flashcard";
import Footer from "./Footer";
import cards from "../constants/cards";

export default function Deck() {
    const [score, setScore] = useState(0);
    
    function increaseScore() {
        setScore(score + 1);
    }
    
    return (
        <>
        <ContainerStyled> 
            <Header />
            {cards.map((card) => 
                <Flashcard 
                    key={cards.id} 
                    card={card} 
                    increaseScore={increaseScore}
                />)}
            <Footer currentScore={score} />
        </ContainerStyled>
        </>
    );
}

const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    width: 100vw;
    height: 100vw;
    background: #FB6B6B;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`
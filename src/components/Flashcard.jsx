import React, { useState } from 'react';
import styled from 'styled-components';
import seta_virar from '../assets/seta_virar.png';
import IconState from './IconState';
import { GREEN, RED, ORANGE, GRAY } from '../constants/colors';

export default function Flashcard({ card, increaseScore }) {
	const { question, answer } = card;
	const [showCard, setShowCard] = useState(true); 
	const [showQuestion, setShowQuestion] = useState(false); 
	const [showAnswer, setShowAnswer] = useState(false);
    const [finished, setFinished] = useState(false);
    const [status, setStatus] = useState("not answered"); 


	function funcShowQuestion() { 
        if (!finished) {
            setShowQuestion(true);
            setShowCard(false);
        }
	}
	
	function funcShowAnswer() {
		setShowAnswer(true);
		setShowQuestion(false);
	}

    function QuestionAnswered(answerStatus) {
        setShowAnswer(false);
        setShowCard(true);
        setFinished(true);
        setStatus(answerStatus);
        increaseScore();
    }

	return (
		
		<div data-test="flashcard">
			{showCard && (
				<Card status={status}>
				<p data-test="flashcard-text">Pergunta {card.id}</p>
                <IconState status={status} funcShowQuestion={funcShowQuestion} />
				</Card>
			)}
		
			{showQuestion && (
				<Question>
				<p data-test="flashcard-text">{question}</p>
				<img onClick={funcShowAnswer} src={seta_virar} data-test="turn-btn" alt="seta vira" />
				</Question>
			)}

			{showAnswer && (
				<Answer status={status}>
				<p data-test="flashcard-text">{answer}</p>
				<div>
					<WrongButton>
						<span background={RED} onClick={() => QuestionAnswered("wrong")} data-test="no-btn">
							<p>Não lembrei</p>
						</span>
					</WrongButton>
					<HardRightButton>
						<span background={ORANGE} onClick={() => QuestionAnswered("right")} data-test="partial-btn">
							<p>Quase não lembrei</p>
						</span>
					</HardRightButton>
					<ZapButton>
						<span background={GREEN} onClick={() => QuestionAnswered("zap")} data-test="zap-btn">
							<p>Zap!</p>
						</span>
					</ZapButton>
				</div>
				
				</Answer>
			)}

		</div>

		);
	}

	const Card = styled.div`
	width: 300px;
	height: 65px;
	margin-bottom: 25px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	background: #FFFFFF;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	padding: 0 15px 0 15px;

	p {
		width: 87px;
		height: 19px;
		font-family: 'Recursive';
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 19px;
        text-decoration: ${props => props.status === "not answered" ? "none": "line-through"};
        color: ${props => {
            switch(props.status){
                case "wrong":
                    return RED
                case "right":
                    return ORANGE
                case "zap":
                    return GREEN
                default:
                    return GRAY
                }
            }
        }
	}
	img {
		width: 20px;
		height: 23px;
	}
`

const Question = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	flex-wrap: wrap;
    width: 300px;
    height: 130px;
    background-color: #FFFFD4;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	margin-bottom: 25px;
	padding: 15px;
	p{
		font-family: 'Recursive';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 22px;
        color: #333333;
	}
	img {
        width: 30px;
		display: flex;
		justify-content: flex-end;
    }
`

const Answer = styled.div`
	width: 300px;
    height: 130px;
    background-color: #FFFFD4;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	margin-bottom: 25px;
	padding: 15px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-wrap: wrap;
	p{
		font-family: 'Recursive';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 22px;
        color: #333333;
	}
	div {
		display: flex;
		justify-content: space-between;
	}
`
const WrongButton = styled.button`
	background-color: #FF3030;
	width: 85px;
	height: 35px;
	border-radius: 5px;
	border: none;
	background-color: none;
	p {
		font-family: 'Recursive';
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 14px;
		color: #FFFFFF;
		}
`;

const HardRightButton = styled.button`
	background-color: #FF922E;
	width: 85px;
	height: 35px;
	border-radius: 5px;
	border: none;
	background-color: none;
	p {
		font-family: 'Recursive';
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 14px;
		color: #FFFFFF;
		}
`;

const ZapButton = styled.button`
	background-color: #2FBE34;
	width: 85px;
	height: 35px;
	border-radius: 5px;
	border: none;
	background-color: none;
	p {
		font-family: 'Recursive';
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 14px;
		color: #FFFFFF;
		}
`;
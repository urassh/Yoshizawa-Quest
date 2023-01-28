import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from "react-modal";
import styled from "styled-components";

import '../App.css';
import { QUESTIONS } from '../Quiz/questionData';
import {Quiz} from '../Quiz/Quiz';
import correctImage from "../Images/correct.png";
import incorrectImage from "../Images/incorrect.png"

const Answer = ()=>{
    const quizInstance = QUESTIONS[Quiz.index];
    const navigate = useNavigate();
    const [isCorrect, setIsCorrect] = useState(false);
    const [showResultModal, setshowResultModal] = useState(false);

    const quizHandler = (e)=> {
        const answered = e.currentTarget.id;
        const result = quizInstance.quizJudge(answered);
        setIsCorrect(result);
        setshowResultModal(true);
    }

    const quitModal = () => {
        const isTransition = quizInstance.nextQuiz();
        if(isTransition) {
            navigate("/Yoshizawa-Quest/result");
        } else {
            setshowResultModal(false);
        }
    }

    const showResultModalImage = (isCorrect) => {
        if(isCorrect) {
            return <img src={correctImage} alt="incrrectImage" />;
        } else {
            return <img src={incorrectImage} alt="incrrectImage" />;
        }
    }

    return(
        <div className="quiz-container">
            <Modal isOpen={showResultModal}>
                <div id="result-form">
                    {showResultModalImage(isCorrect)}
                    <h2>答えは{quizInstance.correct}番の<br/>「{quizInstance.buttonsList[quizInstance.correct-1]}」でした。</h2>
                    <Button onClick={quitModal}>次へ</Button>
                </div>
            </Modal>
            <h1>第 {(Quiz.index % Quiz.quizLength)+1} 問</h1>
            <h3 id="level">レベル{quizInstance.level}</h3>
            <p id="quiz-text">
                {quizInstance.text}
            </p>
            <div className="answer-buttons">
                <button id="1" className="answer-button button-1" onClick={quizHandler}>
                    {quizInstance.buttonsList[0]}
                </button>
                <button id="2" className="answer-button button-2" onClick={quizHandler}>
                    {quizInstance.buttonsList[1]}
                </button>
                <button id="3" className="answer-button button-3" onClick={quizHandler}>
                    {quizInstance.buttonsList[2]}
                </button>
                <button id="4" className="answer-button button-4" onClick={quizHandler}>
                    {quizInstance.buttonsList[3]}
                </button>
            </div>
        </div>
    );
}

const Button = styled.button`
    width: 85%;
    height: 48px;
    margin-top: 40px;
    line-height: 48px;
    border-radius: 10px;
    color: white;
    background-color: #FF2222;
    font-family: "ヒラギノ丸ゴ ProN";
    font-size: 24px;
    &:hover {
        opacity: .8;
    }
    &:active {
        opacity: .5;
    }
`;

export {Answer};
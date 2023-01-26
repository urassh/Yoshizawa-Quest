import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from "react-modal";
import styled from "styled-components";

import '../App.css';
import { QUESTIONS, Quiz } from './questionData';
import correctImage from "../Images/correct.png";
import incorrectImage from "../Images/incorrect.png"

const Answer = ()=>{
    const test_quiz_instance = QUESTIONS[Quiz.index];

    const navigate = useNavigate();
    const [quiz, setQuiz] = useState({
        index: Quiz.index,
        isCorrect: false,
        correctCount: Quiz.correctCount,
        totalPoint: Quiz.totalPoint,
    });
    const [showResultModal, setshowResultModal] = useState(false);

    const quizHandler = (e)=> {
        const answered = e.currentTarget.id;
        console.log(`呼ばれたQuizインスタンス : ${test_quiz_instance.text}`);
        quizJudge(answered);
        setshowResultModal(true);
    }

    const nextQuiz = () => {
        setshowResultModal(false);
        Quiz.index += 1;
        if ((quiz.index+1) % Quiz.quizLength === 0){
            Quiz.stage += 1;
            navigate('/Yoshizawa-Quest/result', {state: {correct: quiz.correctCount, point: quiz.totalPoint}});
        } else {
            setQuiz({...quiz, index: Quiz.index, isCorrect: false});
        }
    }

    const quizJudge = (answerButtonIndex) => {
        const correct = test_quiz_instance.correct;
        const answer = Number(answerButtonIndex);
        if(answer === correct) {
            Quiz.correctCount+=1;
            Quiz.totalPoint += test_quiz_instance.point;
            setQuiz({...quiz,
                isCorrect: true,
                correctCount: Quiz.correctCount,
                totalPoint: Quiz.totalPoint
            });
        } else {
            setQuiz({...quiz, isCorrect: false});
        }
    }

    const showResultModalImage = (isCorrect) => {
        if(isCorrect) {
            return <img src={correctImage} alt="incrrectImage" />;
        } else {
            return <img src={incorrectImage} alt="incrrectImage" />;
        }
    }

    const showDetailAnswer = (isCorrect) => {
        if(!(isCorrect)) {
            return <h2>答えは{test_quiz_instance.correct}番の<br/>「{test_quiz_instance.buttonsList[test_quiz_instance.correct-1]}」です。</h2>;
        } 
    }

    return(
        <div className="quiz-container">
            <Modal isOpen={showResultModal}>
                <div id="result-form">
                    {showResultModalImage(quiz.isCorrect)}
                    {showDetailAnswer(quiz.isCorrect)}
                    <Button onClick={nextQuiz}>次へ</Button>
                </div>
            </Modal>
            <h1>第 {quiz.index % Quiz.quizLength+1} 問</h1>
            <h3 id="level">レベル{test_quiz_instance.level}</h3>
            {/* <p id="quiz-text">
                {settingQuetions[quiz.index].text}
            </p> */}
            <div className="answer-buttons">
                <button id="1" className="answer-button button-1" onClick={quizHandler}>
                    {test_quiz_instance.buttonsList[0]}
                </button>
                <button id="2" className="answer-button button-2" onClick={quizHandler}>
                    {test_quiz_instance.buttonsList[1]}
                </button>
                <button id="3" className="answer-button button-3" onClick={quizHandler}>
                    {test_quiz_instance.buttonsList[2]}
                </button>
                <button id="4" className="answer-button button-4" onClick={quizHandler}>
                    {test_quiz_instance.buttonsList[3]}
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
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { QUESTIONS } from '../questionData';
import { Quiz } from '../Quiz';

const Result = () =>{
    const navigate = useNavigate();
    const [result, setResult] = useState("");
    const [isFinal, setIsFinal] = useState(false);

    useEffect(()=>{
        showResult();
    });

    const TransTop = () => {
        if(Quiz.index+1 >= QUESTIONS.length){
            Quiz.initial();
            navigate("/Yoshizawa-Quest/message");
        } else {
            navigate("/Yoshizawa-Quest/");
        }
    }

    const showResult = () => {
        if (Quiz.index+1 >= QUESTIONS.length) {
            setIsFinal(true);
        }
        if(Quiz.correctCount === QUESTIONS.length) {
            setResult("全問正解です。");
        } else {
            setResult(`${Quiz.correctCount}問正解!!`);
        }
    }

    const showFinalView = (isFinal) => {
        if (isFinal) {
            return <Button onClick={TransTop}>クイズを終わる。</Button>
        } else {
            return <Button onClick={TransTop}>クイズを続ける。</Button>
        }
    }
    
    return(
        <React.StrictMode>
            <TITLE>結果発表</TITLE>
            <RESULT>{result}<br/>全{QUESTIONS.length}問中</RESULT>
            <RESULT>{Quiz.totalPoint}ポイント!!</RESULT>
            {showFinalView(isFinal)}
        </React.StrictMode>
    );
}

const TITLE = styled.h1`
    font-family: "ヒラギノ丸ゴ ProN";
    margin-top: 32px;
    margin-bottom: 64px;
    font-size: 56px;
`;

const RESULT = styled.h2`
    font-family: "ヒラギノ丸ゴ ProN";
    line-height: 64px;
    margin-top: 16px;
    magin-bottom: 64px;
    font-size: 40px;
    border: 3px solid #ddd;
`;

const Button = styled.button`
    width: 100%;
    height: 48px;
    margin-top: 100px;
    line-height: 48px;
    border-radius: 8px;
    color: white;
    background-color: #4366ff;
    font-family: "ヒラギノ丸ゴ ProN";
`;

export {Result};
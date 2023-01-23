import React from 'react';
import { Quiz } from './questionData';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import '../App.css';

const Top = () => {
    const navigate = useNavigate();

    const moveAnswerView = () => {
        navigate("/Yoshizawa-Quest/answer")
    }

    return(
        <React.StrictMode>
            <div id="top-bg">
                <SUB_TITLE>3-3専用クイズアプリ</SUB_TITLE>
                <TITLE>YOSHIZAWA QUEST</TITLE>
                <STAGE>Stage : {Quiz.stage}</STAGE>
                <Button onClick={moveAnswerView}>クイズに挑戦</Button>
            </div>
        </React.StrictMode>
    );
}

const TITLE = styled.h1`
    font-family: "Noto Serif JP";
    color: white;
`;

const SUB_TITLE = styled.h3`
    font-family: "ヒラギノ丸ゴ ProN";
    font-size: 20px;
    
`;

const Button = styled.button`
    width: 100%;
    height: 48px;
    margin-bottom: 48px;
    padding:16px 0 ;
    line-height: 48px;
    border-radius: 8px;
    color: white;
    background-color: #ff4343;
    font-family: "ヒラギノ丸ゴ ProN";
    font-size: 24px;
`;

const STAGE = styled.div`
    font-family: "Noto Serif JP";
    margin-top: 32px;
    margin-bottom: 200px;
    text-align: left;
    font-size: 24px;
`;

export {Top};
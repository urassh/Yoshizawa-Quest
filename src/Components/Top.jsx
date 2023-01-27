import React from 'react';
import { Quiz } from '../Quiz/Quiz';
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
                <STAGE>Stage : {Quiz.stage}</STAGE>
                <Button onClick={moveAnswerView}>クイズに挑戦</Button>
            </div>
        </React.StrictMode>
    );
}

const STAGE = styled.div`
    font-family: "Noto Serif JP";
    margin-top: 200px;
    margin-bottom: 150px;
    text-align: center;
    font-size: 40px;
    color: white;
    box-shadow: 0px 3px white;
`;

const Button = styled.button`
    width: 100%;
    height: 48px;
    padding:16px 0 ;
    line-height: 48px;
    border-radius: 8px;
    color: white;
    background-color: #7007EA;
    font-family: "Noto Serif JP";
    font-size: 24px;
    letter-spacing: 3px;
`;

export {Top};
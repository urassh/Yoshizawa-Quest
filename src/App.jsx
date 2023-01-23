import {Top} from './Components/Top';
import { Answer } from './Components/Answer';
import { Result } from './Components/Result';
import { Message } from './Components/Message';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from "styled-components";

const App = () => {
  return (
    <BrowserRouter>
      <QuizContainer>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Top />} />
          <Route path={`${process.env.PUBLIC_URL}/answer`} element={<Answer />} />
          <Route path={`${process.env.PUBLIC_URL}/result`} element={<Result />} />
          <Route path={`${process.env.PUBLIC_URL}/message`} element={<Message />} />
        </Routes>
      </QuizContainer>
    </BrowserRouter>
    
  );
}

const QuizContainer = styled.div`
  margin: 30px auto 0;
  width: 330px;
  height: 600px;
  background-color: white;
  text-align: center;
  padding: 16px;
`;
export default App;
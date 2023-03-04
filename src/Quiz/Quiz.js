class Quiz {
    static index = 0;
    static correctCount = 0;
    static totalPoint = 0;
    static quizLength = 5;
    static stage = 1;
    static initial = () => {
        Quiz.index = 0;
        Quiz.stage = 1;
        Quiz.totalPoint = 0;
        Quiz.correctCount = 0;
    }
    constructor(text, buttonsList, correct, point, level) {
        this.text = text;
        this.buttonsList = buttonsList;
        this.correct = correct;
        this.point = point;
        this.level = level;
        Object.freeze(this);
    }

    quizJudge = (answerButtonIndex) => {
        const answer = Number(answerButtonIndex);
        if(answer === this.correct) {
            Quiz.correctCount+=1;
            Quiz.totalPoint += this.point;
            return true;
        } else {
            return false;
        }
    }
    
    nextQuiz = () => {
        Quiz.index += 1;
        if (Quiz.index % Quiz.quizLength === 0){
            Quiz.stage += 1;
            return true;
        } else {
            return false;
        }
    }
}

export {Quiz};
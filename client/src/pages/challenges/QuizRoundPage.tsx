import { useState } from "react";
import {   Container, Card, CardContent, Typography, Button, Box } from "@mui/material";
import { quizQuestions } from "../../components/QuizQuestions.tsx";
import { useNavigate } from "react-router-dom";
import DialogBox from "../../components/DialogBox";
import Timer from "../../components/Timer";


const QuizRound = () => {
  const navigate = useNavigate();
  // state variables
  const [currentQuestion, setCurrentQuestion] = useState<number>(0); 
  const [correctAnswers, setCorrectAnswers] = useState<number>(0); // to store number of correct answers
  const [success, setSuccess] = useState<boolean>(false); // for navigation control
  const [showDialog, setShowDialog] = useState<boolean>(true); // dialog box shown at start
  const [timerStart, setTimerStart] = useState<boolean>(false); // timer control


  const handleAnswerClick = (index: number) => {
  // check if the selected answer (index)  is correct
  if (index === quizQuestions[currentQuestion].correctAnswer) {
    setCorrectAnswers(correctAnswers + 1);
  }

    // if currentQuestion <number> is less than the array of questions, add 1 (move to next question)
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // end of quiz
      setSuccess(true); // for navigation to feedback page
      setTimerStart(false); // stop timer on success
      setShowDialog(true); // show dialog box at end of game
    }
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    setTimerStart(true); // start timer
    if (success) {
      navigate("/challenge/endgame"); // direct to feedback page
    }
  };

const handleTimeUp = () => {
    console.log("time's up");
    // handle action when time runs out here
  };


  return (
    <Container>
            {/* ------------------ dialog box --------------------------*/}
            <DialogBox
            open={showDialog}
            title={success ? "Challenge Complete!" : "Challenge 3: Quiz Round!"}
            // challenge explanation (shown at start) & educational message (shown at end)
            message={
              success ? (
                <>
                  <Typography>
                    You got {correctAnswers}/{quizQuestions.length} questions correct
                    <br />
                    <br />
                  </Typography>
                </>
              ) : (
                "Answer the questions as quickly as possible to secure the most points!"
              )
            }
            buttonText={success ? "end game" : "OK"}
            onClose={handleDialogClose}
          />

      {/* timer not shown at end of challenge */}
      {!success && <Timer initialTime={60} start={timerStart} onTimeUp={handleTimeUp} />}

      {/* ------------------ questions --------------------------*/}
      <Card sx={{ maxWidth: 800, p: 3, textAlign: "center" }}>
        <CardContent>
          <Typography variant="h5">
            {/* display the question found in the array of quizQuestions at index of currentQuestion */}
            {quizQuestions[currentQuestion].question}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
            {/* display the list of answers in the array of quizQuestions at index of currentQuestion (https://javascript.info/array-methods#map) */}
            {quizQuestions[currentQuestion].answers.map((answer, index) => (
              <Button
                key={index} // https://legacy.reactjs.org/docs/lists-and-keys.html
                variant="contained"
                sx={{ mt: 1 }}
                onClick={() => handleAnswerClick(index)}
              >
                {answer}
              </Button>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default QuizRound;

import { useState } from "react";
import {   Container, Card, CardContent, Typography, Button, Box } from "@mui/material";
import { quizQuestions } from "../../components/QuizQuestions.tsx";
import { useNavigate } from "react-router-dom";
import DialogBox from "../../components/DialogBox";


const QuizRound = () => {
  const navigate = useNavigate();
  // state variables
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]); // to store id's of selected answers
  const [success, setSuccess] = useState<boolean>(false);
  const [showDialog, setShowDialog] = useState<boolean>(true); // dialog box shown at start

  const handleAnswerClick = (index: number) => {
    // add the id of selcted answer to the array (https://react.dev/learn/updating-arrays-in-state)
    setSelectedAnswers([...selectedAnswers, index]);

    // if currentQuestion <number> is less than the array of questions, add 1 (move to next question)
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // end of quiz
      setSuccess(true); // for navigation to feedback page
      setShowDialog(true); // show dialog box at end of game
    }
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    if (success) {
      navigate("/challenge/endgame"); // direct to feedback page
    }
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
                    You got 2/3 questions correct
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

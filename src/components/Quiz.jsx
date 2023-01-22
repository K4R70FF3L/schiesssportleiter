import React, { useState } from "react";
import { Grid, Paper, Checkbox, Button, Typography } from "@mui/material";

function Quiz({ questions, onFinish }) {
  const [answerStates, setAnswerStates] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [resolved, setResolved] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [failedQuestions, setFailedQuestions] = useState([]);

  const currentQuestion = questions[currentQuestionIndex];
  const checkAnswer = (state, index) =>
    index >= currentQuestion.antworten.length ||
    state === currentQuestion.antwort.includes(index);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper>{`${currentQuestionIndex + 1}/${questions.length}`}</Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper style={{ padding: "20px", textAlign: "left" }}>
          {currentQuestion.frage}
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper style={{ padding: "20px", textAlign: "left" }}>
          {currentQuestion.antworten.map((a, index) => (
            <div
              key={a}
              style={{
                display: "flex",
                flexDirection: "horizontal",
                alignItems: "start",
              }}
            >
              <Checkbox
                checked={answerStates[index]}
                onChange={(e) => {
                  const newAnswerStates = [...answerStates];
                  newAnswerStates[index] = e.target.checked;
                  if (!resolved) setAnswerStates(newAnswerStates);
                }}
                sx={
                  (resolved &&
                    (answerStates[index] ===
                    currentQuestion.antwort.includes(index)
                      ? {
                          color: "#2e7d32",
                          "&.Mui-checked": {
                            color: "#2e7d32",
                          },
                        }
                      : {
                          color: "#d32f2f",
                          "&.Mui-checked": {
                            color: "#d32f2f",
                          },
                        })) ||
                  {}
                }
              />
              {typeof a === "object" ? (
                <>
                  {a[0]}
                  <img src={a[1]} width="50px" alt="PTB im Kreis" />
                </>
              ) : (
                a
              )}
            </div>
          ))}
          {resolved ? (
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Button
                  variant="contained"
                  onClick={() => {
                    setResolved(false);
                    setAnswerStates([false, false, false, false]);
                    if (currentQuestionIndex + 1 >= questions.length) {
                      onFinish(failedQuestions);
                      setCurrentQuestionIndex(0);
                    } else {
                      setCurrentQuestionIndex(currentQuestionIndex + 1);
                    }
                  }}
                >
                  Weiter
                </Button>
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  sx={{
                    color: answerStates.every(checkAnswer)
                      ? "#2e7d32"
                      : "#d32f2f",
                  }}
                >
                  {(answerStates.every(checkAnswer) ? "Korrekt!" : undefined) ||
                    (answerStates.some(checkAnswer)
                      ? "Manche Antworten sind falsch. Schaue dir noch einmal die korrekten Antworten an."
                      : "Alle Antworten sind falsch. Schaue noch einmal nach, ob du die Frage richtig gelesen hast.")}
                </Typography>
              </Grid>
            </Grid>
          ) : (
            <Button
              variant="contained"
              onClick={() => {
                setResolved(true);
                if (!answerStates.every(checkAnswer)) {
                  setFailedQuestions([...failedQuestions, currentQuestion]);
                }
              }}
            >
              Auflösen
            </Button>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Quiz;

import React from "react";
import { Paper, Button, Grid, Typography } from "@mui/material";

const formatPercent = (number) => {
  return Math.round(number * 10000) / 100;
};

function Results({ questions, failedQuestions, onReplay }) {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        <Paper style={{ padding: "20px" }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="h3">Ergebnis</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3">
                Korrekt beantwortet:
                {` ${questions.length - failedQuestions.length}/${
                  questions.length
                } (${formatPercent(
                  (questions.length - failedQuestions.length) / questions.length
                )}%)`}
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={() => onReplay(questions)}>
                Erneut üben
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={() => onReplay(failedQuestions)}
              >
                Fehler wiederholen
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={() => onReplay([])}>
                Startseite
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Results;

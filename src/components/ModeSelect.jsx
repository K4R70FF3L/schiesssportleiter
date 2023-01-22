import React from "react";
import { Paper, Button, Grid, Typography } from "@mui/material";

function ModeSelect({ onSelect }) {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={6}>
        <Paper style={{ padding: "20px" }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="h3">Schießsportleiter</Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={() => onSelect("all")}>
                Üben
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={() => onSelect("exam")}>
                Testprüfung
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ModeSelect;

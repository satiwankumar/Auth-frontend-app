// src/Dashboard.tsx
import React from "react";
import { Typography, Container, Grid, Paper, Box } from "@mui/material";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <Container className="flex-grow p-8">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <Paper className="p-4">
              <Typography variant="h6" className="mb-2">
                Card 1
              </Typography>
              <Typography>This is some content inside card 1.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper className="p-4">
              <Typography variant="h6" className="mb-2">
                Card 2
              </Typography>
              <Typography>This is some content inside card 2.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper className="p-4">
              <Typography variant="h6" className="mb-2">
                Card 3
              </Typography>
              <Typography>This is some content inside card 3.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;

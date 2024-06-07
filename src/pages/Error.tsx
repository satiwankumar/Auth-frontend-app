// src/ErrorPage.tsx
import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Container className="flex flex-col items-center justify-center min-h-screen p-4">
      <Box className="flex flex-col justify-center mb-4">
        <ErrorOutlineIcon
          className="text-red-500 mr-2"
          style={{ fontSize: 50 }}
        />
        <Typography variant="h2" className="text-gray-700">
          404 - Not Found
        </Typography>
        <Typography variant="body1" className="mb-8 text-gray-500">
          The page you are looking for doesn't exist.
        </Typography>
        <Button
          variant="text"
          color="primary"
          onClick={handleGoHome}
          startIcon={<HomeIcon />}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go Home
        </Button>
      </Box>
    </Container>
  );
};

export default ErrorPage;

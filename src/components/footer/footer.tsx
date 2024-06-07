// src/Footer.tsx
import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Footer: React.FC = () => {
  return (
    <Box component="footer" className="bg-gray-900 py-6 mt-auto">
      <Container maxWidth="lg" className="text-center">
        <Typography variant="body2" color="text-white" className="text-white">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
        <Typography variant="body2" color="text-white" className="text-white">
          All trademarks are property of their respective owners.
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          className="text-white"
        >
          <a href="/privacy-policy" className="text-white hover:text-white">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms-of-service" className="text-white hover:text-white">
            Terms of Service
          </a>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

import React from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/actions/auth";
import { useNavigate } from "react-router-dom";
import SkeletonLoader from "../components/loader/loader";

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state: any) => state.auth);

  const onSubmit = (data: any) => {
    const { email, password } = data;
    dispatch(loginUser(email, password));
  };

  if (isAuthenticated) {
    return navigate("/");
  }

  return (
    <Container
      maxWidth="sm"
      className="flex mt-10 flex-col items-center min-h-screen justify-center p-4"
    >
      {loading ? (
        <SkeletonLoader />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            component="div"
            className="bg-white flex flex-col justify-center shadow-md rounded px-8 pt-6 pb-8 w-full"
          >
            <Typography variant="h4" className="mb-6 text-center text-gray-700">
              Login
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*\d).{8,}$/,
                  message:
                    "Password must contain at least one letter and one special character",
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="mt-4"
            >
              Sign In
            </Button>
          </Box>
        </form>
      )}
    </Container>
  );
};

export default LoginPage;

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/actions/auth";
import { Container, TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SkeletonLoader from "../components/loader/loader";

const SignUpPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, loading, error } = useSelector(
    (state: any) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      return navigate("/");
    }
  }, [isAuthenticated]);

  const onSubmit = (data: any) => {
    const { firstName, lastName, email, password } = data;
    const name = `${firstName} ${lastName}`;
    dispatch(registerUser(name, email, password));
  };
  const validateConfirmPassword = (value: string) => {
    const password = getValues("password");
    return value === password || "Passwords do not match";
  };

  return (
    <Container
      maxWidth="sm"
      className="flex flex-col items-center justify-center min-h-screen p-4 "
    >
      {loading ? (
        <SkeletonLoader />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            component="div"
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full"
            noValidate
            autoComplete="off"
          >
            <Typography variant="h4" className="mb-6 text-center text-gray-700">
              Sign Up
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="given-name"
              autoFocus
              {...register("firstName", {
                required: "First Name is required",
              })}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
              {...register("lastName", {
                required: "Last Name is required",
              })}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: validateConfirmPassword,
              })}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="mt-4"
            >
              Sign Up
            </Button>
          </Box>
        </form>
      )}
    </Container>
  );
};

export default SignUpPage;

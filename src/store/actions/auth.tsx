import api from "../../utils/axios";
import {
  registerRequest,
  registerSuccess,
  registerFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
} from "../reducers/authReducer/authslice";
import { AppDispatch } from "../store";
import handleErrorResponse from "../../components/alert/error"; // Import the error handling function
import handleSuccessResponse from "../../components/alert/success";

export const registerUser =
  (name: string, email: string, password: string): any =>
  async (dispatch: AppDispatch) => {
    dispatch(registerRequest());
    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      dispatch(registerSuccess(response.data));
      handleSuccessResponse("Registered Successfully !");
      localStorage.setItem("token", response.data.accessToken);
    } catch (error: any) {
      console.log("error", error);
      handleErrorResponse("Failed to register user", error); // Use handleErrorResponse
      dispatch(registerFailure(error.message));
    }
  };

export const loginUser =
  (email: string, password: string): any =>
  async (dispatch: any) => {
    dispatch(loginRequest());
    try {
      const response = await api.post("/auth/login", { email, password });
      dispatch(loginSuccess(response.data));
      handleSuccessResponse("Login Successfully !");

      localStorage.setItem("token", response.data.accessToken);
    } catch (error: any) {
      console.log("error", error);
      handleErrorResponse("Failed to login", error); // Use handleErrorResponse
      dispatch(loginFailure(error.message));
    }
  };

export const logoutUser: any = () => (dispatch: any) => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  handleSuccessResponse("Logout Successfully !");

  dispatch(logout());
};

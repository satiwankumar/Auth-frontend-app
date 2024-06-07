import { toast } from "react-toastify";

const handleErrorResponse = (message: string, error: any) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const errorMessage = error.response.data.message;
    toast.error(errorMessage || message);
  } else if (error.request) {
    // The request was made but no response was received
    toast.error(
      "No response received from the server. Please try again later."
    );
  } else {
    // Something happened in setting up the request that triggered an Error
    toast.error("An error occurred. Please try again later.");
  }
};

export default handleErrorResponse;

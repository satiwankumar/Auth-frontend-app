import { toast } from "react-toastify";

const handleSuccessResponse = (message:string) => {
  toast.success(message);
};

export default handleSuccessResponse;

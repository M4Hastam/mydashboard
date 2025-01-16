import { getUser } from "@/redux/auth/authSlice";
import authService from "@/Services/authService";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useToast } from "../use-toast";

const useStatusTokenHardRefresh = (path) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  useEffect(() => {
    const checkUserStatusToken = async () => {
      let isLoggedIn;
      try {
        isLoggedIn = await authService.getLoginStatus();
      } catch (error) {
        console.log(error.message);
      }

      if (!isLoggedIn) {
        // toast.info("Session expired, please login to continue");
        navigate(path, { replace: true });
        toast({
          title: "Your session has expired",
          description: "Please login again",
        });
        return false;
      }
      dispatch(getUser());
      return;
    };

    if (isLoggedIn && user) {
      return;
    } else {
      checkUserStatusToken();
    }
  }, [path, navigate, dispatch, isLoggedIn, user, toast]);
};

export default useStatusTokenHardRefresh;

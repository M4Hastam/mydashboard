import { getUser } from "@/redux/auth/authSlice";
import authService from "@/Services/authService";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useStatusTokenHardRefresh = (path) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
        navigate(path);
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
  }, [path, navigate, dispatch, isLoggedIn, user]);
};

export default useStatusTokenHardRefresh;

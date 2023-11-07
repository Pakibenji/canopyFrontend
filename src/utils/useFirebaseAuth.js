import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUserInLocalStorage } from "../actions/authActions";

const useUserFromLocalStorage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (userFromLocalStorage) {
      dispatch(checkUserInLocalStorage(userFromLocalStorage));
    }
  }, [dispatch]);

  return null;
};

export default useUserFromLocalStorage;
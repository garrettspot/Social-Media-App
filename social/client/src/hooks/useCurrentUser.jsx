import { useEffect } from "react"
import { getCurrentUser } from "../apiCalls/authCalls.js";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice.js";

function useCurrentUser() {
  const dispatch = useDispatch();

  try {
    useEffect(()=> {
      const fetchuser = async ()=> {
        const result = await getCurrentUser();
        dispatch(setUserData(result));
      }
  
      fetchuser();
    }, []);
  } catch {
    console.error("Error in useCurrentUser(); ", error);
  }
}

export default useCurrentUser

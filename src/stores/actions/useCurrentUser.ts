import { useMutation } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../../gql/auth.gql";
import { resetUser, selectCurrentUser, setCurrentUser } from "../user.reducer";

export default function useCurrentUser(){
    const dispatch= useDispatch();
    const currentUser= useSelector(selectCurrentUser)
    const [startLogin,{data,error, loading}]= useMutation(LOGIN)
    const resetAuth=()=>{
        dispatch(resetUser())
    }
    if(data){
        dispatch(setCurrentUser(data.login))
    }
    return {currentUser,startLogin, loading,error,resetAuth}
}
import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"

const useAUth = () =>{
    return useContext(AuthContext);
}

export default useAUth;
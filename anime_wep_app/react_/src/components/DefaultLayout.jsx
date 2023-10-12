import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider"

function DefaultLayout() {

    const {user, token} = useStateContext()

    if(!token) { // Redirect user if he is not auth
        return <Navigate to="/login"/>
    }

    return (
    <>
        <Outlet/>
    </>
    )
}

export default DefaultLayout

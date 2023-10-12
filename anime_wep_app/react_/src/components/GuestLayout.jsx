import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider"

function GuestLayout() {

    const {token} = useStateContext()

    if(token) { // Auth users can't have acess to Login/Register Views
        return <Navigate to="/dashboard"/>
    }

    return (
    <div>
        <Outlet/>
    </div>
    )
}

export default GuestLayout

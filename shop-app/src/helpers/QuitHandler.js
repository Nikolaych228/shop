import { logout } from "../store/Actions/authActions"
import { removeRole } from "../store/Actions/roleActions"

export const Quit = (dispath) => {
    dispath(removeRole())
    dispath(logout())
    localStorage.removeItem('token')
}
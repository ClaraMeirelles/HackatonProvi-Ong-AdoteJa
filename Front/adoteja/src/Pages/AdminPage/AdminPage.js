import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { useHistory } from "react-router"

export default function AdminPage(){
    const history = useHistory()
    useProtectedPage(history)
    return(
        <>
        ADMINISTRATIVO
        </>
    )
}
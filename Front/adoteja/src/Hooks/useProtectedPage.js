import { goToHome } from "../Routes/coordinator"

export const useProtectedPage = (history) => {
    const token = localStorage.getItem('token')
    if (!token) {
        goToHome(history)
    }
}
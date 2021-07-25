import { useForm } from "../../Hooks/useForm";
import { TextField } from '@material-ui/core'
import { useHistory } from "react-router";
import { goToAdmin } from "../../Routes/coordinator";
import { useEffect } from "react";
import { LoginPageContainer } from "./styled";
import Header from "../../Components/Header/Header";

export default function LoginPage() {
    const { form, handleInput, clearInputs } = useForm({
        name: '',
        email: '',
        password: '',
    })
    // const history = useHistory()
    // const token = localStorage.getItem('token')
    // useEffect(()=> {
    //     token && goToAdmin(history)
    // }, [token])

    return (
        <>
        <Header />
        <LoginPageContainer>
            LOGIN
            <form>
                <TextField
                    name='name'
                    value={form.name}
                    onChange={handleInput}
                    id="outlined-basic"
                    label="Nome"
                    variant="outlined"
                    margin='normal'
                    required
                />
                <TextField
                    name='email'
                    value={form.email}
                    onChange={handleInput}
                    id="outlined-basic"
                    label="E-mail"
                    variant="outlined"
                    margin='normal'
                    required
                />
                <TextField
                    name='password'
                    value={form.password}
                    onChange={handleInput}
                    id="outlined-basic"
                    label="Senha"
                    variant="outlined"
                    margin='normal'
                    required
                />
            </form>
        </LoginPageContainer>
        </>
    )
}
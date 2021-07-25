import { useForm } from "../../Hooks/useForm";

export default function LoginPage() {
    const { form, handleInput, clearInputs } = useForm({
        name: '',
        email: '',
        password: '',
    })

    return(
        <>
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
        </>
    )
}
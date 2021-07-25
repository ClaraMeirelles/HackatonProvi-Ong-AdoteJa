import { useForm } from "../../Hooks/useForm";

export default function LoginPage() {
    const { form, handleInput, clearInputs } = useForm({
        name: '',
        email: '',
        password: '',
    })

    return (
        <>
            LOGIN
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
                type='email'
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                margin='normal'
            />
            <TextField
                name='password'
                value={form.password}
                onChange={handleInput}
                type='password'
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                margin='normal'
            />
        </>
    )
}
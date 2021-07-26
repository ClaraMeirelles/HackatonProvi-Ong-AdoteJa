import { TextField, Select, InputLabel, FormControl, Button } from '@material-ui/core'
import { useForm } from "../../Hooks/useForm"
import { ApplicationButton, InputText } from './styled'

export default function ApplicationForm() {
    const { form, handleInput, clearInputs } = useForm({
        name: '',
        cpf: '',
        email: '',
        contact: '',
        category: '',
        address: '',
        description: '',
        date: '',

    })
    const submitForm = (e) => {
        e.preventDefault()
        console.log(form)
    }
    return (
        <form onSubmit={submitForm}>
            <InputText
                name='name'
                value={form.name}
                onChange={handleInput}
                id="outlined-basic"
                label="Nome"
                variant="outlined"
                margin='normal'
                color='default'
                required
            />
            <TextField
                name='cpf'
                value={form.cpf}
                onChange={handleInput}
                inputProps={{
                    pattern: '{[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}}'
                }}
                id="outlined-basic"
                label="CPF"
                variant="outlined"
                margin='normal'
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
                name='contact'
                inputProps={{
                    pattern: '{/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/}'
                }}
                value={form.contact}
                onChange={handleInput}
                type='number'
                id="outlined-basic"
                label="Telefone"
                variant="outlined"
                margin='normal'
                required
            />
            <TextField
                name='address'
                value={form.address}
                onChange={handleInput}
                id="outlined-basic"
                label="Endereço"
                variant="outlined"
                margin='normal'
            />
            <FormControl variant="outlined" margin='normal'>
                <InputLabel htmlFor="outlined-age-native-simple">Cargo</InputLabel>
                <Select
                    name='category'
                    native
                    value={form.category}
                    onChange={handleInput}
                    label="Cargo"
                    required
                >
                    <option aria-label="None" value="" />
                    <option value={'Veterinário'}>Veterinário(a)</option>
                    <option value={'Enfermeiro Veterinário'}>Enfermeiro Veterinário</option>
                    <option value={'Voluntário para feiras e outros'}>Voluntário para feiras e outros</option>
                </Select>
            </FormControl>
            <TextField
                name='description'
                value={form.description}
                onChange={handleInput}
                id="outlined-multiline-static"
                label="O que te motiva a nos ajudar?"
                multiline
                rows={4}
                variant="outlined"
                margin='normal'
            />
            <ApplicationButton variant="contained" color="primary" type="submit">
                Enviar
            </ApplicationButton>
        </form>
    )
}
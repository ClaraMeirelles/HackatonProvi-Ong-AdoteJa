import { useForm } from "../../Hooks/useForm"

export default function ApplicationFormPage() {
    const { form, handleInput, clearInputs } = useForm()
    const submitForm = (e) => {
        e.preventDefault()

    }
    return (
        <>
        FORMULARIO
        <form onSubmit={submitForm}>
            
        </form>
        </>
    )
}
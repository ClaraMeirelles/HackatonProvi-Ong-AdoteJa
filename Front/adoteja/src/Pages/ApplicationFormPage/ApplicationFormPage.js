import { ApplicationFormContainer } from "./styled"
import ApplicationForm from "./ApplicationForm"
import Header from "../../Components/Header/Header"

export default function ApplicationFormPage() {

    return (
        <>
        <Header />
        <ApplicationFormContainer>
            <h1>Formulário de inscrição para voluntário</h1>
            <p>Antes de qualquer coisa, muito obrigada por querer nos ajudar a melhorar a vida dos pets de Mogi das Cruzes!</p>
            <p>Agora, precisamos de algumas informações sobre você, tudo bem?</p>
            <ApplicationForm />
        </ApplicationFormContainer>
        </>
    )
}
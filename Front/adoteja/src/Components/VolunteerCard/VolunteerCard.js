import { VolunteerCardContainer } from "./styled";
import { Button } from "@material-ui/core";
// import DeleteIcon from '@material-ui/icons/Delete';


export default function VolunteerCard({ volunteer }) {
    return (
        <VolunteerCardContainer>
            <p><strong>Nome:</strong> {volunteer.name}</p>
            <p><strong>CPF:</strong> {volunteer.cpf && volunteer.cpf}</p>
            <p><strong>E-mail:</strong> {volunteer.email && volunteer.email}</p>
            <p><strong>Telefone:</strong> {volunteer.contact && volunteer.contact} </p>
            <p><strong>Cargo:</strong> {volunteer.category} </p>
            <p><strong>Endereço:</strong> {volunteer.address && volunteer.address} </p>
            <p><strong>Descrição:</strong> {volunteer.description && volunteer.description}</p>
            <p><strong>Data do envio:</strong> {volunteer.date}</p>
            <Button
                color="primary"
            // startIcon={<DeleteIcon />}
            >
                 Apagar candidatura
            </Button>
        </VolunteerCardContainer>
    )

}
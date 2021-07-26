import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { useHistory } from "react-router"
import Header from "../../Components/Header/Header";
import VolunteerCard from "../../Components/VolunteerCard/VolunteerCard";
import { AdminPageContainer, VolunteersContainer } from "./styled";

export default function AdminPage() {
    const name = 'Karina'
    const volunteers = [
        {
            name: 'João Santos',
            cpf: '000.000.000-00',
            email: 'joao@email.com',
            contact: '(11) 9999-9999',
            category: 'Veterinário',
            address: 'Rua dos Bobos, nº 0',
            description: 'Sou recém formado e quero participar de um trabalho voluntário',
            date: '25/07/2021',
        },
        {
            name: 'João Santos',
            cpf: '000.000.000-01',
            email: 'joao@email.com',
            contact: '(11) 9999-9999',
            category: 'Veterinário',
            address: 'Rua dos Bobos, nº 0',
            description: 'Sou recém formado e quero participar de um trabalho voluntário',
            date: '25/07/2021',
        },
        {
            name: 'João Santos',
            cpf: '000.000.000-02',
            email: 'joao@email.com',
            contact: '(11) 9999-9999',
            category: 'Veterinário',
            address: 'Rua dos Bobos, nº 0',
            description: 'Sou recém formado e quero participar de um trabalho voluntário',
            date: '25/07/2021',
        },
        {
            name: 'João Santos',
            cpf: '000.000.000-03',
            email: 'joao@email.com',
            contact: '(11) 9999-9999',
            category: 'Veterinário',
            address: 'Rua dos Bobos, nº 0',
            description: 'Sou recém formado e quero participar de um trabalho voluntário',
            date: '25/07/2021',
        }
    ]

    // const history = useHistory()
    // useProtectedPage(history)
    return (
        <>
            <Header />
            <AdminPageContainer>
            <h1>Olá, {name}</h1>
            <h3>Conheça os Voluntários:</h3>
            <VolunteersContainer>
                {volunteers ?
                    volunteers.map((volunteer) => {
                        return <VolunteerCard volunteer={volunteer} key={volunteer.name+volunteer.cpf}/>
                    }) :
                    <p>Ainda não temos nenhum voluntário ):</p>}
            </VolunteersContainer>
        </AdminPageContainer>
        </>
    )
}
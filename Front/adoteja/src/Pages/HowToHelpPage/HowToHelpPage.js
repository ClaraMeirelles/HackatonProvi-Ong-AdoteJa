import React from "react"
import { useHistory } from "react-router-dom"
import Header from "../../Components/Header/Header"
import { goToApplication } from "../../Routes/coordinator"
import { HowToHelpPageContainer, PrimaryColorContainer, SecondaryColorContainer, TercearyColorContainer, HowToHelpButton } from "./styled"


export default function HowToHelpPage() {
    const history = useHistory()
    return (
        <HowToHelpPageContainer>
            <Header />
            <SecondaryColorContainer>
                <div>
                    <h1>
                        Trabalho voluntário
                    </h1>
                    <p>
                        Estamos recebendo candidaturas para pessoas voluntárias veterinárias,
                        enfermeiras veterinárias e para outros serviços na ONG, como para ajudar nos mutirões de castração e feiras de adoção,
                        por exemplo.
                    </p>
                </div>
                <HowToHelpButton variant="contained" color='secondary' onClick={() => goToApplication(history)}>
                    Seja um voluntário na Adote Já!
                </HowToHelpButton>
            </SecondaryColorContainer>
            <TercearyColorContainer>
                <ul>
                    <li>Doação de ração para cães e gatos</li>
                    <li>Areia para gatos</li>
                    <li>Casinhas para cães</li>
                    <li>Tapetes higiênicos</li>
                    <li>Medicamentos</li>
                </ul>
                <ul>
                    <li>Cobertores ou caminhas</li>
                    <li>Potes de comida ou água</li>
                    <li>Material de limpeza</li>
                    <li>Vaquinha de arrecadação para castrações</li>
                </ul>
                <h1>Outras formas<br/> de nos ajudar</h1>
            </TercearyColorContainer>
            <PrimaryColorContainer>
            <h1>Recebemos em</h1>
                <p>Clínica Veterinária Doutor dos Bichos, R. Antônio Trevisane, 235 - Centro Histórico de São Paulo, Ferraz de Vasconcelos</p>
            </PrimaryColorContainer>
        </HowToHelpPageContainer>
    )
}
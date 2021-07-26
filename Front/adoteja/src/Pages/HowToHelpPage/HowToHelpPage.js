import React from "react"
import { useHistory } from "react-router-dom"
import Header from "../../Components/Header/Header"
import { HowToHelpPageContainer, PrimaryColorContainer, SecondaryColorContainer, TercearyColorContainer } from "./styled"


export default function HowToHelpPage() {
    const history = useHistory()
    return (
        <HowToHelpPageContainer>
            <Header />
            <PrimaryColorContainer>
                <h1>
                    Colabore com a nossa arrecadação!
                </h1>
                <h3>O dinheiro arrecadado será destinado à castração de animais</h3>
            </PrimaryColorContainer>
            <SecondaryColorContainer>
                <ul>
                    <li>Veterinário</li>
                    <li>Enfermeiro Veterinário</li>
                    <li>Voluntários</li>
                </ul>
                <div>
                    <h1>Precisamos de você!</h1>
                    <p>Nos mutirões de castração e feiras de adoção!</p>
                    <h3>Seja um voluntário na Adote Já!</h3>
                </div>
            </SecondaryColorContainer>
            <TercearyColorContainer>
                <h1>Como ajudar?</h1>
                <ul>
                    <li>Doação de ração para cães e gatos</li>
                    <li>Areia para gatos</li>
                    <li>Casinhas para cães</li>
                    <li>Tapetes higiênicos</li>
                    <li>Medicamentos</li>
                    <li>Cobertores ou caminhas</li>
                    <li>Potes de comida ou água</li>
                    <li>Material de limpeza</li>
                    <li>Vaquinha de arrecadação para castrações</li>
                </ul>
            </TercearyColorContainer>
        <PrimaryColorContainer>
            <p>Clínica Veterinária Doutor dos Bichos, R. Antônio Trevisane, 235 - Centro Histórico de São Paulo, Ferraz de Vasconcelos</p>
            <h1>Endereço de entrega<br/> das doações</h1>
        </PrimaryColorContainer>

            COMO AJUDAR
        </HowToHelpPageContainer>
    )
}
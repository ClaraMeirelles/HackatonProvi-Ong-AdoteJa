import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Header from "../../Components/Header/Header"
import { DepoimentsSection, InfosContainer, PrimaryColorContainer, SecondaryColorContainer, TercearyColorContainer } from "./styled"

export default function HomePage() {
    const history = useHistory()
    return (
        <>
        <Header/>
        <InfosContainer>
            <SecondaryColorContainer>
                <h1>
                    Numero de atendimentos
                </h1>
            </SecondaryColorContainer>
            <TercearyColorContainer>
                <h1>
                    50.000+
                </h1>
                <p>animais resgatados, tratados e postos para adoção</p>
            </TercearyColorContainer>
            <PrimaryColorContainer>
                <h1>
                    Numero de castrações
                </h1>
            </PrimaryColorContainer>
            <SecondaryColorContainer>
                <h1>
                    Numero de atendimentos
                </h1>
            </SecondaryColorContainer>
        </InfosContainer>

        <DepoimentsSection>
            
        </DepoimentsSection>
        </>
    )
}
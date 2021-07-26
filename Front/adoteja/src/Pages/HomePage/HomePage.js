import React from "react"
import { useHistory } from "react-router-dom"
import Header from "../../Components/Header/Header"
import { DepoimentsSection, EducationalSection, HomeButton, HomeButtonDoar, HomePageContainer, HowToHelp, InfosContainer, PrimaryColorContainer, SecondaryColorContainer, TercearyColorContainer } from "./styled"

export default function HomePage() {
    const history = useHistory()
    return (
        <>
            <Header />
            <HomePageContainer>
                <HowToHelp>
                    <h1>Como doar?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis massa ut convallis mollis.
                        Fusce vehicula mauris eu condimentum rutrum. Nunc mollis purus eu arcu malesuada scelerisque.</p>
                        <div>
                            <p>QRCODE+INFOS</p>
                            <p>QRCODE+INFOS</p>
                        </div>
                </HowToHelp>
                <InfosContainer>
                    <SecondaryColorContainer>
                        <h1>
                            2500+
                        </h1>
                        <p> atendimentos veterinários feitos pela clínica móvel </p>
                    </SecondaryColorContainer>
                    <TercearyColorContainer>
                        <h1>
                            50.000+
                        </h1>
                        <p>animais resgatados, tratados e postos para adoção</p>
                    </TercearyColorContainer>
                    <PrimaryColorContainer>
                        <h1>
                            200+
                        </h1>
                        <p>Castrações feitas pela clínica Móvel</p>
                    </PrimaryColorContainer>
                    <SecondaryColorContainer>
                        <h1>
                            15+
                        </h1>
                        <p>Anos dedicados à proteção animal</p>
                    </SecondaryColorContainer>
                </InfosContainer>

                <DepoimentsSection>
                    <img src={'https://image.freepik.com/fotos-gratis/uma-menina-esta-segurando-um-cachorro-vira-lata-nos-bracos-cuidando-de-animais_1153-5155.jpg'} alt="Amendoim e sua tutora" />
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis massa ut convallis mollis.
                            Fusce vehicula mauris eu condimentum rutrum. Nunc mollis purus eu arcu malesuada scelerisque.
                            Fusce nec tristique magna. Duis lacinia felis sit amet porttitor vestibulum. Sed sit amet velit metus.
                            Donec nec malesuada quam. Sed tellus lectus, dapibus eu urna et, rhoncus imperdiet eros.
                            Proin vestibulum dui vel libero mattis, vitae facilisis est sagittis.</p>
                        <p><i>Ana Cláudia Santos, mamãe do Amendoim</i></p>
                    </div>
                </DepoimentsSection>
                <EducationalSection>
                    <div>
                        <h1>Por que castrar?</h1>
                        <p>Cães não castrados podem gerar cerca de 12 filhotes por ano, em 6 anos são 67 mil novos cães; Gatos 1 ano 20 filhotes, 6 anos 420 mil;<br />
                            Além da superpopulação de animais abandonados, a castração reduz a chance de fugas, demarcações de território, câncer, aumenta a longevidade, além de prevenir diversas outras doenças.
                        </p>
                    </div>
                    <div>
                        <HomeButtonDoar variant="contained" color="white">
                            Doar
                        </HomeButtonDoar>
                        <HomeButton variant="outlined" color="white">
                            Saber mais
                        </HomeButton>
                    </div>
                </EducationalSection>
            </HomePageContainer>
        </>
    )
}
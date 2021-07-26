    import styled from 'styled-components'
    import {black, primaryColor, secondaryColor, tercearyColor} from '../../Constants/colors'
    import { Button } from "@material-ui/core"

    export const HomePageContainer = styled.main`
        display: flex;
        flex-direction: column;
        align-items: center;
        >section{
            height: 50vh;
            width: 100%;
            color: white;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            p{
                max-width: 50vw;
            }
            img{
                height: 30vh;
                width: 30vh;
                object-fit: cover;
                border-radius: 30px;
            }
        }
        a{
            text-decoration:none;
            color: ${primaryColor};
            font-weight:bold;
            cursor: pointer;
            :hover{
                text-decoration: underline;
            }
        }
    `

    export const InfosContainer = styled.div`
        display: flex;
        justify-content: space-evenly;
        padding: 32px;
        width: 100%;
        height: 40vh;
        margin-top: 20vh;
        color: black;
        section{
            height: 20vh;
            min-height: fit-content;
            border-radius: 30px;
            padding: 16px 32px;
            width: 15vw;
            text-align:center;
            opacity: 50%;
            h1{
                opacity: 100%;
                font-size: 2em;
            }
            p{
                font-size: 0.9em;
            }
        }
    `
    export const PrimaryColorContainer = styled.section`
        background-color: ${primaryColor};
    `
    export const SecondaryColorContainer = styled.section`
        background-color: ${secondaryColor};
    `
    export const TercearyColorContainer = styled.section`
        background-color: ${tercearyColor};
    `
    export const DepoimentsSection = styled.section`
        background-color: ${primaryColor};
        color: white;
    `

    export const EducationalSection = styled.section`
        background-color: ${tercearyColor};
        color: white;
        margin-bottom: 20vh;
    `

    export const HomeButtonDoar = styled(Button)`
        width: 30vw;
        display: block;
        border-color: white;
        color: ${tercearyColor};
        background-color: white;
    `
    export const HomeButton = styled(Button)`
        width: 30vw;
        display: block;
        border-color: white;
        color: white !important;
    `

    export const HowToHelp = styled.section`
        display: flex;
        flex-direction: column;
        height: 60vh;
        align-items: center;
        text-align: center;
        h1{
            color: ${primaryColor};
            font-size: 2em;
        }
        p{
            color: ${black}
        }
        div{
            display: flex;
            justify-content: space-evenly;
        }
    `
import styled from 'styled-components'
import {primaryColor, secondaryColor, tercearyColor} from '../../Constants/colors'
import { Button } from "@material-ui/core"

export const HowToHelpPageContainer = styled.main`
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;
    h1{
        font-size: 3em;
        margin:0;
    }
    li{
        font-size: 1.3em;
        margin: 10px;
    }
    ul{
        list-style: none;
    }
    >section{
        height: fit-content;
        min-height: 20vh;
        width: 100%;
        color: white;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 10vh;
        padding: 1vh 1vw;
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
        /* height: 20vh; */
        min-height: fit-content;
        border-radius: 30px;
        padding: 16px 32px;
        max-width: 15vw;
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

export const HowToHelpButton = styled(Button)`
    width: 30vw;
    display: block;
    border-color: white;
    color: ${secondaryColor};
    background-color: white;
`
